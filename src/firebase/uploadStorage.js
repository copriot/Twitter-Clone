//dosyayı alıp storage yükleyip ardından storagedaki url i return eder

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from ".";
import { v4 } from "uuid";

const uploadToStorage = async (file) => {
  console.log(file);
  //1) dosya resim degilse dosya yoksa fonk durdur
  if (!file.type.startsWith("image/") || !file) return null;

  //2) dosyanın yüklenecegi konumun referansını al
  const imageRef = ref(storage, v4() + file.name);
  //3) referansını olusturdugun konuma dosya yükle
  await uploadBytes(imageRef, file);
  //yüklenen dosyan urlini al ve return et
  const url = await getDownloadURL(imageRef);
  return url;
};

export default uploadToStorage;
