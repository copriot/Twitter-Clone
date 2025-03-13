import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const GoogleButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Oturum Açıldı");
        navigate("/feed");
      })
      .catch((err) => toast.err("HATA:" + err.code));
  };
  return (
    <button
      onClick={handleClick}
      className="bg-white flex items-center py-2 px-10 rounded-full gap-3 transition hover:bg-gray-300 text-black whitespace-nowrap cursor-pointer font-bold"
    >
      <img src="g-logo.png" alt="google-logo" className="h-[20px]" />
      Google ile giriş yap
    </button>
  );
};

export default GoogleButton;
