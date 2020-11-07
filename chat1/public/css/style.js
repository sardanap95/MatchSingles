* {
    box-sizing: border-box;
  }
  
  body {
    background-color: #edeff2;
    font-family: "Calibri", "Roboto", sans-serif;
  }
  
  .chat_window {
    position: absolute;
    width: calc(100% - 20px);
    max-width: 800px;
    height: 500px;
    border-radius: 10px;
    background-color: #fff;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    background-color: #f8f8f8;
    overflow: hidden;
  }
  
  .top_menu {
    background-color: #fff;
    width: 100%;
    padding: 20px 0 15px;
    box-shadow: 0 1px 30px rgba(0, 0, 0, 0.1);
  }
  .top_menu .buttons {
    margin: 3px 0 0 20px;
    position: absolute;
  }
  .top_menu .buttons .button {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 10px;
    position: relative;
  }
  .top_menu .buttons .button.close {
    background-color: #f5886e;
  }
  .top_menu .buttons .button.minimize {
    background-color: #fdbf68;
  }
  .top_menu .buttons .button.maximize {
    background-color: #a3d063;
  }
  .top_menu .title {
    text-align: center;
    color: #bcbdc0;
    font-size: 20px;
  }
  
  .messages {
    position: relative;
    list-style: none;
    padding: 20px 10px 0 10px;
    margin: 0;
    height: 347px;
    overflow: scroll;
  }
  .messages .message {
    clear: both;
    overflow: hidden;
    margin-bottom: 20px;
    transition: all 0.5s linear;
    opacity: 0;
  }
  .messages .message.left .avatar {
    background-color: #f5886e;
    float: left;
  }
  .messages .message.left .text_wrapper {
    background-color: #ffe6cb;
    margin-left: 20px;
  }
  .messages .message.left .text_wrapper::after,
  .messages .message.left .text_wrapper::before {
    right: 100%;
    border-right-color: #ffe6cb;
  }
  .messages .message.left .text {
    color: #c48843;
  }
  .messages .message.right .avatar {
    background-color: #fdbf68;
    float: right;
  }
  .messages .message.right .text_wrapper {
    background-color: #c7eafc;
    margin-right: 20px;
    float: right;
  }
  .messages .message.right .text_wrapper::after,
  .messages .message.right .text_wrapper::before {
    left: 100%;
    border-left-color: #c7eafc;
  }
  .messages .message.right .text {
    color: #45829b;
  }
  .messages .message.appeared {
    opacity: 1;
  }
  .messages .message .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: inline-block;
  }
  .messages .message .text_wrapper {
    display: inline-block;
    padding: 20px;
    border-radius: 6px;
    width: calc(100% - 85px);
    min-width: 100px;
    position: relative;
  }
  .messages .message .text_wrapper::after,
  .messages .message .text_wrapper:before {
    top: 18px;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }
  .messages .message .text_wrapper::after {
    border-width: 13px;
    margin-top: 0px;
  }
  .messages .message .text_wrapper::before {
    border-width: 15px;
    margin-top: -2px;
  }
  .messages .message .text_wrapper .text {
    font-size: 18px;
    font-weight: 300;
  }
  
  .bottom_wrapper {
    position: relative;
    width: 100%;
    background-color: #fff;
    padding: 10px 10px;
    position: absolute;
    bottom: 0;
  }
  .bottom_wrapper .message_input_wrapper {
    display: inline-block;
    height: 50px;
    border-radius: 25px;
    border: 1px solid #bcbdc0;
    width: calc(100% - 160px);
    position: relative;
    padding: 0 20px;
  }
  .bottom_wrapper .message_input_wrapper .message_input {
    border: none;
    height: 100%;
    box-sizing: border-box;
    width: calc(100% - 40px);
    position: absolute;
    outline-width: 0;
    color: gray;
  }
  .bottom_wrapper .send_message {
    width: 140px;
    height: 50px;
    display: inline-block;
    border-radius: 50px;
    background-color: #a3d063;
    border: 2px solid #a3d063;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s linear;
    text-align: center;
    float: right;
  }
  .bottom_wrapper .send_message:hover {
    color: #a3d063;
    background-color: #fff;
  }
  .bottom_wrapper .send_message .text {
    font-size: 18px;
    font-weight: 300;
    display: inline-block;
    line-height: 48px;
  }
  
  .message_template {
    display: none;
  }
  
  .messages > li {
    font-size: 15px;
    color: rgb(13, 223, 153);
    background: #f7a30675;
    border-radius: 5px;
    width: fit-content;
  }
  
  .messages > span {
    font-size: 10px;
    font-style: italic;
  }