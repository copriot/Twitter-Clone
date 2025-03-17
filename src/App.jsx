import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/index";
import Feed from "./pages/feed/index";
import Protected from "./components/protected";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Oturumu açık olmayanlar bu routelara erişememeli */}
        <Route element={<Protected />}>
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile" element={<Title>Profil Sayfası</Title>} />
          <Route path="/ayar" element={<Title>Ayar Sayfası</Title>} />
          <Route path="/bağlantı" element={<Title>Bağlantı Sayfası</Title>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const Title = ({ children }) => {
  return <h1 className="text-2xl text-center my-20 font-bold">{children}</h1>;
};
export default App;
