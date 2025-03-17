import { sendPasswordResetEmail } from "firebase/auth";
import Modal from ".";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const MailModal = ({ isOpen, close }) => {
  // Form gönderilince kullanıcının eposta adresine şifre sıfırlama bağlantısı gönder
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Epostanıza şifre sıfırlama maili gönderildi.");
      })
      .catch((err) => {
        toast.warning("Hata: " + err.code);
      });
  };

  return (
    <Modal isOpen={isOpen} close={close}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <h1 className="text-3xl">Şifreni mi unuttun?</h1>
        <p className="text-gray-400">
          Şifrenizi sıfırlamak için e-posta bağlantısı göndereceğiz
        </p>
        <input
          type="email"
          className="mt-5 p-2 border rounded"
          placeholder="Email"
          required
        />
        <button
          type="submit"
          className="bg-white text-black rounded-full cursor-pointer hover:bg-gray-200 transition mt-4 p-2"
        >
          Şifremi sıfırlamak için link gönder
        </button>
        <button
          type="button"
          onClick={close}
          className="bg-zinc-400 text-white rounded-full cursor-pointer hover:bg-gray-200 hover:text-black transition p-2"
        >
          İptal
        </button>
      </form>
    </Modal>
  );
};

export default MailModal;
