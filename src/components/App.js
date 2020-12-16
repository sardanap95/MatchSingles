import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chats from "./Chats";
import SingleMatchesCards from "./SingleMatchesCards";
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <div className="App">
      <Router>
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
            
            <SingleMatchesCards />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
