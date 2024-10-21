import React, { useEffect, useRef, useState } from "react";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSIdebar";

const Gemini = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideclick = (e) => {
      if (isOpen && modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideclick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideclick);
    };
  }, [isOpen]);
  return (
    <div className="App">
      <LeftSidebar />
      <RightSidebar />
    </div>
  );
};

export default Gemini;
