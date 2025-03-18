import React from "react";
import Form from "../../components/form";

const Main = ({ user }) => {
  return (
    <main className="border border-zinc-600 overflow-y-auto">
      <header className="border-b border-b-zinc-600 p-4 font-bold">Anasayfa</header>

      <Form user={user} />
      <div className="border-b border-b-zinc-600 p-5">TWEETS</div>
      <div className="border-b border-b-zinc-600 p-5">TWEETS</div>
      <div className="border-b border-b-zinc-600 p-5">TWEETS</div>
      <div className="border-b border-b-zinc-600 p-5">TWEETS</div>
    </main>
  );
};

export default Main;
