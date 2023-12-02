import "../style/friend.css";
import Button from "./AddButton";
interface FriendProps {
  id: number;
  name: string;
  image: string;
  balance: number;
}

const Friend: React.FC<FriendProps> = ({ id, image, name, balance }) => {
  return (
    <div key={id} className="friend">
      <img src={image} alt={name} className="friend-image" width={48} />
      <div className="list-friend">
        <h3>{name}</h3>
        {balance < 0 && (
          <p className="red">
            You owe {name} ${Math.abs(balance)}
          </p>
        )}
        {balance > 0 && (
          <p className="green">
            {name} owes you ${Math.abs(balance)}
          </p>
        )}
        {balance === 0 && <p className="blue">You are even</p>}
      </div>
      <Button>Select</Button>
    </div>
  );
};

export default Friend;
