import React, { useRef, useState } from "react";
import { auth, db } from "../../firebase";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { deleteDoc, doc } from "firebase/firestore";
import EditModal from "../modal/editModal";

const DropDown = ({ tweet }) => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  //tweeti gönderen kişi ile şuan oturumu açık olan kişinin id'si aynı mı  kontrolü
  const isOwn = tweet.user.id === auth.currentUser.uid;
  const handleDelete = () => {
    //silenecek doc un referansını al
    const tweetRef = doc(db, "tweets", tweet.id);
    //firebase'in doc kaldırma fonksiyonu cagır
    deleteDoc(tweetRef)
      .then(() => toast.info("Tweet akıştan kaldırıldı"))
      .catch((error) => toast.error("Bir hata oluştu" + error.code));
  };
  return (
    isOwn && (
      <>
        <label className="popup">
          <input ref={inputRef} type="checkbox" />
          <div className="burger" tabIndex="0">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className="popup-window">
            <legend>Eylemler</legend>
            <ul>
              <li>
                <button onClick={() => setIsOpen(true)}>
                  <MdEdit className="text-blue-500" />

                  <span>Düzenle</span>
                </button>
              </li>
              <hr />
              <li>
                <button onClick={handleDelete}>
                  <FaTrash className="text-red-500" />
                  <span>Sil</span>
                </button>
              </li>
            </ul>
          </nav>
        </label>
        <EditModal
          tweet={tweet}
          isOpen={isOpen}
          close={() => {
            inputRef.current.checked = false;
            setIsOpen(false);
          }}
        />
      </>
    )
  );
};

export default DropDown;
