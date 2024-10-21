import React from "react";
import { SiGooglegemini } from "react-icons/si";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import style from "../styles/Dropdown.module.css";

const dropDownData = [
  {
    name: "Gemini",
    subtitle: "with 1.5 Flash",
    color: "#60a5fa",
  },
  {
    name: "Gemini Advanced",
    subtitle: "with 1.5 Pro",
    color: "#fb7185",
  },
];

const Dropdown = ({ setIsOpen, modalRef }) => {
  return (
    <div
      className={style.dropdown}
      onClick={() => setIsOpen(false)}
      ref={modalRef}
    >
      {dropDownData?.map(({ name, subtitle, color }) => (
        <div key={name} className={style.geminiVersion}>
          <SiGooglegemini color={color} />
          <div
            className={style.versions}
            style={{ opacity: name !== "Gemini" && 0.6 }}
          >
            <span>{name}</span>
            <span className={style.subtitle}>{subtitle}</span>
          </div>
          <div className={style.buttonupgradediv}>
            {name === "Gemini" ? (
              <IoIosCheckmarkCircleOutline />
            ) : (
              <div className={style.upgrade}>Upgrade</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
