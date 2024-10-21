import { createContext, useContext, useState } from "react";
import tableData from "../Constant.json";
const MessageContext = createContext();

const MessageProvider = ({ children }) => {
  const [allMessages, setAllMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(tableData?.rows);
  return (
    <MessageContext.Provider
      value={{
        allMessages,
        setAllMessages,
        isLoading,
        setIsLoading,
        data,
        setData,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

const useMessage = () => useContext(MessageContext);

export { useMessage, MessageProvider };
