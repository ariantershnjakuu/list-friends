import React from "react";
import Button from "./AddButton";
import "../style/friend.css";

interface FormAddFriendProps {}

const FormAddFriend: React.FC<FormAddFriendProps> = () => {
  return (
    <div>
      <form action="" className="form-add-friend">
        <div style={{ display: "flex", gap: "32px" }}>
          <label htmlFor="" style={{ width: "120px" }}>
            Friend name
          </label>
          <input type="text" name="" id="" />
        </div>
        <div style={{ display: "flex", gap: "32px" }}>
          <label htmlFor="" style={{ width: "120px" }}>
            Image URL
          </label>
          <input type="text" />
        </div>
        <Button>Add</Button>
      </form>
    </div>
  );
};

export default FormAddFriend;
