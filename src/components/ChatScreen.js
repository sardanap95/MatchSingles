import React, { useState } from "react";
import "../assests/css/ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
  const [messages, setMessage] = useState([
    {
      name: "Ellen",
      image:
        "https://img.etimg.com/thumb/width-1200,height-900,imgsize-121641,resizemode-1,msid-63345364/magazines/panache/ranveer-singh-an-actor-who-made-his-own-luck-and-rose-due-to-his-talent-not-his-legacy.jpg",
      message: "Hello",
    },
    {
      name: "Anuj",
      image:
        "https://img.etimg.com/thumb/width-1200,height-900,imgsize-121641,resizemode-1,msid-63345364/magazines/panache/ranveer-singh-an-actor-who-made-his-own-luck-and-rose-due-to-his-talent-not-his-legacy.jpg",
      message: "How it going ?",
    },
  ]);

  return (
    <div className="chatScreen">
      <p className="chatScreen__timeStamp">You Matched..!</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar className="chatScreen__image" alt={message.name} src={message.image} />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
    </div>
  );
}

export default ChatScreen;
