import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";
import Search from "@/../public/search.png";

const CategoryList = ({
  categories,
  handleDeleteCategory,
  handleEditCategory,
}: any) => {
  const [editCategory, setEditCategory] = useState("");
  const [filter, setFilter] = useState("");

  const handleDelete = (id: string) => {
    handleDeleteCategory(id);
  };

  const handleEdit = (category: string) => {
    handleEditCategory(category, editCategory);
    setEditCategory("");
  };

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter categories..."
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          className="max-w-sm border-black"
        />
      </div>
      <div className="rounded-md border">
        <Table className="w-full flex flex-col">
          <TableHeader className="bg-secondary-foreground text-white">
            <TableRow className="flex items-center justify-between">
              <TableCell>Categorias</TableCell>
              <TableCell>Funções</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody className="h-96">
            {categories.length ? (
              categories
                .filter((category: string) =>
                  category.toLowerCase().includes(filter.toLowerCase())
                )
                .map((category: string, index: number) => (
                  <TableRow key={index} className="items-center justify-center flex w-full">
                    <TableCell className="flex  items-center justify-between w-full">{category}

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="secondary" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <AlertDialog>
                            <AlertDialogTrigger className="text-sm ml-2 mt-3">
                              Edit
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  Editar Categorias: {category}
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  <Input
                                    value={editCategory}
                                    className="text-black border-black"
                                    onChange={(e) =>
                                      setEditCategory(e.target.value)
                                    }
                                  />
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel className="bg-red-600 hover:bg-red-900 text-white hover:text-white border-none">Cancel</AlertDialogCancel>
                                <AlertDialogAction className="hover:bg-green-800 bg-green-500"
                                  onClick={() => handleEdit(category)}
                                >
                                  Salvar
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                          <DropdownMenuItem 
                            onClick={() => handleDelete(category)}
                          >
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                    
                  </TableRow>
                ))
            ) : (
              <TableRow className="flex items-center">
                <TableCell colSpan={2} className=" text-center flex flex-col items-center justify-between w-full">
                  <Image src={Search} width={150} height={150} alt="Image Não encontrou categoria"/>
                  Nenhuma categoria encontrada.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CategoryList;
