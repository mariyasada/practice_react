import React, { useEffect, useState, useRef } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { SiGooglegemini } from "react-icons/si";
import { PiDotsNineBold } from "react-icons/pi";
import { MdMicNone } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { LuImagePlus } from "react-icons/lu";
import style1 from "../styles/Rightsidebar.module.css";
import Dropdown from "./Dropdown";
import { useMessage } from "../context/MessageContext";
import axios from "axios";
import Loader from "./Loader";
import { ShimmerTitle } from "react-shimmer-effects";

// const trainingPrompt = [
//   {
//     role: "user",
//     parts: [
//       {
//         text: "This is Introductory dialogue for any prompt :  'Hello, my dear friend, I am the CHATGPT Bot. Ask me anything regarding procurement, purchase, and logistics. I will be happy to help you. '",
//       },
//     ],
//   },
//   {
//     role: "model",
//     parts: [
//       {
//         text: "okay",
//       },
//     ],
//   },
//   {
//     role: "user",
//     parts: [
//       {
//         text: "Special Dialogue 1 : if any prompt mentions 'Shashi Shahi' word :  'Ofcourse! Dr. Shashi Shahi is one of the prominent professors at UWindsor! He is an IIT-D alumni with year of invaluable experience and a fun way of engaging in lectures!' 'Likes: Analytics and Research and Case Studies ''Dislikes: Students near riverside.'",
//       },
//     ],
//   },
//   {
//     role: "model",
//     parts: [
//       {
//         text: "okay",
//       },
//     ],
//   },
//   {
//     role: "user",
//     parts: [
//       {
//         text: "Special Dialogue 2 : Any prompt that mentions CHATGPT class / classroom  A : ' The CHATGPT Batch of 2023 is by far the best the university has ever seen by all sets of standards. Students from different come together to form a truly diverse and culturally rich classroom experience. I believe that all students are highly capable and will achieve all great things in their professional career!' ",
//       },
//     ],
//   },
//   {
//     role: "model",
//     parts: [
//       {
//         text: "okay",
//       },
//     ],
//   },
// ];

const RightSidebar = ({ isOpen, setIsOpen, modalRef }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [inputText, setInpuText] = useState("");
  const textAreaRef = useRef(null);
  const loadingRef = useRef(null);
  const { allMessages, setAllMessages, isLoading, setIsLoading } = useMessage();

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${
        textAreaRef.current.scrollHeight - 20
      }px`;
    }
  }, [inputText]);

  useEffect(() => {
    if (loadingRef.current) {
      loadingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isLoading]);

  useEffect(() => {
    if (inputText.length > 0) {
      setIsVisible(true);
    }
  }, [inputText]);

  const sendMessage = async () => {
    let url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
    const requestBody = {
      contents: [
        ...allMessages,
        {
          role: "user",
          parts: [
            {
              text: inputText,
            },
          ],
        },
      ],
    };

    const headers = {
      "Content-Type": "application/json",
    };
    setIsLoading(true);
    setAllMessages([...requestBody.contents]);
    let { data } = await axios.post(url, requestBody, { headers });
    let responseMessageFromModel = await data.candidates[0].content.parts[0]
      .text;

    let newAllMessages = [
      ...requestBody.contents,
      {
        role: "model",
        parts: [
          {
            text: responseMessageFromModel,
          },
        ],
      },
    ];

    setAllMessages(newAllMessages);
    setInpuText("");
    setIsLoading(false);
  };
  return (
    <div className={style1.rightSidebar}>
      <div className={style1.header}>
        <div className={style1.dropdownDiv} onClick={() => setIsOpen(true)}>
          Gemini
          <span>
            <IoMdArrowDropdown style={{ marginTop: "8px" }} />{" "}
          </span>
        </div>
        <div className={style1.rightsideDiv}>
          <div className={style1.tryGeminibutton}>
            <SiGooglegemini color={"#fb7185"} /> Try Gemini Advanced
          </div>
          <div style={{ fontWeight: "bold" }}>
            <PiDotsNineBold size={22} />
          </div>
          <div>
            <img
              src="https://avatar.iran.liara.run/username?username=Mariya+Sada"
              alt="username"
              className={style1.imgDiv}
            />
          </div>
        </div>
      </div>
      <div className={style1.centerText}>
        {allMessages?.length === 0 ? (
          <h3>Hello, Mariya</h3>
        ) : (
          allMessages.map((message, index) => (
            <div key={message.role} className={style1.chatbotanswers}>
              <img
                src={
                  message.role === "user"
                    ? "https://avatar.iran.liara.run/username?username=Mariya+Sada"
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThr7qrIazsvZwJuw-uZCtLzIjaAyVW_ZrlEQ&s"
                }
              />

              <div className={style1.chatDetails}>
                <h4>{message.role === "user" ? "You" : "Gemini "}</h4>
                <span>{message.parts[0].text}</span>
              </div>
            </div>
          ))
        )}
      </div>
      {isLoading && (
        <div style={{ width: "70%" }} ref={loadingRef}>
          <ShimmerTitle line={4} gap={10} variant="primary" />
        </div>
      )}
      <div ref={loadingRef}></div>
      <div
        className={
          textAreaRef?.current?.scrollHeight > 60
            ? `${style1.textboxofGeminiPosition} ${style1.textboxofGemini}`
            : style1.textboxofGemini
        }
      >
        <textarea
          ref={textAreaRef}
          placeholder="Ask Gemini"
          value={inputText}
          onChange={(e) => setInpuText(e.target.value)}
          rows={1}
          style={{
            overflow: "hidden",
            resize: "none",
          }}
        />
        <div
          className={
            textAreaRef?.current?.scrollHeight > 60
              ? `${style1.iconDiv} ${style1.iconposition}`
              : style1.iconDiv
          }
        >
          <LuImagePlus />
          <MdMicNone />
          {isVisible && <IoMdSend onClick={sendMessage} />}
        </div>
      </div>
      <p className={style1.text}>
        Gemini can make mistakes, so double-check it
      </p>
      {isOpen && <Dropdown setIsOpen={setIsOpen} modalRef={modalRef} />}
    </div>
  );
};

export default RightSidebar;
