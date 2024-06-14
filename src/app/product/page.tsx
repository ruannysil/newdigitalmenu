"use client";

import { addDoc, collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../api/firebaseConfig";
import { LoaderCircle, ImageUp } from "lucide-react";
import Image from "next/image";
// import toast from "react-hot-toast";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import Header from "../components/header";

export default function AddClothes() {
  const [category, setCategory] = useState([]);
  const [image, setImage] = useState("");
  const [nameProduct, setNameProduct] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [selected, setSelected] = useState("");

  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    async function SearchCategory() {
      const querySnapshot = await getDocs(collection(db, "category"));
      const selectGroups = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        categoryName: doc.data().categoryName,
      }));

      setCategory(selectGroups as any);
      console.log(selectGroups, "PRODUTOS")
    }

    SearchCategory();
  }, []);

  async function handleForm(e: any) {
    e.preventDefault();
    setLoading(true);

    const imageUrlInput = e.target.querySelector('[name="imageUrl"]');
    const images = imageUrlInput ? imageUrlInput.files[0] : null;

    if (
      !image ||
      !selected ||
      nameProduct === "" ||
      description === "" ||
      price === ""
    ) {
      // toast.error("Por favor, preencha todos os campos.");
      setLoading(false);
      return;
    }

    try {
      const storage = getStorage();
      const storageRef = ref(storage, `/images/${images.name}`);
      const snapshot = await uploadBytes(storageRef, images);
      const image = await getDownloadURL(snapshot.ref);

      const data = {
        nameProduct: nameProduct,
        description: description,
        image: image,
        price: parseFloat(price),
        categories: selected,
      };

      await addDoc(collection(db, "products"), data);

      setNameProduct("");
      setDescription("");
      setPrice("");
      setSelected("");
      setImage("");
      // toast.success("Produto adicionado com sucesso!");
    } catch (error) {
      console.log("erro ao adicionar produto: ", error);
    //   toast.error("Erro ao adicionar produto");
    }
    setLoading(false);
  }

  const handleGropSelect = (e: any) => {
    setSelected(e.target.value);
  };

  return (
    <div className=" flex flex-col w-full fixed h-screen overflow-y-auto">
 
      <form
        onSubmit={handleForm}
        className="flex w-full flex-col sm:gap-2 gap-[10px] sm:mx-auto px-2 max-w-7xl flex-1 rounded-md scr"
      >
        <h1 className="px-3 py-5 pb-2 font-bold md:text-3xl text-lg">
          Adicionar produto
        </h1>

        <select
          value={selected}
          onChange={handleGropSelect}
          className="p-3 bg-bgInput border border-primary rounded-md"
        >
          <option>Escolha a categoria</option>
          {category.map((cat: any) => (
            <option key={cat.id} value={cat.id}>
              {cat.categoryName}
            </option>
          ))}
        </select>

        <label className="bg-bgInput border border-primary rounded-md h-[200px] items-center justify-center flex cursor-pointer">
          <span className="text-5xl transition-transform ease-in-out hover:opacity-[1] hover:scale-[2] absolute opacity-[0.7]">
            <ImageUp className="relative" />
          </span>
          <input
            type="file"
            name="imageUrl"
            accept="image/png image/jpg image/gif"
            onChange={handleFileImage}
            className="hidden"
          />
          {image && (
            <Image
              src={image}
              width={200}
              height={200}
              alt="image do produto"
              className="rounded-md  h-full w-full"
            />
          )}
        </label>

        <input
          placeholder="Nome do produto"
          value={nameProduct}
          onChange={(e) => setNameProduct(e.target.value)}
          className="p-3 bg-bgInput border placeholder:text-black dark:placeholder:text-white dark:text-white text-black border-primary rounded-md"
        />
        <textarea
          placeholder="Descrição do roupa"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-3 bg-bgInput border resize-none min-h-[120px] placeholder:text-black dark:placeholder:text-white dark:text-white text-black border-primary rounded-md"
        />
        <input
          placeholder="Valor do produto"
          value={price}
          type="number"
          min={1}
          onChange={(e) => setPrice(e.target.value)}
          className="p-3 bg-bgInput border placeholder:text-black dark:placeholder:text-white dark:text-white text-black border-primary rounded-md"
        />
        <button
          type="submit"
          className="p-3 hover:bg-green-700 border-none rounded-md bg-green-600 font-semibold hover:text-white text-white mb-4"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              Cadastrando...
              <LoaderCircle className="animate-spin" />
            </div>
          ) : (
            "Criar categoria"
          )}
        </button>
      </form>
    </div>
  );
}
