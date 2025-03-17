import React from "react";
import Nav from "./nav";
import Main from "./main";
import Aside from "./Aside";

const Feed = () => {
  return (
    <div className="h-screen feed bg-black text-white overflow-hidden">
      <Nav />
      <Main />
      <Aside />
    </div>
  );
};

export default Feed;
