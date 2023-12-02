import React from "react";
import FriendList from "./components/FriendList";
import initialFriend from "./friendlist";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/AddButton";
import "./index.css";
import FormSplitBill from "./components/FormSplitBill";

function App() {
  return (
    <div className="App">
      <div style={{ padding: "0 0 0 24px" }}>
        <FriendList friends={initialFriend} />
        <FormAddFriend />
        <Button>Add friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
