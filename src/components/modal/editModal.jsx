import React, { useState } from "react";
import Modal from ".";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { toast } from "react-toastify";
import uploadToStorage from "../../firebase/uploadStorage";

const EditModal = ({ isOpen, close, tweet }) => {
  const [isPicDelete, setIsPicDelete] = useState(false);

  //dökümanı güncelle
  const handleSubmit = async (e) => {
    e.preventDefault();

    //inputtaki verilere eriş

    const text = e.target[0].value;
    const file = e.target[1]?.files?.[0];

    //güncellenecek doc un referansını al
    const tweetRef = doc(db, "tweets", tweet.id);

    //eğer kullanıcı resmi silmek istiyorsa

    //güncellenecek değerleri belirle nesne olarak
    let updatedData = { textContent: text, isEdited: true };

    if (isPicDelete) {
      //eğer kullanıcı resmi silmek istiyorsa
      updatedData.imageContent = null;
      setIsPicDelete(false);
    }
    if (file) {
      //yeni resim seçildiyse
      const imageUrl = await uploadToStorage(file);
      updatedData.imageContent = imageUrl;
    }
    close();

    //sadece yazıyı güncelle
    updateDoc(tweetRef, updatedData)
      .then(() => {
        toast.success("Tweet içeriği güncellendi");
      })
      .catch((error) => {
        toast.error("Güncelleme hatası:" + error.code);
      });
    close();
  };

  return (
    <Modal isOpen={isOpen} close={close}>
      <h1>Tweet'i düzenle</h1>
      <form onSubmit={handleSubmit} className="flex flex-col mt-10">
        <label>İçeriği değiştir</label>
        <input defaultValue={tweet.textContent} type="text" className="mt-3 " />
        <label className="mt-10 mb-2">Fotoğraf Ekle/Değiştir</label>
        <input type="file" />
        {/* Resim mevcutsa ve silme işlemi seçilmemişse */}
        {!isPicDelete && tweet.imageContent ? (
          <button
            onClick={() => setIsPicDelete(true)}
            className="bg-amber-500 cursor-pointer hover:bg-amber-600 transition mt-6 p-2 rounded"
          >
            Resmi Kaldır
          </button>
        ) : (
          ""
        )}

        <div className="flex justify-end gap-5 mt-10">
          <button
            onClick={close}
            className="bg-gray-500 hover:bg-gray-600 transition rounded p-1 cursor-pointer"
          >
            Vazgeç
          </button>
          <button
            onClick={() => handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 transition p-1 rounded cursor-pointer"
          >
            Kaydet
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditModal;
