import React from "react";
import FriendList from "./components/FriendList";
import initialFriend from "./friendlist";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/AddButton";
import "./index.css";
import FormSplitBill from "./components/FormSplitBill";
import { useState } from "react";

function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [friend, setFriend] = useState(initialFriend);

  const handleShowAdd = () => {
    setShowAdd((show) => !show);
  };

  const handleAddFriend = (newFriend: any) => {
    setFriend((prev) => [...prev, newFriend]);
    setShowAdd(false);
  };
  return (
    <div className="App">
      <div style={{ padding: "0 0 0 24px" }}>
        <FriendList friends={friend} />
        {showAdd && <FormAddFriend onAddFriend={handleAddFriend} />}
        <div onClick={handleShowAdd}>
          <Button>{showAdd ? "Close" : "Add friend"}</Button>
        </div>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
