import Image from "next/image";
import imageHeader from "../../../public/bgburger.gif";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Info, MapPin } from "lucide-react";
import { IoIosCheckmarkCircle, IoLogoWhatsapp } from "react-icons/io";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  MdAccessTimeFilled,
  MdDeliveryDining,
  MdOutlineCircle,
} from "react-icons/md";
import { GiPlainCircle } from "react-icons/gi";
import { Separator } from "@/components/ui/separator";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaShoppingBag } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className="fixed left-0 right-0 top-0 z-30 mx-auto flex max-w-6xl items-center px-4">
        <Card className="relative left-[0.5] top-[5rem] flex w-full items-center justify-between rounded-md border bg-white">
          <div className="relative flex h-24 w-28 overflow-hidden">
            <Image
              src={imageHeader}
              alt="image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-md"
            />
          </div>
          <div className="px-3">
            <h1 className="pl-4 text-black">Minibuger</h1>
            <div className="flex gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-none hover:bg-transparent"
                  >
                    <Info />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="mb-4 text-left">
                      Informações
                    </DialogTitle>
                    <Badge
                      variant="outline"
                      className="w-36 items-center gap-1 px-4 py-2 text-base"
                    >
                      <GiPlainCircle className="text-xs text-red-700" />
                      Fechado
                      <MdAccessTimeFilled className="text-2xl" />
                    </Badge>
                    <DialogDescription className="flex items-center justify-between text-start text-xl font-bold text-black">
                      Mini Burger
                      <Image
                        src={imageHeader}
                        alt="image"
                        className="h-10 w-10 rounded-md "
                      />
                    </DialogDescription>
                    <IoLogoWhatsapp size={26} />
                  </DialogHeader>
                  <Separator />
                  <DialogDescription className="flex flex-col justify-between gap-2 text-start text-xl font-bold text-black">
                    Tipos de serviços
                    <Badge
                      variant="outline"
                      className="flex items-center justify-between gap-1 px-4 py-2 text-base"
                    >
                      <div className="flex items-center gap-2">
                        <SiHomeassistantcommunitystore className="text-xl text-green-700" />
                        No local
                      </div>
                      <IoIosCheckmarkCircle className="text-2xl text-green-700" />
                    </Badge>
                    <Badge
                      variant="outline"
                      className="flex items-center justify-between gap-1 px-4 py-2 text-base"
                    >
                      <div className="flex items-center gap-2">
                        <FaShoppingBag className="text-xl text-green-700" />
                        Retirar na loja
                      </div>
                      <IoIosCheckmarkCircle className="text-2xl text-green-700" />
                    </Badge>
                    <Badge
                      variant="outline"
                      className="flex items-center justify-between gap-1 px-4 py-2 text-base"
                    >
                      <div className="flex items-center gap-2">
                        <MdDeliveryDining className="text-2xl text-green-700" />
                        Delivery
                      </div>
                      <IoIosCheckmarkCircle className="text-2xl text-green-700" />
                    </Badge>
                  </DialogDescription>
                  <DialogDescription className="mb-5 flex flex-col justify-between gap-2 text-start text-xl font-bold text-black">
                    Horários de funcionamento
                    <div className="mt-2 flex items-center justify-between text-base font-light">
                      <span>Segunda-feira</span>
                      <span className="flex items-center gap-2 text-red-700">
                        Fechado
                      </span>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-base font-light">
                      <span>Terça-feira</span>
                      <span className="flex items-center gap-2">
                        <MdAccessTimeFilled className="text-2xl" /> 18:00 - meia
                        noite
                      </span>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-base font-light">
                      <span>Quarta-feira</span>
                      <span className="flex items-center gap-2">
                        <MdAccessTimeFilled className="text-2xl" /> 18:00 - meia
                        noite
                      </span>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-base font-light">
                      <span>Quinta-feira</span>
                      <span className="flex items-center gap-2">
                        <MdAccessTimeFilled className="text-2xl" /> 18:00 - meia
                        noite
                      </span>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-base font-light">
                      <span>Sexta-feira</span>
                      <span className="flex items-center gap-2">
                        <MdAccessTimeFilled className="text-2xl" /> 18:00 - meia
                        noite
                      </span>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-base font-light">
                      <span>Sábado</span>
                      <span className="flex items-center gap-2">
                        <MdAccessTimeFilled className="text-2xl" /> 18:00 - meia
                        noite
                      </span>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-base font-light">
                      <span>Domingo</span>
                      <span className="flex items-center gap-2">
                        <MdAccessTimeFilled className="text-2xl" /> 18:00 - meia
                        noite
                      </span>
                    </div>
                  </DialogDescription>
                </DialogContent>
              </Dialog>

              <Link href="/#" className="p-2">
                <MapPin />
              </Link>
              <Link href="/#" className="p-2">
                <IoLogoWhatsapp size={26} />
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Header;
