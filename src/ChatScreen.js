import React,{useState} from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";


function ChatScreen() {
   

    return (
        <div className="chatScreen">
          
    <section id="chatroom">
      <section id="feedback"></section>
    </section>

    <ul id="messages"></ul>
            <input id="textbox" type="text"></input>
            <button id="button">Send</button>
        </div>

        

        
 

    );
}

function chatspace() {
  var messages = document.getElementById("messages");
  var textbox = document.getElementById("textbox");
  var button = document.getElementById("button");
  
  button.addEventListener ("click", function(){
      var newMessage= document.createElement("ul");
      newMessage.innerHTML=textbox.value;
      messages.appendChild (newMessage);
      textbox.value="";
  });
}

export default ChatScreen;