import React, { useEffect } from "react";
import useStorage from "../../hooks/useStorage";
// import { motion } from "framer-motion";

const ProgessBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  console.log(progress, url);
  useEffect(() => {
    if (url) {
      setFile();
    }
  }, [url, setFile]);
  return (
    <div
      className="progress-bar"
      style={{ width: progress + "%" }}
      // initial={{ width: 0 }}
      // animate={{ width: progress + "%" }}
    ></div>
  );
};

export default ProgessBar;
