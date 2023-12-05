import React from "react";
import Button from "./AddButton";
import "../style/friend.css";
import { useState } from "react";

interface FormAddFriendProps {
  onAddFriend: (newFriend: any) => void;
}

const FormAddFriend: React.FC<FormAddFriendProps> = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newFriend = {
      name,
      image,
      balance: 0,
      id: crypto.randomUUID(),
    };

    onAddFriend(newFriend);
  };
  return (
    <div>
      <form action="" className="form-add-friend" onSubmit={handleSubmit}>
        <div style={{ display: "flex", gap: "32px" }}>
          <label htmlFor="" style={{ width: "120px" }}>
            Friend name
          </label>
          <input
            type="text"
            name=""
            id=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div style={{ display: "flex", gap: "32px" }}>
          <label htmlFor="" style={{ width: "120px" }}>
            Image URL
          </label>
          <input
            type="text"
            name=""
            id=""
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <Button>Add</Button>
      </form>
    </div>
  );
};

export default FormAddFriend;
