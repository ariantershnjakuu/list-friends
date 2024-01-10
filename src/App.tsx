import React from "react";
import FriendList from "./components/FriendList";
import initialFriend from "./friendlist";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/AddButton";
import "./index.css";
import FormSplitBill from "./components/FormSplitBill";
import { useState } from "react";

type Friend = {
  id: number;
  name: string;
  image: string;
  balance: number;
};

function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [friend, setFriend] = useState(initialFriend);
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);

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

  const handleSplitBill = (bill: any) => {
    setFriend((friends: any) => {
      return friends.map((friend: any) =>
        friend.id === selectedFriend?.id
          ? { ...friend, balance: friend.balance + bill }
          : friend
      );
    });
    setSelectedFriend(null);
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
      {selectedFriend && (
        <FormSplitBill
          key={selectedFriend.id}
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
