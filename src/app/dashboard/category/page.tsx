"use client";
import { db } from "@/api/firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";
import Header from "@/app/components/header";
import { CiMenuKebab } from "react-icons/ci";
import {
  Link,
  LoaderCircle,
  ArrowUpDown,
  ChevronDown,
  MoreHorizontal,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@radix-ui/react-separator";
import { GiHamburgerMenu } from "react-icons/gi";
import CategoryList from "./components/categorylist";
import {} from "zustand";

const Category = () => {
  const [category, setCategory] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [hasCategory, setHasCategory] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchCategory = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "category"));
      const categoriesData = querySnapshot.docs.map((doc) => doc.data().name);
      setHasCategory(!querySnapshot.empty);
      setCategories(categoriesData);

      console.log(categoriesData, "Category")
      console.log(categoriesData);
    } catch (error) {
      console.error("Erro ao buscar informações sobre a categorias.", error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const handleAddCategory = async () => {
    try {
      const docRef = await addDoc(collection(db, "category"), {
        name: category,
      });
      console.log("documento id:", docRef.id);

      setCategory("");
      toast.success("Categoria criada com Sucesso!");
      // window.location.reload();
      fetchCategory();
    } catch (error) {
      console.error("Erero ao adicionar produto:", error);
    }
  };

  const handleEditCategory = async (categoryName: string, newName: string) => {
    try {
      setLoading(true);

      // Verifica se o nome da categoria a ser editada existe na lista de categorias
      const categoryIndex = categories.findIndex((cat) => cat === categoryName);
      if (categoryIndex === -1) {
        console.error(`Categoria "${categoryName}" não encontrada.`);
        return;
      }

      const querySnapshot = await getDocs(collection(db, "category"));
      const categoryDoc = querySnapshot.docs.find(
        (doc) => doc.data().name === categoryName,
      );
      if (!categoryDoc) {
        console.error(
          `Documento da categoria "${categoryName}" não encontrado.`,
        );
        return;
      }
      const categoryId = categoryDoc.id;
      const categoryRef = doc(db, "category", categoryId);
      await updateDoc(categoryRef, { name: newName });

      toast.success("Categoria Editada com sucesso!");
      fetchCategory();
    } catch (error) {
      console.error("Erro ao editar categoria:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCategory = async (categoryName: string) => {
    try {
      setLoading(true);
      const categoryIndex = categories.findIndex(
        (category) => category === categoryName,
      );
      if (categoryIndex === -1) {
        console.error(`Categorias  ${categoryName} não encontrada`);
        return;
      }

      const querySnapshot = await getDocs(collection(db, "category"));
      const categoryDoc = querySnapshot.docs.find(
        (doc) => doc.data().name === categoryName,
      );
      if (!categoryDoc) {
        console.error(`Documento da categoria ${categoryName} não encontrado.`);
        return;
      }
      const categoryId = categoryDoc.id;
      const categoryRef = doc(db, "category", categoryId);
      await deleteDoc(categoryRef);

      toast.success("Categoria detetade com sucesso!");
      fetchCategory();
    } catch (error) {
      console.error("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="flex w-full flex-col items-center justify-center rounded-none border-none">
        <Card className="mt-10 flex w-full max-w-6xl items-center justify-between gap-10 border-none px-2">
          <h1 className="flex items-center justify-center text-center text-base md:text-lg font-bold">
            Criar Categoria
          </h1>
          <AlertDialog>
            <AlertDialogTrigger>
              <Button className="flex gap-2 border border-red-500 bg-transparent text-sm text-red-700 hover:bg-red-500 hover:text-white">
                <FaPlus className={loading ? "animate-spin" : "animate-none"} />
                Adicionar Categoria
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  {hasCategory
                    ? "Criar uma Categoria"
                    : "Adicionar Nova Categoria"}
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Preencha os todos os campos.
                </AlertDialogDescription>
                <Input
                  className="text-black border-black"
                  placeholder="Adicionar Categoria"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="bg-red-600 text-white border-none hover:bg-red-400 hover:text-white">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleAddCategory}
                  className="bg-green-600 text-white hover:bg-green-400"
                >
                  Adicionar
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Card>
        <div className="mt-10 flex w-full max-w-6xl items-center justify-between gap-10 p-2 text-center">
          <CategoryList
            categories={categories}
            handleAddCategory={handleAddCategory}
            handleEditCategory={handleEditCategory}
            handleDeleteCategory={handleDeleteCategory}
            editCategory={editCategory}
            setEditCategory={setEditCategory}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
