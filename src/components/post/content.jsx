import { FaRetweet } from "react-icons/fa";

const Content = ({ tweet }) => {
  return (
    <div className="my-4">
      {tweet.textContent && <p>{tweet.textContent}</p>}
      {tweet?.imageContent ? (
        <img
          src={tweet?.imageContent}
          alt="tweet-img"
          className="my-2 rounded-lg w-full object-cover max-h-[400px]"
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Content;
