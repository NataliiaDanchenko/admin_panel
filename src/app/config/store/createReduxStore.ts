// redux
import { configureStore } from '@reduxjs/toolkit';
// reducer
import userReducer from "@/enteties/user/model/reducer/createSlice";

export const createReduxStore = () => {
  return configureStore({
    reducer: {
      users: userReducer,
    },
  })
};



