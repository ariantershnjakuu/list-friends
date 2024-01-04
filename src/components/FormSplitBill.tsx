import React, { useState } from "react";
import "../style/friend.css";
import Button from "./AddButton";

interface FormSplitBillProps {
  selectedFriend: any;
  onSplitBill: (bill: any) => void;
}

const FormSplitBill: React.FC<FormSplitBillProps> = ({
  selectedFriend,
  onSplitBill,
}) => {
  const [bill, setBill] = useState(0);
  const [paidByUser, setPaidByUser] = useState(0);
  const [whoIsPaying, setWhoIsPaying] = useState("User");
  const paidByFriend = bill && bill - paidByUser;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  };
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <span>🤑 Split a bill with {selectedFriend.name}</span>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "28px",
        }}
      >
        <div className="form-split-element">
          <label htmlFor="">🧾 Bill value</label>
          <input
            type="text"
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
          />
        </div>
        <div className="form-split-element">
          <label htmlFor="">🫰🏻 Your expense</label>
          <input
            type="text"
            value={paidByUser}
            onChange={(e) =>
              setPaidByUser(
                Number(e.target.value) > bill
                  ? paidByUser
                  : Number(e.target.value)
              )
            }
          />
        </div>
        <div className="form-split-element">
          <label htmlFor="">🙍‍♂️ {selectedFriend.name}'s expense</label>
          <input type="text" disabled value={paidByFriend} />
        </div>
        <div className="form-split-element">
          <label htmlFor="">💵 Who is paying the bill?</label>
          <select
            value={whoIsPaying}
            onChange={(e) => setWhoIsPaying(e.target.value)}
          >
            <option value="user">You</option>
            <option value="friend">{selectedFriend.name}</option>
          </select>
        </div>
      </div>
      <Button>Split bill</Button>
    </form>
  );
};

export default FormSplitBill;
