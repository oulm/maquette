import "./ChatTypeBlockStyle.css";
import ChatItem from "./chat-item/ChatItem";
const ChatTypeBlock = ({ type }) => {
  const friendsMessages = JSON.parse(`[
    {
      "status": "online",
      "friend": {
        "name": "William Smith",
        "image": "./images/avatars/member_2.png",
        "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, amet itaque laboriosam hic porro quasi delectus dignissimos. Asperiores, inventore esse!"
      },
      "notifications": 9
    },
    {
      "status": "busy",
      "friend": {
        "name": "William Smith",
        "image": "./images/avatars/member_2.png",
        "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, amet itaque laboriosam hic porro quasi delectus dignissimos. Asperiores, inventore esse!"
      },
      "notifications": 9
    },
    {
      "status": "busy",
      "friend": {
        "name": "William Smith",
        "image": "./images/avatars/member_2.png",
        "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, amet itaque laboriosam hic porro quasi delectus dignissimos. Asperiores, inventore esse!"
      },
      "notifications": 9
    },
    {
      "status": "busy",
      "friend": {
        "name": "William Smith",
        "image": "./images/avatars/member_2.png",
        "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, amet itaque laboriosam hic porro quasi delectus dignissimos. Asperiores, inventore esse!"
      },
      "notifications": 9
    },
    {
      "status": "busy",
      "friend": {
        "name": "William Smith",
        "image": "./images/avatars/member_2.png",
        "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, amet itaque laboriosam hic porro quasi delectus dignissimos. Asperiores, inventore esse!"
      },
      "notifications": 9
    },
    {
      "status": "busy",
      "friend": {
        "name": "William Smith",
        "image": "./images/avatars/member_2.png",
        "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, amet itaque laboriosam hic porro quasi delectus dignissimos. Asperiores, inventore esse!"
      },
      "notifications": 9
    }
  ]`);

  const groupsMessages = JSON.parse(`[
    {
      "members": 15,
      "group": {
        "name": "Mystic Voyagers",
        "images": [
          "./images/avatars/member_1.png",
          "./images/avatars/member_2.png",
          "./images/avatars/member_3.png",
          "./images/avatars/member_4.png"
        ],
        "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, amet itaque laboriosam hic porro quasi delectus dignissimos. Asperiores, inventore esse!"
      },
      "notifications": 9
    },
    {
      "members": 12,
      "group": {
        "name": "Celestial Nomads",
        "images": [
          "./images/avatars/member_1.png",
          "./images/avatars/member_2.png",
          "./images/avatars/member_3.png",
          "./images/avatars/member_4.png"
        ],
        "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, amet itaque laboriosam hic porro quasi delectus dignissimos. Asperiores, inventore esse!"
      },
      "notifications": 9
    },
    {
      "members": 10,
      "group": {
        "name": "Galactic Dreamweavers",
        "images": [
          "./images/avatars/member_1.png",
          "./images/avatars/member_2.png",
          "./images/avatars/member_3.png",
          "./images/avatars/member_4.png"
        ],
        "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, amet itaque laboriosam hic porro quasi delectus dignissimos. Asperiores, inventore esse!"
      },
      "notifications": 9
    },
    {
      "members": 14,
      "group": {
        "name": "Ethereal Explorers",
        "images": [
          "./images/avatars/member_1.png",
          "./images/avatars/member_2.png",
          "./images/avatars/member_3.png",
          "./images/avatars/member_4.png"
        ],
        "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, amet itaque laboriosam hic porro quasi delectus dignissimos. Asperiores, inventore esse!"
      },
      "notifications": 9
    },
    {
      "members": 11,
      "group": {
        "name": "Stellar Nomads",
        "images": [
          "./images/avatars/member_1.png",
          "./images/avatars/member_2.png",
          "./images/avatars/member_3.png",
          "./images/avatars/member_4.png"
        ],
        "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, amet itaque laboriosam hic porro quasi delectus dignissimos. Asperiores, inventore esse!"
      },
      "notifications": 9
    },
    {
      "members": 13,
      "group": {
        "name": "Dragonheart Sorcerers",
        "images": [
          "./images/avatars/member_1.png",
          "./images/avatars/member_2.png",
          "./images/avatars/member_3.png",
          "./images/avatars/member_4.png"
        ],
        "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, amet itaque laboriosam hic porro quasi delectus dignissimos. Asperiores, inventore esse!"
      },
      "notifications": 9
    }
]`);

  // console.log(groupsMessages);
  if (type === "chat-friends") {
    return (
      <div className="chat-friends chat-sidebar-item">
        <div className="chat-sidebar-item-header">
          <div className="chat-title">Friends</div>
          <a href="friends.html">
            <i className="fa-solid fa-eye"></i> See all
          </a>
        </div>
        <ul className="chat-list scrollbar">
          {friendsMessages &&
            friendsMessages?.map((friendMessage, index) => {
              const key = `key-${index}`;
              return <ChatItem data={friendMessage} type="friend" key={key} />;
            })}
        </ul>
      </div>
    );
  }
  if (type === "chat-groups") {
    return (
      <div className="chat-groups chat-sidebar-item">
        <div className="chat-sidebar-item-header">
          <div className="chat-title">Groups</div>
          <a href="#">
            <i className="fa-solid fa-eye"></i> See all{" "}
          </a>
        </div>
        <ul className="chat-list scrollbar">
          {groupsMessages &&
            groupsMessages?.map((groupMessage, index) => {
              const key = `key-${index}`;
              return <ChatItem data={groupMessage} type="group" key={key} />;
            })}
        </ul>
      </div>
    );
  }
};

export default ChatTypeBlock;
