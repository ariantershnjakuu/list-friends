import React from "react";
import "../style/friend.css";

interface AddButtonProps {
  children: any;
}

const AddButton: React.FC<AddButtonProps> = ({ children }) => {
  return (
    <div>
      <button type="submit" className="select-button">
        {children}
      </button>
    </div>
  );
};

export default AddButton;
