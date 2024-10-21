import React, { useEffect, useState } from "react";
import { FaBars, FaPlus } from "react-icons/fa";
import { CiChat1 } from "react-icons/ci";
import { RiVipDiamondFill } from "react-icons/ri";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoIosTimer, IoMdSettings } from "react-icons/io";
import style from "../styles/Leftsidebar.module.css";
import { useMessage } from "../context/MessageContext";

const constantData = [
  { Icon: <RiVipDiamondFill />, name: "Gem manager" },
  { Icon: <IoIosHelpCircleOutline />, name: "Help" },
  { Icon: <IoIosTimer />, name: "Activity" },
  { Icon: <IoMdSettings />, name: "Settings" },
];

const LeftSidebar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [renderData, setRenderData] = useState(true);
  const { setAllMessages } = useMessage();

  useEffect(() => {
    if (!isDrawerOpen) {
      setTimeout(() => {
        setRenderData(true);
      }, 300);
    }
  }, [isDrawerOpen]);
  return (
    <div
      className={
        isDrawerOpen
          ? `${style.leftSidebar} ${style.leftSiderbarwithtransition}`
          : style.leftSidebar
      }
      style={{ width: !isDrawerOpen ? "20%" : "3%" }}
    >
      <div
        className={style.bars}
        onClick={() => {
          setIsDrawerOpen((prev) => !prev);
          setRenderData(false);
        }}
      >
        <FaBars />
      </div>
      <div className={style.newChatbutton}>
        <button onClick={() => setAllMessages([])}>
          <FaPlus /> {!isDrawerOpen && "New Chat"}
        </button>
      </div>

      {renderData && (
        <div className={style.recentText}>
          <p> Recent</p>
        </div>
      )}
      {renderData && (
        <div className={style.chatDiv}>
          {[1, 2, 3, 4, 5, 6].map((data) => (
            <div key={data} className={style.chat}>
              <CiChat1 size={25} />
              <span>This is sample message</span>
            </div>
          ))}
        </div>
      )}

      <div className={style.chatConstants}>
        {constantData.map((constData) => (
          <div key={constData.name} className={style.singleConstantdata}>
            <div style={{ marginTop: "3px" }}>{constData.Icon}</div>
            <div>{renderData && constData.name}</div>
          </div>
        ))}
        {renderData && (
          <div className={style.details}>
            <p>Modasa, Gujarat, India</p>
            <div className={style.ipDetails}>
              From your IP address &#x2022; Update location
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftSidebar;
