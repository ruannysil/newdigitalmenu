"use client";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { ChangeEvent, useEffect, useState } from "react";
import { db } from "../../api/firebaseConfig";
// import toast from "react-hot-toast";
import { ImageUp, LoaderCircle, Search } from "lucide-react";
// import Header from "../components/header";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import Image from "next/image";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import Header from "../components/header";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ProductData {
  id: string;
  nameProduct: string;
  description: string;
  price: number;
  image: string;
  categories: string[]; // Supondo que categories seja um array de strings
}

const Dashboard = () => {
  const [categories, setCategories] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<ProductData[]>([]);
  const [categorySelected, setCategorySelected] = useState("");
  const [image, setImage] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [nameProduct, setNameProduct] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [existingData, setExistingData] = useState(false);

  async function handleSearchProduct() {
    setLoading(true);
    setProducts([]);
    setCategorySelected("");

    if (categorySelected !== "") {
      const productsCollection = collection(db, "products");
      const q = query(
        productsCollection,
        where("categories", "==", categories[categorySelected].id),
      );
      const productsSnapshot = await getDocs(q);

      const data: any = productsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(data);
    } else {
      //   toast.error("Selecione uma categoria antes de pesquisar");
    }

    setLoading(false);
    console.log(categorySelected);
  }

  async function fetchCategories() {
    const categoriesCollection = collection(db, "category");
    const categoriesSnapshot = await getDocs(categoriesCollection);

    const data = categoriesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log(data, "Log Dashboard")

    setCategories(data as any);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  function handleCategory(e: ChangeEvent<any>) {
    setCategorySelected(e.target.value);
  }

  function handleEdit(product: any) {
    console.log("ID da categoria selecionada:", product);
    setSelectedProduct(product.id);
    setNameProduct(product.nameProduct);
    setDescription(product.description);
    setPrice(product.price);
    setImage(product.image);
  }

  function handleFileImage(e: any) {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    const image = e.target.files[0];
    if (!image) {
      return;
    }

    if (
      image.type === "image/jpeg" ||
      image.type === "image/png" ||
      image.type === "image/gif"
    ) {
      setImage(URL.createObjectURL(image));
    }
  }

  async function checkExistingData() {
    try {
      const q = query(collection(db, "products"));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          setNameProduct(data.nameProduct || "");
          setDescription(data.description || "");
          setImage(data.image || "");
          setPrice(data.price || "");
        });
        setExistingData(true);
      } else {
        setExistingData(false);
      }
    } catch (error) {
      console.error("Erro ao verificar dados existentes:", error);
      //   toast.error("Erro ao verificar dados existentes");
    }
  }

  async function handleDelete(productId: string) {
    try {
      const docRef = doc(db, "products", productId);
      await deleteDoc(docRef);
      //   toast.success("Produto excluído com sucesso!");

      // Atualize a lista de produtos após a exclusão
      const updatedProducts = products.filter(
        (product) => product.id !== productId,
      );
      setProducts(updatedProducts);
    } catch (error) {
      console.error("Erro ao excluir produto:", error);
      //   toast.error("Erro ao excluir produto");
    }
  }

  async function handleForm(e: any) {
    e.preventDefault();
    setLoading(true);

    const imageUrlInput = e.target.querySelector('[name="imageUrl"]');
    const images = imageUrlInput?.files?.[0];

    try {
      let imageUrl = image; // Mantemos a imagem existente por padrão
      console.log(categorySelected);

      // Verificamos se uma nova imagem foi selecionada
      if (images) {
        const storage = getStorage();
        const storageRef = ref(storage, `/images/${images.name}`);
        const snapshot = await uploadBytes(storageRef, images);
        imageUrl = await getDownloadURL(snapshot.ref);
      }

      const dataToUpdate = {
        nameProduct: nameProduct,
        image: imageUrl,
        description: description,
        price: price,
      };

      if (existingData) {
        const docRef = doc(db, "products", selectedProduct);
        await updateDoc(docRef, dataToUpdate);
      } else {
        // Utilizamos o método merge: true para mesclar os dados atualizados com os dados existentes
        await setDoc(doc(db, "products", nameProduct), dataToUpdate, {
          merge: true,
        });
      }

      //   toast.success("Dados atualizados com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar dados:", error);
      //   toast.error("Erro ao atualizar dados");
    }

    setLoading(false);
  }

  useEffect(() => {
    checkExistingData();
  }, []);

  return (
    
    <div>
      <Header />
      <div className="flex w-full  items-center justify-center rounded-none border-none">
        <div className="mt-10 flex w-full max-w-6xl flex-col items-start justify-between gap-10 px-2">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex gap-4 md:flex-row flex-col">
            <Card className="flex h-[157px] w-[374px] flex-col items-center">
              <div className="flex w-full  items-center justify-center bg-[#F8F8F8] border-b-2 py-3">
                Pedidos do Dia
              </div>
              <div className="flex flex-col items-center justify-center py-7 ">
                <strong>10</strong>
                <span>R$ 300,00</span>
              </div>
            </Card>
            <Card className="flex h-[157px]  w-[374px] flex-col items-center">
              <div className="flex w-full  items-center justify-center bg-[#F8F8F8] border-b-2 py-3">
                Clientes Novos
              </div>
              <div className="flex flex-col items-center justify-center py-7 ">
                <strong>5</strong>
                <span>(mês atual)</span>
              </div>
            </Card>
          </div>
          <Card className="flex w-full flex-col gap-4">
            <h1 className="p-4 text-2xl font-bold">Últimos Pedidos</h1>
            <ScrollArea>
              <Table>
                <TableCaption>Lista de pedidos.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Pedido</TableHead>
                    <TableHead className="w-[200px]">Cliente</TableHead>
                    <TableHead className="w-[200px]">Status</TableHead>
                    <TableHead className="w-[200px]">Bairro</TableHead>
                    <TableHead className="w-[200px]">Valor total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="">
                    <TableCell className="font-medium">#001</TableCell>
                    <TableCell>Mauricio</TableCell>
                    <TableCell>Aguardando</TableCell>
                    <TableCell>Centro</TableCell>
                    <TableCell>R$ 58,00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">#001</TableCell>
                    <TableCell>Mauricio</TableCell>
                    <TableCell>Aguardando</TableCell>
                    <TableCell>Centro</TableCell>
                    <TableCell>R$ 58,00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ScrollArea>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
