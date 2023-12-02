import React from "react";
import FriendList from "./components/FriendList";
import initialFriend from "./friendlist";

function App() {
  return (
    <div className="App">
      <FriendList friends={initialFriend} />
    </div>
  );
}

export default App;
