import Friends from "./Friend";

export type Friend = {
  id: number;
  name: string;
  image: string;
  balance: number;
};

interface FriendListProps {
  friends: Friend[];
  selectedFriend: any;
  onSelection: (friend: any) => void;
}

const FriendList: React.FC<FriendListProps> = ({
  friends,
  onSelection,
  selectedFriend,
}) => {
  return (
    <>
      {friends.map((element) => (
        <Friends
          key={element.id}
          friend={element}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </>
  );
};

export default FriendList;
