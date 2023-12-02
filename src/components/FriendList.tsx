import Friend from "./Friend";

export type Friend = {
  id: number;
  name: string;
  image: string;
  balance: number;
};

interface FriendListProps {
  friends: Friend[];
}

const FriendList: React.FC<FriendListProps> = ({ friends }) => {
  return (
    <>
      {friends.map((element) => (
        <Friend
          id={element.id}
          name={element.name}
          balance={element.balance}
          image={element.image}
          key={element.id}
        />
      ))}
    </>
  );
};

export default FriendList;
