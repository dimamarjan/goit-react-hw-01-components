import {
  FriendsSection,
  FriendsList,
  FriendsListItem,
  Status,
  Avatar,
  Name,
} from './FriendList.style';

export function FriendList(friendList) {
  return (
    <FriendsSection>
      <FriendsList>
        {friendList.friends.map(friendData => (
          <FriendsListItem key={friendData.id}>
            <Status isOnline={friendData.isOnline}></Status>
            <Avatar src={friendData.avatar} alt={friendData.name} />
            <Name>{friendData.name}</Name>
          </FriendsListItem>
        ))}
      </FriendsList>
    </FriendsSection>
  );
}
