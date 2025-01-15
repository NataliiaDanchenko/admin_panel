// lib
import { v4 as uuidv4 } from 'uuid';
// redux
import { createSlice } from '@reduxjs/toolkit';

interface User {
  id: string | number; 
  role: string,
  status: string; 
  name: string,
  phone: string,
  email: string,
  country: string,
  city: string,
  avatar: string,
}

interface UserState {
  users: User[];     
}

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action) {
      state.users.push({
        id: action.payload.id || uuidv4(),
        role: action.payload.role,
        status: action.payload.status,
        name: action.payload.name,
        phone: action.payload.phone,
        email: action.payload.email,
        country: action.payload.country,
        city: action.payload.city,
        avatar: action.payload.avatar,
      });
    },
    removeUser(state, action) {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    },
    upgradeUser(state, action) {
      const userIndex = state.users.findIndex((user) => user.id === action.payload.id);
      if (userIndex !== -1) {
        state.users[userIndex] = {
          ...state.users[userIndex],
          ...action.payload,
          id: state.users[userIndex].id, 
        };
      }
    }

  }
})

export const { addUser, removeUser, upgradeUser } = userSlice.actions;
export default userSlice.reducer;