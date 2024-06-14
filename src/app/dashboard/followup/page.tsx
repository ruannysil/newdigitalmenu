"use client";
import { Button } from "@/components/ui/button";
import Header from "../../components/header";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FaArrowRotateRight } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import hamburger from "@/../public/logo.jpg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const FollowUp = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div>
      <Header />
      <div className="flex w-full  items-center justify-center rounded-none border-none">
        <div className="mt-10 flex w-full max-w-6xl flex-col items-start justify-between gap-10">
          <Card className="flex w-full items-center justify-between border-transparent shadow-none px-2 text-center">
            <h1 className="text-sm font-bold md:text-2xl border-none">
              Acompanhamento de Pedidos
            </h1>{" "}
            <Button
              onClick={handleClick}
              className="flex gap-2 border border-red-500 bg-transparent text-red-700 hover:bg-red-500 hover:text-white"
            >
              <FaArrowRotateRight
                className={loading ? "animate-spin" : "animate-none"}
              />
              Atualizar
            </Button>
          </Card>
          <ScrollArea className="borde  flex h-[70vh] w-full rounded-md">
            <div className="my-4  flex w-full px-2">
              <Card className="flex  w-full flex-col items-start bg-red-400/100">
                <div className="flex w-full flex-col  items-start justify-start gap-2 border-b-2 bg-[#F8F8F8] p-2">
                  <div
                    className="flex w-full items-center md:justify-start justify-between gap-4 text-center"
                  >
                    <p className="text-xs flex flex-col items-start text-center">Pedidos <span>#12</span></p>
                    <Badge className="flex bg-slate-600 p-1">
                    10/01/2024-12:58
                    </Badge>
                    <Badge className="flex bg-red-400 p-1 px-4 text-xs">
                      Pedido em produção
                    </Badge>
                  </div>
                  <span className="text-xs">
                    Caio teles de Souza - Rua Portugal, 512 - casa 34 - R$
                    120,00
                  </span>
                </div>
               <div className="flex items-end justify-end w-full pr-3 pt-2"> <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem className="flex w-full ">
                        <NavigationMenuTrigger>
                          Minha conta
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="flex w-[100%] cursor-pointer flex-col items-center justify-center">
                          <NavigationMenuLink className="w-36 items-center  px-6 py-3 text-sm hover:bg-slate-200">
                            Aguardando
                          </NavigationMenuLink>
                          <Separator />
                          <NavigationMenuLink className="w-36 items-center  px-6 py-3 text-sm hover:bg-slate-200">
                            Em produção
                          </NavigationMenuLink>
                          <Separator />
                          <NavigationMenuLink className="w-36 items-center  px-6 py-3 text-sm hover:bg-slate-200">
                            Saiu entrega
                          </NavigationMenuLink>
                          <Separator />
                          <NavigationMenuLink className="w-36 items-center  px-6 py-3 text-sm hover:bg-slate-200">
                            Finalizar
                          </NavigationMenuLink>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu></div>
                <div className="flex w-full items-center justify-between px-4 py-7">
                  <Image
                    src={hamburger}
                    alt="image"
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="w-20 rounded-md pr-2"
                  />
                  
                  <div className="flex gap-8">
                    <div className="flex flex-col items-start">
                      <strong>Hambuger gra mestre</strong>
                      <span className="flex text-sm">
                        <p>03</p> x <p>R$ 40,00</p>
                      </span>
                    </div>
                    <p className="mt-1 flex justify-center text-sm">R$ 40,00</p>
                  </div>
                </div>
                 
              </Card>
            </div>
            <div className="my-4  flex w-full px-2">
              <Card className="flex  w-full flex-col items-start bg-red-400/100">
                <div className="flex w-full flex-col  items-start justify-start gap-2 border-b-2 bg-[#F8F8F8] p-2">
                  <div
                    className="flex w-full items-center md:justify-start justify-between gap-4 text-center"
                  >
                    <p className="text-xs flex flex-col items-start text-center">Pedidos <span>#12</span></p>
                    <Badge className="flex bg-slate-600 p-1">
                    10/01/2024-12:58
                    </Badge>
                    <Badge className="flex bg-red-400 p-1 px-4 text-xs">
                      Pedido em produção
                    </Badge>
                  </div>
                  <span className="text-xs">
                    Caio teles de Souza - Rua Portugal, 512 - casa 34 - R$
                    120,00
                  </span>
                </div>
               <div className="flex items-end justify-end w-full pr-3 pt-2"> <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem className="flex w-full ">
                        <NavigationMenuTrigger>
                          Minha conta
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="flex w-[100%] cursor-pointer flex-col items-center justify-center">
                          <NavigationMenuLink className="w-36 items-center  px-6 py-3 text-sm hover:bg-slate-200">
                            Aguardando
                          </NavigationMenuLink>
                          <Separator />
                          <NavigationMenuLink className="w-36 items-center  px-6 py-3 text-sm hover:bg-slate-200">
                            Em produção
                          </NavigationMenuLink>
                          <Separator />
                          <NavigationMenuLink className="w-36 items-center  px-6 py-3 text-sm hover:bg-slate-200">
                            Saiu entrega
                          </NavigationMenuLink>
                          <Separator />
                          <NavigationMenuLink className="w-36 items-center  px-6 py-3 text-sm hover:bg-slate-200">
                            Finalizar
                          </NavigationMenuLink>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu></div>
                <div className="flex w-full items-center justify-between px-4 py-7">
                  <Image
                    src={hamburger}
                    alt="image"
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="w-20 rounded-md pr-2"
                  />
                  
                  <div className="flex gap-8">
                    <div className="flex flex-col items-start">
                      <strong>Hambuger gra mestre</strong>
                      <span className="flex text-sm">
                        <p>03</p> x <p>R$ 40,00</p>
                      </span>
                    </div>
                    <p className="mt-1 flex justify-center text-sm">R$ 40,00</p>
                  </div>
                </div>
                 
              </Card>
            </div>
            <div className="my-4  flex w-full px-2">
              <Card className="flex  w-full flex-col items-start bg-red-400/100">
                <div className="flex w-full flex-col  items-start justify-start gap-2 border-b-2 bg-[#F8F8F8] p-2">
                  <div
                    className="flex w-full items-center md:justify-start justify-between gap-4 text-center"
                  >
                    <p className="text-xs flex flex-col items-start text-center">Pedidos <span>#12</span></p>
                    <Badge className="flex bg-slate-600 p-1">
                    10/01/2024-12:58
                    </Badge>
                    <Badge className="flex bg-red-400 p-1 px-4 text-xs">
                      Pedido em produção
                    </Badge>
                  </div>
                  <span className="text-xs">
                    Caio teles de Souza - Rua Portugal, 512 - casa 34 - R$
                    120,00
                  </span>
                </div>
               <div className="flex items-end justify-end w-full pr-3 pt-2"> <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem className="flex w-full ">
                        <NavigationMenuTrigger>
                          Minha conta
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="flex w-[100%] cursor-pointer flex-col items-center justify-center">
                          <NavigationMenuLink className="w-36 items-center  px-6 py-3 text-sm hover:bg-slate-200">
                            Aguardando
                          </NavigationMenuLink>
                          <Separator />
                          <NavigationMenuLink className="w-36 items-center  px-6 py-3 text-sm hover:bg-slate-200">
                            Em produção
                          </NavigationMenuLink>
                          <Separator />
                          <NavigationMenuLink className="w-36 items-center  px-6 py-3 text-sm hover:bg-slate-200">
                            Saiu entrega
                          </NavigationMenuLink>
                          <Separator />
                          <NavigationMenuLink className="w-36 items-center  px-6 py-3 text-sm hover:bg-slate-200">
                            Finalizar
                          </NavigationMenuLink>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu></div>
                <div className="flex w-full items-center justify-between px-4 py-7">
                  <Image
                    src={hamburger}
                    alt="image"
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="w-20 rounded-md pr-2"
                  />
                  
                  <div className="flex gap-8">
                    <div className="flex flex-col items-start">
                      <strong>Hambuger gra mestre</strong>
                      <span className="flex text-sm">
                        <p>03</p> x <p>R$ 40,00</p>
                      </span>
                    </div>
                    <p className="mt-1 flex justify-center text-sm">R$ 40,00</p>
                  </div>
                </div>
                 
              </Card>
            </div>
           
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default FollowUp;
