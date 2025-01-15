// react
import { FC } from 'react';
// redux
import { useSelector } from 'react-redux';
// ui
import { UserItemList } from '@/enteties/user/ui/UserItemList/UserItemList';

interface UserListProps {}

export const UserList: FC<UserListProps> = ({}) => {
  const users = useSelector((state: any) => state.users.users);
  return <UserItemList users={users} />;
};
