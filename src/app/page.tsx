"use client";

import Image from "next/image";
import imageHeader from "../../public/bg.svg";
import colacolar from "../../public/cocacola.png";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Info, MapPin } from "lucide-react";
import { IoIosCheckmarkCircle, IoLogoWhatsapp } from "react-icons/io";

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
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Home() {
  const [cart, setCart] = useState(0);

  const handleAddOpenCartProduct = () => {
    if (cart === 0) {
      setCart(1);
    }
  };

  const handleAddProduct = () => {
    setCart((prevent) => prevent + 1);
  }

  const handleRemoveToProduct = () => {
    // if (cart <= 1) {
    //   setCart(0);
    //   return;
    // }
    setCart((prevtRemove) => prevtRemove - 1);
  };
  return (
    <main className="z-40 flex min-h-screen flex-col items-center justify-between">
      <div className="fixed top-0 z-10 h-28 w-full bg-black">
        <Image
          src={imageHeader}
          alt="image"
          layout="fill"
          objectFit="container"
          objectPosition="center"
        />
      </div>
      <Header />
      <ScrollArea className="left-0 right-0 mx-auto my-2  mb-[4rem] mt-[11rem] flex min-h-[calc(100vh-12rem)] w-full max-w-6xl flex-1 flex-col gap-3 overflow-y-auto p-4 px-4">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <div>
              <h1 className="text-start text-xl font-bold">Bebidas</h1>
              <div className="grid gap-3 md:grid-cols-2">
                <Button variant="outline" className="mb-3 flex items-center justify-between p-4 mt-3 h-40" onClick={handleAddOpenCartProduct}>
                  <div className="relative h-[120px] w-[100px] overflow-hidden  rounded-md lg:h-[110px] lg:w-[110px]">
                    <Image
                      src={colacolar}
                      alt="image"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                  <div className="ml-3 flex flex-col gap-2 text-sm md:text-xl">
                    <strong>Cola cola 2 litros</strong>
                    <span>Cola cola 2 litros</span>
                    <strong>R$ 12,00</strong>
                  </div>
                </Button>
                
              </div>
            </div>
          </AlertDialogTrigger>
          {cart > 0 && (
            <AlertDialogContent className="p-3 w-[90%]">
            <Image
              src={colacolar}
              alt="image"
              className="h-full w-full items-center justify-between"
            />
            <AlertDialogHeader>
              <AlertDialogTitle className="flex items-start">
                Coca-cola 2L
              </AlertDialogTitle>
              <AlertDialogDescription className="flex items-start text-left">
                A Coca-Cola Original é o refrigerante mais tradicional e
                consumido no mundo. Possui sabor inconfundível e único.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <div>
              <Label>alguma observação sobre o pedido ?</Label>
              <Textarea
                className="mt-1 w-full rounded-md border bg-gray-100 p-2 outline-none"
                placeholder="ex: retire o alface"
              />
            </div>
            <AlertDialogFooter className="flex">
              <div className="flex w-full justify-between">
                <div className="flex items-center gap-2 border-transparent">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleRemoveToProduct}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span>{cart}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleAddProduct}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <AlertDialogAction className="flex bg-green-600 px-6 hover:bg-green-900">
                  Adicionar R$ 12,00
                </AlertDialogAction>
              </div>
            </AlertDialogFooter>
          </AlertDialogContent>
          )}

        </AlertDialog>
      </ScrollArea>
      <div className="fixed bottom-0 z-40 w-full items-center justify-between bg-black pt-2">
        <Footer />
      </div>
    </main>
  );
}
