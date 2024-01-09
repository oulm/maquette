import ChatConversation from './chat-conversation/ChatConversation';
import ChatSidebar from './chat-sidebar/ChatSidebar';

import './ChatStyle.css';
const Chat = () => {
  return (
    <section className="chat">
      <div className="container">
        <div className="chat-content">
          <ChatSidebar />
          <ChatConversation />
        </div>
      </div>
    </section>
  );
};

export default Chat;
