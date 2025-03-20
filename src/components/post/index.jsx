import Buttons from "./buttons";
import Content from "./content";
import DropDown from "./dropDown";
import UserInfo from "./userInfo";

const Post = ({ tweet }) => {
  // console.log(tweet);
  return (
    <div className="border-b border-zinc-600 p-5 flex gap-3">
      <img src={tweet.user.photo} alt="profile" className="rounded-full size-12" />

      <div className="w-full">
        <div className="flex justify-between">
          <UserInfo tweet={tweet} />
          <DropDown tweet={tweet} />
        </div>
        <Content tweet={tweet} />
        <Buttons tweet={tweet} />
      </div>
    </div>
  );
};

export default Post;
