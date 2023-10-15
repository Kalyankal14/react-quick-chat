import React from "react";
import { UserAuth } from "../Contexts/AuthContext";

const Message = ({ msg }) => {
  const { currentUser } = UserAuth();
  return (
    <div>
      <div
        className={`chat ${
          msg.uid === currentUser.uid ? "chat-end" : "chat-start"
        }`}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={msg.avatar} />
          </div>
        </div>
        <div className="chat-header">{msg.displayName}</div>
        <div className="chat-bubble">{msg.text}</div>
        <div className="chat-footer opacity-50">
          {msg.uid === currentUser.uid ? "Sent" : "Received"}
        </div>
      </div>
    </div>
  );
};
export default Message;
