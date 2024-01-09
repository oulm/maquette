import "./ChatItem.css";

const ChatItem = ({ data, type }) => {
  if (type === "friend") {
    const { status, friend, notifications } = data;
    return (
      <li className="chat-item" data-status={status}>
        <a href="#">
          <div className="friend-infos chat-item-infos">
            <div className="friend-img chat-item-images">
              <img src={friend.image} alt="member-avatar" />
            </div>
            <div className="friend-description chat-item-description">
              <div className="chat-item-title">{friend.name}</div>
              <p className="chat-item-message">{friend.message}</p>
            </div>
          </div>
          <div className="chat-item-notifications">
            <div className="notifications-number">{notifications}</div>
          </div>
        </a>
      </li>
    );
  }

  if (type === "group") {
    const { members, group, notifications } = data;
    return (
      <li className="chat-item">
        <a href="#">
          <div className="group-infos chat-item-infos">
            <div className="group-img chat-item-images">
              {group.images.map((image) => (
                <img src={image} alt="member avatar" />
              ))}
            </div>
            <div className="group-description chat-item-description">
              <div className="chat-item-title">{group.name}</div>
              <p className="chat-item-message">{group.message}</p>
            </div>
          </div>
          <div className="chat-item-notifications">
            <div className="notifications-number">{notifications}</div>
          </div>
        </a>
      </li>
    );
  }
};

export default ChatItem;
