import { Card } from "@/components/ui/card";
import Link from "next/link";
import { FaHamburger } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdAccessTimeFilled } from "react-icons/md";
import Logo from "@/../public/logodashboard05.png";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { AlignJustify } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Header = () => {
  return (
    <Card className="flex h-28 w-full  items-center justify-center rounded-none border-none bg-orange-600 px-4">
      <div className="flex w-full max-w-6xl items-center justify-between">
        <div className="flex w-full gap-6">
          <Image
            src={Logo}
            alt="Image logo larica"
            sizes="100vw"
            width={100}
            height={100}
          />
          <div className="hidden w-full flex-row justify-between lg:flex">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 rounded-md bg-white px-6 py-2 text-sm hover:border hover:bg-transparent hover:text-white"
            >
              <FaHamburger />
              Inicio
            </Link>
            <Link
              href="/dashboard/followup"
              className="flex items-center gap-2 text-ellipsis whitespace-nowrap rounded-md bg-white px-6 py-2 text-sm hover:border hover:bg-transparent hover:text-white"
            >
              <IoFastFood />
              Acompanhar pedidos
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem className="flex w-full ">
                  <NavigationMenuTrigger className="gap-2 text-sm ">
                    <GiHamburgerMenu />
                    Cardapio
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="flex w-96 cursor-pointer flex-col items-center justify-center">
                    <NavigationMenuLink className="w-36 items-center px-6 py-3 text-sm  hover:bg-slate-200">
                      <Link href="/dashboard/category">Categoria</Link>
                    </NavigationMenuLink>
                    <Separator />
                    <NavigationMenuLink className="w-36 items-center  px-6 py-3 text-sm hover:bg-slate-200">
                      Produtos
                    </NavigationMenuLink>
                    <Separator />
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link
              href="#"
              className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap rounded-md bg-white px-6 py-2 text-sm hover:border hover:bg-transparent hover:text-white"
            >
              <MdAccessTimeFilled />
              Historico Pedidos
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem className="flex w-full ">
                  <NavigationMenuTrigger>Minha conta</NavigationMenuTrigger>
                  <NavigationMenuContent className="flex w-96 cursor-pointer flex-col items-center justify-center">
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
            </NavigationMenu>
          </div>
        </div>

        <Sheet>
          <SheetTrigger className="flex lg:hidden text-white">
            <Button className="border bg-transparent p-2 hover:bg-transparent">
              <AlignJustify />
            </Button>
          </SheetTrigger>
          <SheetContent side={"right"}>
            <SheetHeader>
              <SheetTitle>MENU</SheetTitle>

              <Button className="p-0 hover:bg-red-600 ">
                <Link
                  href="/dashboard"
                  className="flex w-full items-center justify-center gap-2 rounded-md px-6 py-2 text-sm text-white hover:bg-transparent "
                >
                  Inicio
                </Link>
              </Button>
              <Button className="p-0 hover:bg-red-600 ">
                <Link
                  href="/dashboard/followup"
                  className="flex w-full items-center justify-center gap-2 rounded-md px-6 py-2 text-sm text-white  hover:bg-transparent"
                >
                 
                  Acompanhar pedidos
                </Link>
              </Button>

              <Accordion
                className="w-full bg-primary px-2 text-center rounded-md  text-primary-foreground"
                type="single"
                collapsible
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <div className="flex items-center justify-center text-sm gap-2 rounded-lg">
                     
                      Cardapio
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Button className="w-full p-0 hover:bg-red-600" >
                      <Link
                        href="/dashboard/category"
                        className="flex w-full items-center justify-center gap-2 rounded-md px-6 py-2 text-sm text-white hover:bg-transparent "
                      >
                       
                        Categoria
                      </Link>
                    </Button>
                  </AccordionContent>
                  <AccordionContent>
                    <Button className="w-full p-0 hover:bg-red-600">
                      <Link
                        href="/dashboard"
                        className="flex w-full items-center justify-center gap-2 rounded-md px-6 py-2 text-sm text-white hover:bg-transparent "
                      >                       
                        Produto
                      </Link>
                    </Button>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Button className="hover:bg-red-600">
              <Link
                  href="/dashboard"
                  className="flex w-full items-center justify-center gap-2 rounded-md px-6 py-2 text-sm text-white hover:bg-transparent "
                >
                  
                  Historico Pedidos
                </Link>
             
              </Button>
              <Accordion
                className="w-full bg-primary px-2 text-center rounded-md  text-primary-foreground"
                type="single"
                collapsible
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <div className="flex items-center justify-center text-sm gap-2 rounded-lg">
                      
                      Minha conta
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Button className="w-full p-0 hover:bg-red-600" >
                      <Link
                        href="/dashboard"
                        className="flex w-full items-center justify-center gap-2 rounded-md px-6 py-2 text-sm text-white hover:bg-transparent "
                      >
                       
                        Categoria
                      </Link>
                    </Button>
                  </AccordionContent>
                  <AccordionContent>
                    <Button className="w-full p-0 hover:bg-red-600">
                      <Link
                        href="/dashboard"
                        className="flex w-full items-center justify-center gap-2 rounded-md px-6 py-2 text-sm text-white hover:bg-transparent "
                      >                       
                        Produto
                      </Link>
                    </Button>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </Card>
  );
};

export default Header;
