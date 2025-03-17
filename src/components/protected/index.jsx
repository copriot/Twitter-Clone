import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Protected = () => {
  //kullanıcının sayfayı görmeye yetkisi varmı stateti
  const [isAuth, setIsAuth] = useState();

  //kullanıcının oturum verilerini al
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsAuth(user ? true : false);
    });
  });

  //eğer kullanıcının oturumu kapalıysa logine yönlendir

  if (isAuth === false) {
    return <Navigate to={"/"} />;
  }

  //parent route içerisinde alt route elementini renderla
  return <Outlet />;
};

export default Protected;
