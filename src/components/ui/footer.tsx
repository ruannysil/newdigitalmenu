"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { FaShoppingCart } from "react-icons/fa";

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

import { Badge } from "@/components/ui/badge";
import { MdAccessTimeFilled, MdDeliveryDining } from "react-icons/md";
import { GiPlainCircle } from "react-icons/gi";
import { Separator } from "@/components/ui/separator";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaShoppingBag } from "react-icons/fa";
import { Label } from "./label";
import { useState } from "react";
import { Input } from "./input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Footer = () => {
  const [name, setName] = useState("");
  const [showAdditionalInput, setShowAdditionalInput] = useState(false);

  return (
    <div className="mx-auto flex max-w-6xl justify-between  items-center px-4">
      <Card className="rounded-none border-none w-full bg-black">
        <div className="z-50 flex  w-full items-center justify-between gap-4 rounded-md px-6 py-4">
          <div className="flex flex-col text-white">
            <p>1 item</p>
            <p>R$ 32,00</p>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="destructive" className="flex gap-4">
                <FaShoppingCart />
                carrinho
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-start">Meu Carrinho</SheetTitle>
              </SheetHeader>
              <div className="grid gap-1 py-4">
                <div className="flex w-full items-center justify-between text-xs">
                  <div className="flex justify-between gap-1">
                    <span className="text-red-500">(3)</span>-<p>X-burger</p>
                    <p>R$ 25,00</p>
                  </div>
                  <Button className="bg-transparent p-1 text-red-600 hover:bg-transparent">
                    remover
                  </Button>
                </div>
                <div className="flex w-full items-center justify-between text-xs">
                  <div className="flex justify-between gap-1">
                    <span className="text-red-500">(3)</span>-<p>X-burger</p>
                    <p>R$ 25,00</p>
                  </div>
                  <Button className="bg-transparent p-1 text-red-600 hover:bg-transparent">
                    remover
                  </Button>
                </div>
                <div className="flex w-full items-center justify-between text-xs">
                  <div className="flex justify-between gap-1">
                    <span className="text-red-500">(3)</span>-<p>X-burger</p>
                    <p>R$ 25,00</p>
                  </div>
                  <Button className="bg-transparent p-1 text-red-600 hover:bg-transparent">
                    remover
                  </Button>
                </div>
              </div>
              <SheetFooter className="flex">
                <div className="flex w-full justify-between">
                  <SheetClose asChild className="flex">
                    <Button
                      type="submit"
                      className="bg-transparent px-7 py-2 text-black hover:bg-red-600 hover:text-white"
                    >
                      Voltar
                    </Button>
                  </SheetClose>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="rounded-md bg-green-600 px-7 py-2 font-normal text-white hover:bg-green-900">
                        Continuar
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle className="mb-4 text-left ">
                          Preencha as informações
                        </DialogTitle>
                        <Separator />
                      </DialogHeader>
                      <form>
                        <div className="mt-2 flex flex-col">
                          <div className="mb-5 flex flex-col gap-2">
                            <Label>Nome</Label>
                            <Input
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Digite seu nome"
                              className="rounded-md border bg-gray-100 py-2 pl-2"
                            />
                          </div>

                          <div className="mb-3 flex flex-col gap-2">
                            <Label className="mb-1 font-semibold">
                              Selecione o método de entrega:
                            </Label>
                            <RadioGroup
                              defaultValue="comfortable"
                              className="mb-1 flex items-center"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                  value="buscar"
                                  id="r1"
                                  onClick={() => setShowAdditionalInput(false)}
                                />
                                <Label htmlFor="r1">Buscar</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                  value="delivery"
                                  id="r2"
                                  onClick={() => setShowAdditionalInput(true)}
                                />
                                <Label htmlFor="r2">Delivery</Label>
                              </div>
                            </RadioGroup>
                          </div>
                          {showAdditionalInput && (
                            <div className="mt-2 flex flex-col gap-4">
                              <div className="mb-3 flex flex-col gap-2">
                                <Label className="mb-1 font-semibold">
                                  Selecione a forma de pagamento:
                                </Label>
                                <RadioGroup
                                  defaultValue="comfortable"
                                  className="mb-1 flex items-center gap-5"
                                >
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="buscar" id="r1" />
                                    <Label htmlFor="r1">Dinheiro</Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="delivery" id="r2" />
                                    <Label htmlFor="r2">Pix</Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="cartao" id="r2" />
                                    <Label htmlFor="r2">Cartão</Label>
                                  </div>
                                </RadioGroup>
                              </div>
                              <div className="mb-8 flex flex-col gap-7">
                                <div className="flex w-full gap-3">
                                  <div className="flex w-full flex-col gap-2">
                                    <Label>Rua</Label>
                                    <Input
                                      placeholder="Nome da rua"
                                      className="rounded-md border bg-gray-100 py-2 pl-2"
                                    />
                                  </div>
                                  <div className="flex w-40 flex-col gap-2">
                                    <Label>Número</Label>
                                    <Input
                                      type="number"
                                      className="rounded-md border bg-gray-100 py-2 pl-2"
                                    />
                                  </div>
                                </div>
                                <div className="flex w-full flex-col gap-2">
                                  <Label>Bairro</Label>
                                  <Input
                                    placeholder="Nome da bairro"
                                    className="rounded-md border bg-gray-100 py-2 pl-2"
                                  />
                                </div>
                                <div className="flex w-full flex-col gap-2">
                                  <Label>Complemento (opcional)</Label>
                                  <Input
                                    placeholder="Nome da ruan"
                                    className="rounded-md border bg-gray-100 py-2 pl-2"
                                  />
                                </div>
                                <div className="flex w-full flex-col gap-2">
                                  <Label>Ponto de referência (opcional)</Label>
                                  <Input
                                    placeholder="Nome da ruan"
                                    className="rounded-md border bg-gray-100 py-2 pl-2"
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                          <Separator />
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="rounded-md bg-green-600 px-7 py-2 font-normal text-white hover:bg-green-900">
                              Conferir pedido
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle className="mb-4 text-left ">
                                Dados do seu pedido
                              </DialogTitle>
                              <Card className="my-2 flex max-h-[300px] flex-col overflow-y-scroll border-2 border-dotted border-green-600 p-2 py-2">
                                <p className="flex gap-2">
                                  <strong>Cliente:</strong> Aline
                                </p>
                                <p className="flex gap-2">
                                  <strong>Tipo de serviço:</strong> Aline
                                </p>
                                <br />
                                <strong className="flex items-start">
                                  Resumo do pedido:
                                </strong>
                                <div className=" py-2">
                                  <p className="flex gap-2">
                                    <span className="flex">
                                      (
                                      <p className="flex px-2 text-red-600">
                                        {" "}
                                        1{" "}
                                      </p>
                                      ) -
                                    </span>
                                    <span>hamburguer</span>
                                  </p>
                                  <Separator className="my-2" />

                                  <div className="flex items-center justify-between">
                                    <p>Subtotal</p>
                                    <strong>R$ 25,00</strong>
                                  </div>
                                </div>
                              </Card>
                              <h1 className="py-4 text-2xl font-semibold text-gray-600">
                                Quase pronto...
                              </h1>
                              <Card className="flex w-full flex-col items-center justify-center rounded-md border border-yellow-600 p-2">
                                <p className="mt-1 font-semibold text-gray-600">
                                  AÇÂO NECESSÁRIA: 👇
                                </p>
                                <p className="mb-5 py-2 text-[18px] text-gray-500">
                                  Enviar confirmação pelo Whatsapp
                                </p>
                               
                                <Button className="w-full p-5 gap-3 flex bg-green-600 hover:bg-green-900">
                                  <IoLogoWhatsapp size={26} /> Enviar
                                </Button>
                              </Card>
                            </DialogHeader>
                          </DialogContent>
                        </Dialog>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </Card>
    </div>
  );
};

export default Footer;
