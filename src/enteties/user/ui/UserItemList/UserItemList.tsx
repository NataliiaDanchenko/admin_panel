// react
import { FC } from 'react';
// type
import { IUser } from '../../model/types/userTypes';
// ui
import { UserItem } from '@/enteties/user/ui/UserItem/UserItem';
// mui
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
} from '@mui/material';

interface UserItemListProps {
  users: IUser[];
}

export const UserItemList: FC<UserItemListProps> = ({ users }) => {
  return (
    <div>
      <TableContainer
        component={Paper}
        sx={{ margin: 'auto', mt: 4 }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align='center'>
                <strong>Role</strong>
              </TableCell>
              <TableCell align='center'>
                <strong>Status</strong>
              </TableCell>
              <TableCell align='center'>
                <strong>Name</strong>
              </TableCell>
              <TableCell align='center'>
                <strong>Phone</strong>
              </TableCell>
              <TableCell align='center'>
                <strong>Email</strong>
              </TableCell>
              <TableCell align='center'>
                <strong>Country</strong>
              </TableCell>
              <TableCell align='center'>
                <strong>City</strong>
              </TableCell>
              <TableCell align='center'>
                <strong>Avatar</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(
              ({
                id,
                role,
                status,
                name,
                phone,
                email,
                country,
                city,
                avatar,
              }) => {
                return (
                  <UserItem
                    key={id}
                    id={id}
                    role={role}
                    status={status}
                    name={name}
                    phone={phone}
                    email={email}
                    country={country}
                    city={city}
                    avatar={avatar}
                  />
                );
              },
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
