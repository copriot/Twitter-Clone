import { useEffect, useState } from "react";
import Nav from "./nav";
import Main from "./main";
import Aside from "./Aside";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/index.js";
const Feed = () => {
  const [user, setUser] = useState();
  //oturumu açık olan kullanıcının verisini al
  useEffect(() => {
    //kullanıcı hesap bilgilerini al ve state'e aktar
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    //componentWillUnmount tetiklendiğinde yani bileşen ekrandan ayrıldığında kullanıcı oturu izlemeyi durdur
    return () => {
      unsub();
    };
  }, []);

  return (
    <div className="h-screen feed bg-black text-white overflow-hidden">
      <Nav user={user} />
      <Main user={user} />
      <Aside />
    </div>
  );
};

export default Feed;
