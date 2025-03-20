import moment from "moment";
import React from "react";
import { MdEdit } from "react-icons/md";

const UserInfo = ({ tweet }) => {
  //kullanıcı isminden yola cıakrak nickname olustur
  const nickname = tweet.user.name.toLowerCase().replaceAll(" ", "_");

  //tarih verisine eriş
  let date = tweet.createdAt?.toDate();
  //andan tarihe uzaklığı hesaplıyor moment içindeki fromNow()
  date = moment(date).fromNow();
  return (
    <div className="flex gap-3 items-center whitespace-nowrap text-gray-400">
      <p className="text-white">{tweet.user.name}</p>
      <p className=" text-sm">@{nickname}</p>
      <p className=" text-sm">{date}</p>
      {tweet.isEdited && (
        <p className="text-xs">
          <MdEdit className="md:hidden text-base" />
          <span className="max-md:hidden">*düzenlendi</span>
        </p>
      )}
    </div>
  );
};

export default UserInfo;

//replace methodu ilk yakaladığı elemanı değiştiriyor
const x = "Mustafa Kemal Atatürk".replaceAll(" ", "_");
//console.log(x);

const y = "Mustafa Kemal Atatürk".split(" ").join("_");
//console.log(y);
