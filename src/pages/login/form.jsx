import React, { useState } from "react";

const Form = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password);
    if (!isSignUp) {
      alert("kaydolma...");
    } else {
      alert("giriş yapma...");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label>Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <label className="mt-5">Şifre</label>
        <input type="text" onChange={(e) => setPassword(e.target.value)} />
        <button className="mt-10 bg-white text-black rounded-full p-1 font-bold transition hover:bg-gray-300 cursor-pointer">
          {isSignUp ? "Giriş Yap" : "Kayıt Ol"}
        </button>
      </form>
      <p className="mt-5">
        <span className="text-gray-500">
          {isSignUp ? "Hesabınız yoksa" : "Hesabınız varsa"}
        </span>
        <span
          onClick={() => setIsSignUp(!isSignUp)}
          className="text-blue-400 cursor-pointer ms-2"
        >
          {isSignUp ? "Kayıt Ol" : "Giriş Yap"}
        </span>
      </p>
    </>
  );
};

export default Form;
