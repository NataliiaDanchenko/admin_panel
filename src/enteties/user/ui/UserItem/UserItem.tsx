// react
import { ChangeEvent, FC, useState } from 'react';
// redux
import { useDispatch } from 'react-redux';
// reducer
import {
  addUser,
  removeUser,
  upgradeUser,
} from '@/enteties/user/model/reducer/createSlice';
// type
import { IUser } from '../../model/types/userTypes';
// mui
import {
  TableRow,
  TableCell,
  Avatar,
  Button,
  Modal,
  Box,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

interface TodoItemProps extends IUser {}

export const UserItem: FC<TodoItemProps> = ({
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
  const [openModal, setOpenModal] = useState(false);
  const [updateUser, setUpdateUser] = useState({
    role: role || '',
    status: status || '',
    name: name || '',
    phone: phone || '',
    email: email || '',
    country: country || '',
    city: city || '',
    avatar: avatar || '',
  });

  const dispatch = useDispatch();

  const addNewUser = () => {
    dispatch(
      addUser({
        id,
        role,
        status,
        name,
        phone,
        email,
        country,
        city,
        avatar,
      }),
    );
  };

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const handleUpdateUser = () => {
    if (id) {
      const updatedUser: IUser = {
        id,
        role: updateUser.role,
        status: updateUser.status,
        name: updateUser.name,
        phone: updateUser.phone,
        email: updateUser.email,
        country: updateUser.country,
        city: updateUser.city,
        avatar: updateUser.avatar,
      };

      dispatch(upgradeUser(updatedUser));
      setOpenModal(false); 
      setUpdateUser({
        role: '',
        status: '',
        name: '',
        phone: '',
        email: '',
        country: '',
        city: '',
        avatar: '',
      });
    }
  };

  const removeOldUser = (id: string) => {
    dispatch(removeUser({ id }));
  };

  const userUpdateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdateUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <TableRow key={id}>
        <TableCell align='center'>{role}</TableCell>
        <TableCell align='center'>{status}</TableCell>
        <TableCell align='center'>{name}</TableCell>
        <TableCell align='center'>{phone}</TableCell>
        <TableCell align='center'>{email}</TableCell>
        <TableCell align='center'>{country}</TableCell>
        <TableCell align='center'>{city}</TableCell>
        <TableCell align='center'>
          <Avatar alt={name} src={avatar} sx={{ margin: '0 auto' }} />
        </TableCell>
        <TableCell align='center'>
          <Button variant='contained' onClick={openModalHandler}>
            Update
          </Button>
        </TableCell>
        <TableCell align='center'>
          <Button variant='contained' onClick={() => removeOldUser(id)}>
            Delete
          </Button>
        </TableCell>
      </TableRow>

      <Modal open={openModal} onClose={closeModalHandler}>
        <Box
          sx={{
            width: '50%',
            margin: 'auto',
            backgroundColor: 'white',
            padding: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            top: '50%',
            transform: 'translateY(10%)',
          }}
        >
          <Typography align='center'>Update Todo</Typography>
          <Stack
            direction='column'
            gap={2}
            justifyContent='center'
            maxWidth='700px'
            alignItems='center'
            mx='auto'
            py={2}
            px={6}
          >
            {Object.keys(updateUser).map((field) => (
              <TextField
                key={field}
                name={field}
                placeholder={`Edit ${field}`}
                value={updateUser[field as keyof typeof updateUser]}
                onChange={userUpdateChange}
                size='small'
                sx={{ backgroundColor: 'white', borderRadius: '4px' }}
              />
            ))}
            <Button
              variant='contained'
              color='warning'
              onClick={handleUpdateUser}
            >
              Update
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};
