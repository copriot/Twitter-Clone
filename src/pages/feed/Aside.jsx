import React from "react";

console.log("asidee render oldu");
const Aside = () => {
  return <div className="max-xl:hidden">Aside</div>;
};

//kapsayıcı bileşendeki user state'i değiştiğinde gereksiz render olmasının önüne geçti React.memo('component adı')
export default React.memo(Aside);
