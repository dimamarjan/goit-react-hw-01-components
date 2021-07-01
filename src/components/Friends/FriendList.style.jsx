import styled from '@emotion/styled';
import { colorsVars } from '../../utils/colors';

export const FriendsSection = styled.div``;

export const FriendsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const FriendsListItem = styled.li`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  width: 400px;
  height: 115px;
  background-color: ${colorsVars.sectionBackgroundColor};

  margin-bottom: 10px;

  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;

export const Status = styled.span`
  display: block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-left: 15px;
  background-color: ${props =>
    props.isOnline ? colorsVars.onLine : colorsVars.offLine};
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;

  margin-left: 15px;
`;

export const Name = styled.p`
  margin-left: 15px;
  font-size: 28px;
  font-weight: 600;
`;
