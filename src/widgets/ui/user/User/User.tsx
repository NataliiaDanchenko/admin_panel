// react
import { FC } from 'react';
// ui
import { UserList } from '../UserList/UserList';
// mui
import { Box } from '@mui/material';

interface UserProps {}

export const User: FC<UserProps> = ({}) => {
  return (
    <Box>
      <UserList />
    </Box>
  );
};
