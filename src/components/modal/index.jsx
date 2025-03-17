import React from "react";
import { IoMdClose } from "react-icons/io";

//High Order Component olarak projedeki modalların ortak noktalarını belirledik
const Modal = ({ children, isOpen, close }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 bg-zinc-700/75 grid place-items-center z-[9999]">
        <div className="bg-black py-10 px-8 w-3/4 max-w-[600px]  rounded-lg">
          <div className="flex justify-end">
            <button onClick={close}>
              <IoMdClose className="text-3xl transition hover:text-gray-500 cursor-pointer" />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
