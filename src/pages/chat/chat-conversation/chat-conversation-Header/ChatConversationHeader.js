import { useEffect, useRef, useState } from "react";
import useClickOutside from "../../../../utils/custom-hooks/useClickOutside";

import "./ChatConversationHeaderStyle.css";

const ChatConversationHeader = () => {
  const [justOpened, setJustOpened] = useState(false);
  const dropDownButtonRef = useRef(null);
  const dropDownMenuRef = useRef(null);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dropDownButton = dropDownButtonRef.current;
    if (dropDownButton) {
      dropDownButton.addEventListener("click", () => {
        setOpen((previousValue) => !previousValue);
        setJustOpened(true);
      });
    }
  }, [dropDownButtonRef]);

  useClickOutside(dropDownMenuRef, () => {
    // CHECK IF THE MODAL JUST OPENED
    if (justOpened) {
      setJustOpened(false);
      return;
    }
    if (open) setOpen(false);
  });

  useEffect(() => {
    console.log(open);
  }, [open]);
  return (
    <div className="chat-conversation-header">
      <div className="chat-conversation-infos">
        <div className="chat-conversation-images">
          <img src="/images/avatars/member_2.png" alt="person image" />
        </div>
        <div className="chat-conversation-description">
          <div className="chat-conversation-name">William Smith</div>
          <div className="chat-conversation-status" data-status="online">
            online
          </div>
        </div>
      </div>
      <div
        ref={dropDownButtonRef}
        className="chat-conversation-more dropdown-button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
          <path
            opacity="1"
            d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
          />
        </svg>
      </div>
      <div
        ref={dropDownMenuRef}
        className={`dropdown-menu ${open ? "open" : ""}`}
      >
        <div className="dropdown-menu-content">
          <ul className="dropdown-list">
            <li className="dropdown-item">
              <a href="#">
                <div className="dropdown-item-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      opacity="1"
                      d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                    />
                  </svg>
                </div>
                <div className="dropdown-item-title">Profile</div>
              </a>
            </li>
            <li className="dropdown-item">
              <a href="#">
                <div className="dropdown-item-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path
                      opacity="1"
                      d="M480 288c-50.1 0-93.6 28.8-114.6 70.8L132.9 126.3l.6-.6 60.1-60.1c87.5-87.5 229.3-87.5 316.8 0c67.1 67.1 82.7 166.3 46.8 248.3C535.8 297.6 509 288 480 288zM113.3 151.9L354.1 392.7c-1.4 7.5-2.1 15.3-2.1 23.3c0 23.2 6.2 44.9 16.9 63.7c-3 .2-6.1 .3-9.2 .3H357c-33.9 0-66.5-13.5-90.5-37.5l-9.8-9.8c-13.1-13.1-34.6-12.4-46.8 1.7L152.2 501c-5.8 6.7-14.2 10.7-23 11s-17.5-3.1-23.8-9.4l-32-32c-6.3-6.3-9.7-14.9-9.4-23.8s4.3-17.2 11-23l66.6-57.7c14-12.2 14.8-33.7 1.7-46.8l-9.8-9.8c-24-24-37.5-56.6-37.5-90.5v-2.7c0-22.8 6.1-44.9 17.3-64.3zM480 320a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
                    />
                  </svg>
                </div>
                <div className="dropdown-item-title">Play Game</div>
              </a>
            </li>
            <li className="dropdown-item" id="block">
              <a href="#">
                <div className="dropdown-item-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      opacity="1"
                      d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
                    />
                  </svg>
                </div>
                <div className="dropdown-item-title">block</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChatConversationHeader;
