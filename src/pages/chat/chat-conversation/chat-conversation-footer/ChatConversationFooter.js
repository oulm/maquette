import { useEffect, useRef, useState } from "react";
import "./ChatConversationFooterStyle.css";
const ChatConversationFooter = ({ handleMessage }) => {
  // TODO: USE IT TO HANDLE THE MESSAGE BEFORE SEND IT TO DATBASE
  const [textMessage, setTextMessage] = useState("");
  const textareaRef = useRef(null);

  // useEffect(() => {
  //   const data = {
  //     userType: "sender",
  //     username: "Oualid Oulmyr",
  //     timestamp: new Date().toISOString(),
  //     message: textMessage,
  //     image: "./images/avatars/member_1.png",
  //   };

  //   handleMessage(data);
  // }, [textMessage]);

  const handleSendMessage = (text) => {
    const trimmedText = text.trim();
    if (trimmedText === "") return;
    setTextMessage(trimmedText);
    const data = {
      userType: "sender",
      username: "Oualid Oulmyr",
      timestamp: new Date().toISOString(),
      message: textMessage,
      image: "./images/avatars/member_1.png",
    };

    handleMessage(data);
    console.log("message", textMessage);
    textareaRef.current.value = "";
  };

  return (
    <div className="chat-conversation-footer">
      <div className="chat-conversation-footer-icon"></div>
      <textarea
        ref={textareaRef}
        name="chat-conversation-footer-input"
        id=""
        className="chat-conversation-footer-input scrollbar"
        placeholder="Enter you message here"
        onChange={(e) => setTextMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleSendMessage(e.target.value);
          }
        }}
      />

      <button
        type="button"
        onClick={(e) => handleSendMessage(textareaRef.current.value)}
        className="button"
      >
        Send <i className="fa-solid fa-paper-plane"></i>
      </button>
    </div>
  );
};

export default ChatConversationFooter;
