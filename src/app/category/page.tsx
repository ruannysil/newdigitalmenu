"use client";
import { ImageUp, LoaderCircle } from "lucide-react";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../api/firebaseConfig";
// import toast from "react-hot-toast";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import Image from "next/image";
import { error } from "console";
// import Header from "../components/header";

const Category = () => {
  const [categoryName, setCategoryName] = useState("");
  const [image, setImage] = useState("");
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

  async function handleForm(e: any) {
    e.preventDefault();
    setLoading(true);

    const imageUrlInput = e.target.querySelector('[name="imageUrl"]');
    const images = imageUrlInput ? imageUrlInput.files[0] : null;

    if (!image || categoryName === "") {
    //   toast.error("Por favor, preencha todos os campos.");
      setLoading(false);
      return;
    }

    try {
      const storage = getStorage();
      const storageRef = ref(storage, `/images/${images.name}`);
      const snapshot = await uploadBytes(storageRef, images);
      const image = await getDownloadURL(snapshot.ref);

      const data = {
        categoryName: categoryName,
        image: image,
      };

      await addDoc(collection(db, "category"), data);

      setCategoryName("");
      setImage("");
    //   toast.success("Produto adicionado com sucesso!");
    } catch (error) {
      console.log("erro ao adicionar produto: ", error);
    //   toast.error("Erro ao adicionar produto");
    }
    setLoading(false);
  }

  return (
    <div className="flex flex-col w-full fixed h-screen overflow-y-auto">
      <form
        onSubmit={handleForm}
        className="flex w-full flex-col gap-3 sm:mt-24 mt-3  sm:mx-auto px-2 max-w-7xl"
      >
        <h1 className="px-3 md:py-5 md:pb-2 font-bold md:text-3xl text-lg">
          Adicionar Categorias
        </h1>
        <label className="bg-bgInput border border-primary rounded-md h-[280px] items-center justify-center flex cursor-pointer">
          <span className="text-5xl transition-transform ease-in-out hover:opacity-[1] hover:scale-[2] absolute opacity-[0.7]">
            <ImageUp />
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
              className="rounded-md h-full w-full cover"
            />
          )}
        </label>
        <input
          placeholder="Categoria"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          className="p-3 bg-bgInput border border-primary  rounded-md placeholder:text-black dark:placeholder:text-white dark:text-white text-black"
        />
        <button
          type="submit"
          className="p-3 hover:bg-green-700 border-none rounded-md bg-green-600 font-semibold hover:text-white text-white"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              Criando...
              <LoaderCircle className="animate-spin" />
            </div>
          ) : (
            "Criar categoria"
          )}
        </button>
      </form>
    </div>
  );
};

export default Category;
