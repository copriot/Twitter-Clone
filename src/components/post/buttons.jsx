import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { FaRetweet, FaHeart, FaRegHeart, FaShareAlt, FaComment } from "react-icons/fa";
import { auth, db } from "../../firebase";

const Buttons = ({ tweet }) => {
  //oturumu acık olan kullanıcı bu tweeti likeladı mı
  const isLiked = tweet.likes.includes(auth.currentUser.uid);

  //kullanıcı likeladıysa user id'sini likes dizisinden kaldır

  //kullanıcı likelamadıysa user idsini likes dizisine ekle

  //like butonuna tıklanınca
  const toogleLike = async () => {
    //güncellenicek doc un referansını al

    const tweetRef = doc(db, "tweets", tweet.id);

    //user id'sini likes dizisine ekle

    await updateDoc(tweetRef, {
      likes: isLiked
        ? arrayRemove(auth.currentUser.uid)
        : arrayUnion(auth.currentUser.uid),
    });
  };
  return (
    <div className="flex justify-between items-center">
      <div className="p-3 cursor-pointer transition hover:bg-blue-400/40 rounded-full">
        <FaComment />
      </div>
      <div className="p-3 cursor-pointer transition hover:bg-green-300/30 rounded-full">
        <FaRetweet />
      </div>
      <div
        onClick={toogleLike}
        className="flex items-center gap-2 p-3 cursor-pointer transition hover:bg-red-400/30 rounded-full"
      >
        {isLiked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
        {tweet.likes.length}
      </div>
      <div className="p-3 cursor-pointer transition hover:bg-gray-400/30 rounded-full">
        <FaShareAlt />
      </div>
    </div>
  );
};

export default Buttons;
