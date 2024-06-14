"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../api/firebaseConfig";
// import toast from "react-hot-toast";
import { Cookie, Eye, EyeOff, LoaderCircle } from "lucide-react";
// import Cookie from "js-cookie";
import Image from "next/image";
import {
  DocumentData,
  QueryDocumentSnapshot,
  QuerySnapshot,
  collection,
  getDocs,
  query,
} from "firebase/firestore";
// import { LoadInfRequest } from "../components/header";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import Banner from "@/../public/bannerloginnew.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const route = useRouter();
  const [loading, setLoading] = useState(false);
  const [userCredentialInfo, setUserCredentialInfo] = useState<User | null>(
    null,
  );
  const [loadInf, setLoadInf] = useState<[]>([]);

  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const router = useRouter();

  async function handleLogin(e: React.FormEvent<HTMLElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      if (!user.uid) {
        return;
      }
      setUserCredentialInfo(user);
      //   Cookie.set("user", user.uid);
      router.push("/dashboard");
      //   toast.success("Login bem-sucedido", {
      //     position: "top-right",
      //   });
    } catch (error: any) {
      setLoading(false);
      //   toast.error("Erro ao fazer login", {
      //     position: "top-right",
      //   });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div
        className="flex h-[20rem] items-center justify-center bg-orange-600 md:h-[24rem] lg:block lg:h-screen"
        style={{ display: "flex" }}
      >
        <Image
          src={Banner}
          alt="Image"
          width={0}
          height={0}
          sizes="100vh"
          className=" flex h-[15rem] w-[15rem] items-center justify-center object-fill dark:brightness-[0.2] dark:grayscale  md:h-[500px] md:w-[610px]"
        />
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <strong>Gestão de Mesas de Restaurante.</strong>
            <p className="mb-3 flex w-full flex-col text-sm text-muted-foreground">
              Gerencie as mesas de seus restaurante, controle os pedidos,
              reserve mesas, monitore a cozinha, disponibilize um cardápio
              Digital para seus Clientes.
            </p>
            <h1 className="flex items-center justify-center text-3xl font-bold">
              L<Cookie />
              gin
            </h1>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu email"
                className="placeholder::text-black w-full rounded-md  bg-secondary  p-3 dark:text-white dark:placeholder:text-white"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Esqueceu sua senha?
                </Link>
              </div>
              <div className="relative flex w-full items-center">
                <Input
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite sua senha"
                  className="placeholder::text-black w-full rounded-md  bg-secondary p-3 dark:text-white dark:placeholder:text-white"
                />
                <div className="absolute right-[1rem] flex">
                  <button
                    type="button"
                    className="h-[2rem] cursor-pointer border-none text-xl text-primary"
                    onClick={handleClick}
                  >
                    {show ? <Eye /> : <EyeOff />}
                  </button>
                </div>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-800"
            >
              Login
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Não tenho uma conta?{" "}
            <Link href="#" className="underline">
              Cadastra-se
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
