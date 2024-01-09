import ChatTypeBlock from './chat-type-block/ChatTypeBlock';

import './ChatSidebarStyle.css';
const ChatSidebar = () => {
  return (
    <div className="chat-sidebar">
      <ChatTypeBlock type={"chat-friends"} />
      <ChatTypeBlock type={"chat-groups"}/>
    </div>
  );
};

export default ChatSidebar;
