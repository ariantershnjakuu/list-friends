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
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleShowAdd = () => {
    setShowAdd((show) => !show);
  };

  const handleAddFriend = (newFriend: any) => {
    setFriend((prev) => [...prev, newFriend]);
    setShowAdd(false);
  };

  const handleSelection = (friend: any) => {
    // setSelectedFriend(friend);
    setSelectedFriend((current: any) =>
      current?.id === friend.id ? null : friend
    );
    setShowAdd(false);
  };

  return (
    <div className="App">
      <div style={{ padding: "0 0 0 24px" }}>
        <FriendList
          friends={friend}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />
        {showAdd && <FormAddFriend onAddFriend={handleAddFriend} />}
        <div onClick={handleShowAdd}>
          <Button>{showAdd ? "Close" : "Add friend"}</Button>
        </div>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
    </div>
  );
}

export default App;
