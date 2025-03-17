import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import MailModal from "../../components/modal/mailModal";

const Form = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password);

    //yeni kullanıcı hesabı oluştur
    if (!isSignUp) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          toast.success("Hesabınız oluşturuldu");
          navigate("/feed");
        })
        .catch((err) => toast.error("Hata!:" + err.code));

      //kullanıcı hesabına giriş yap
    } else {
      signInWithEmailAndPassword(auth, email, password).then(() => {
        toast.success("Hesaba giriş yapıldı");
        navigate("/feed");
      });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label>Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <label className="mt-5">Şifre</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <p
          onClick={() => setIsOpen(true)}
          className="text-end text-sm mt-1 text-gray-400 hover:text-gray-300 cursor-pointer transition"
        >
          Şifreni mi unuttun ?
        </p>
        <button className="mt-10 bg-white text-black rounded-full p-1 font-bold transition hover:bg-gray-300 cursor-pointer">
          {isSignUp ? "Giriş Yap" : "Kayıt Ol"}
        </button>
      </form>
      <p className="mt-5">
        <span className="text-gray-500">
          {!isSignUp ? "Hesabınız varsa" : "Hesabınız yoksa"}
        </span>
        <span
          onClick={() => setIsSignUp(!isSignUp)}
          className="text-blue-400 cursor-pointer ms-2"
        >
          {!isSignUp ? "Giriş Yap" : "Kayıt Ol"}
        </span>
      </p>

      <MailModal isOpen={isOpen} close={() => setIsOpen(false)} />
    </>
  );
};

export default Form;
