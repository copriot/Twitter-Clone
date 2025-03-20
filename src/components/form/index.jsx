import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { BsCardImage } from "react-icons/bs";
import { toast } from "react-toastify";
import { db } from "../../firebase";
import uploadToStorage from "../../firebase/uploadStorage";
import Loader from "../loader";

const Form = ({ user }) => {
  const [isLoading, setIsLoading] = useState();
  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();

    //1) inputlardaki verilere eriş
    const text = e.target[0].value.trim();
    const file = e.target[1].files[0];
    //2)yazı ve resim içeriği yoksa fonk. durdur
    if (!text && !file) return toast.warning("Lütfen içerik giriniz");
    setIsLoading(true);
    //3) resmi storage'a kaydet
    const url = await uploadToStorage(file);
    //4)kolleksiyonun referansını al
    const tweetsCol = collection(db, "tweets");
    //5)kolleksiyona yeni tweet belgesi ekle
    await addDoc(tweetsCol, {
      textContent: text,
      imageContent: url,
      isEddited: false,
      likes: [],
      user: {
        id: user.uid,
        name: user.displayName,
        photo: user.photoURL,
      },
      createdAt: serverTimestamp(),
    });
    setIsLoading(false);
    //6 formu sıfırla
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit} className="border-b border-zinc-600 p-5 flex gap-3">
      {!user ? (
        <div className="size-12 bg-gray-400 rounded-full animate-ping"></div>
      ) : (
        <img
          src={user?.photoURL}
          className="h-[25px] md:h-[45px] rounded-full"
          alt="profile pic"
        />
      )}

      <div className="w-full">
        <input
          placeholder="Neler Oluyor ?"
          type="text"
          className="mt-0 w-full bg-transparent text-gray-300 shadow-none  mb-2 md:text-lg"
        />
        <div className="flex justify-between items-center">
          <label
            htmlFor="file-upload"
            className="cursor-pointer text-white px-4 py-2 rounded-md border transition hover:bg-zinc-700"
          >
            <BsCardImage />
          </label>
          <input id="file-upload" type="file" className="hidden" />
          <button
            disabled={isLoading}
            className="bg-blue-600 py-2 rounded-full min-w-[85px] min-h-[40px] transition hover:bg-blue-800 cursor-pointer"
          >
            {isLoading ? <Loader /> : "Tweetle"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
