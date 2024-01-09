import ChatConversationBody from "./chat-conversation-body/ChatConversationBody";
import ChatConversationHeader from "./chat-conversation-Header/ChatConversationHeader";
import ChatConversationFooter from "./chat-conversation-footer/ChatConversationFooter";

import "./ChatConversationStyle.css";
import { useEffect, useState } from "react";

const ChatConversation = () => {
  const [messages, setMessages] = useState({});

  useEffect(() => {
    setMessages(
      JSON.parse(`{
      "chatMessages": [
        {
          "userType": "sender",
          "username": "Samantha Clara",
          "timestamp": "2024-01-07T10:30:00.000Z",
          "message": "Lorem ipsum, dolor sit amet consectetur adipisicing",
          "image": "./images/avatars/member_2.png"
        },
        {
          "userType": "receiver",
          "username": "Samantha Clara",
          "timestamp": "2024-01-07T10:30:00.000Z",
          "message": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima placeat fugit nostrum sit esse, recusandae accusamus, molestias id cumque animi tempore voluptatibus saepe error ab dolorum eligendi harum quam accusantium facere voluptates voluptate ex similique eum. Mollitia, quos.",
          "image": "./images/avatars/member_2.png"
        },
        {
          "userType": "sender",
          "username": "Samantha Clara",
          "timestamp": "2024-01-07T10:30:00.000Z",
          "message": "Lorem ipsum, dolor sit amet consectetur adipisicing",
          "image": "./images/avatars/member_2.png"
        },
        {
          "userType": "sender",
          "username": "Samantha Clara",
          "timestamp": "2024-01-07T10:30:00.000Z",
          "message": "Lorem ipsum, dolor sit amet consectetur adipisicing",
          "image": "./images/avatars/member_2.png"
        },
        {
          "userType": "receiver",
          "username": "Samantha Clara",
          "timestamp": "2024-01-07T10:30:00.000Z",
          "message": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima placeat fugit nostrum sit esse, recusandae accusamus, molestias id cumque animi tempore voluptatibus saepe error ab dolorum eligendi harum quam accusantium facere voluptates voluptate ex similique eum. Mollitia, quos.",
          "image": "./images/avatars/member_2.png"
        },
        {
          "userType": "sender",
          "username": "Samantha Clara",
          "timestamp": "2024-01-07T10:30:00.000Z",
          "message": "Lorem ipsum, dolor sit amet consectetur adipisicing",
          "image": "./images/avatars/member_2.png"
        }
      ]}`)
    );
  }, []);

  console.log("messages:", messages);

  const handleMessage = (data) => {
    setMessages((previousMessages) => {
      return {
        ...previousMessages.chatMessages,
        chatMessages: [...previousMessages.chatMessages, data],
      };
    });
  };

  return (
    <div className="chat-conversation chat-conversation-person">
      <div className="chat-conversation-content">
        <ChatConversationHeader />
        <ChatConversationBody messages={messages} />
        <ChatConversationFooter handleMessage={handleMessage} />
      </div>
    </div>
  );
};

export default ChatConversation;
