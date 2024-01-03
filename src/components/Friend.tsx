import "../style/friend.css";
import Button from "./AddButton";
interface FriendProps {
  friend: any;
  onSelection: (friend: any) => void;
  selectedFriend: any;
}

const Friend: React.FC<FriendProps> = ({
  friend,
  onSelection,
  selectedFriend,
}) => {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <div key={friend.id} className={`friend ${isSelected ? "selected" : ""}`}>
      <img
        src={friend.image}
        alt={friend.name}
        className="friend-image"
        width={48}
      />
      <div className="list-friend">
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="red">
            You owe {friend.name} ${Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owes you ${Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance === 0 && <p className="blue">You are even</p>}
      </div>
      <span onClick={() => onSelection(friend)}>
        <Button>{isSelected ? "Close" : "Selected"}</Button>
      </span>
    </div>
  );
};

export default Friend;
