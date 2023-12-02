import React from "react";
import "../style/friend.css";
import Button from "./AddButton";

interface FormSplitBillProps {}

const FormSplitBill: React.FC<FormSplitBillProps> = () => {
  return (
    <div className="form-split-bill">
      <span>Split a bill with clark</span>
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
          <label htmlFor="">X's expense</label>
          <input type="text" disabled />
        </div>
        <div>
          <label htmlFor="">Who is paying the bill?</label>
          <select name="" id="">
            <option value="">You</option>
            <option value="">X</option>
          </select>
        </div>
      </div>
      <Button>Split bill</Button>
    </div>
  );
};

export default FormSplitBill;
