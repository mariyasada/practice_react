import React from "react";
import style from "../styles/Loader.module.css";

const Loader = () => {
  return (
    <>
      {[1, 2, 3, 4].map((item) => (
        <div className={style.skeletonLoader}></div>
      ))}
    </>
  );
};

export default Loader;
