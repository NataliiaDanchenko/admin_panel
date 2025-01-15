// react
import { ChangeEvent, KeyboardEvent, FC, useState } from 'react';
// redux
import { useDispatch } from 'react-redux';
// reducer
import { addUser } from '@/enteties/user/model/reducer/createSlice';
// mui
import { Button, Stack, TextField } from '@mui/material';

interface UserAddFormProps {}

export const UserAddForm: FC<UserAddFormProps> = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    role: '',
    status: '',
    name: '',
    phone: '',
    email: '',
    country: '',
    city: '',
    avatar: '',
  });

  const fields = [
    { name: 'name', placeholder: 'Enter name', type: 'text' },
    { name: 'role', placeholder: 'Enter role', type: 'text' },
    { name: 'status', placeholder: 'Enter status', type: 'text' },
    { name: 'phone', placeholder: 'Enter phone', type: 'text' },
    { name: 'email', placeholder: 'Enter email', type: 'text' },
    { name: 'country', placeholder: 'Enter country', type: 'text' },
    { name: 'city', placeholder: 'Enter city', type: 'text' },
    { name: 'avatar', placeholder: 'Enter avatar URL', type: 'text' },
  ];

  const onFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onAddUserClick = () => {
    if (!formData.name || !formData.email) {
      alert('Name and Email are required!');
      return;
    }

    dispatch(
      addUser({
        ...formData,
        id: '', 
      }),
    );

    setFormData({
      role: '',
      status: '',
      name: '',
      phone: '',
      email: '',
      country: '',
      city: '',
      avatar: '',
    });
  };

  const onEnterClick = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onAddUserClick();
    }
  };

  return (
    <Stack
      direction='column'
      gap={2}
      justifyContent='space-around'
      alignItems='center'
      mx='auto'
      py={2}
      px={6}
    >
      {fields.map((field) => (
        <TextField
          key={field.name}
          name={field.name}
          value={formData[field.name as keyof typeof formData]}
          onChange={onFieldChange}
          placeholder={field.placeholder}
          type={field.type}
          onKeyDown={onEnterClick}
          sx={{ width: '500px' }}
        />
      ))}
      <Button onClick={onAddUserClick} variant='contained'>Add User</Button>
    </Stack>
  );
};
