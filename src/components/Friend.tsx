import "../style/friend.css";

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
        <p>{balance}</p>
      </div>
    </div>
  );
};

export default Friend;
