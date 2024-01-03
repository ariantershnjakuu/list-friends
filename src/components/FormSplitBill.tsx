import React from "react";
import "../style/friend.css";
import Button from "./AddButton";

interface FormSplitBillProps {
  selectedFriend: any;
}

const FormSplitBill: React.FC<FormSplitBillProps> = ({ selectedFriend }) => {
  return (
    <form className="form-split-bill">
      <span>Split a bill with {selectedFriend.name}</span>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <label htmlFor="">Bill value</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Your expense</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">{selectedFriend.name}'s expense</label>
          <input type="text" disabled />
        </div>
        <div>
          <label htmlFor="">Who is paying the bill?</label>
          <select name="" id="">
            <option value="">You</option>
            <option value="">{selectedFriend.name}</option>
          </select>
        </div>
      </div>
      <Button>Split bill</Button>
    </form>
  );
};

export default FormSplitBill;
