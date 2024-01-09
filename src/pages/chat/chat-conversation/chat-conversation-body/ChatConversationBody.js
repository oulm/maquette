import "./ChatConversationBodyStyle.css";
import ChatMessage from "./chat-message/ChatMessage";
const ChatConversationBody = ({ messages }) => {
  return (
    <div className="chat-conversation-body scrollbar">
      {messages.chatMessages?.length ? (
        messages.chatMessages?.map((message, index) => {
          const key = `message-${index}`;
          return <ChatMessage key={key} data={message} />;
        })
      ) : (
        <div>empty</div>
      )}
    </div>
  );
};

export default ChatConversationBody;
