import React, { useEffect } from 'react';
import Header from './Header';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Chats from "./Chats";
import SingleMatchesCards from "./SingleMatchesCards";
import ChatScreen from "./ChatScreen";
import './App.css';
import { Login, Register } from "./index.js";
import SwipeButtons from './SwipeButtons';
import db from './firebase';

function App() {
  // useEffect (()=>{
  //   db.collection("People").add({
  //     first: "Ada",
  //     last: "Lovelace",
  //     born: 1815
  // })
  // .then(function(docRef) {
  //     console.log("Document written with ID: ", docRef.id);
  // })
  // .catch(function(error) {
  //     console.error("Error adding document: ", error);
  // });
  // },[])
  return (
    <div className="App">
     {/* <h1>Welcome to SingleMatch App</h1> */}
     {/* <SingleMatchesCards /> */}
     <Router>
     {/* <Header /> */}
       <Switch>
         <Route path="/chat/:person">
           <Header backButton="/chat" />
           <ChatScreen />
           <Chats />
           <h1>I am a chatpage</h1>
         </Route>
         <Route path="/chat/">
           <Header backButton="/" />
           <ChatScreen />
           <h1>I am a chatpage</h1>
         </Route>
         <Route path="/">
           <Header />
           {/* <h1>I am a homepage</h1> */}
           <SingleMatchesCards />
           <SwipeButtons />
         </Route>
       </Switch>
     </Router> 
     
    </div>
  );
}

export default App;
