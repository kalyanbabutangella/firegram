import { useState, useEffect } from "react";
import {
  timestamp,
  projectStorage,
  projectFirestore
} from "../firebase/config";

const useStorage = (file) => {
  const [progess, setProgress] = useState("");
  const [error, setError] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("images");
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
        console.log(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({ url, createdAt });
        setUrl(url);
      }
    );
  }, [file]);

  return { progess, url, error };
};

export default useStorage;
