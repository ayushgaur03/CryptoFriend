import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,  
    user_name: null,
    user_id: null,
  },
  reducers: {
    LogInUser: (state, action) => {
      state.isLoggedIn = true;
      state.user_name = action.payload.username;
      state.user_id = action.payload.id;
    },
    LogOutUser: (state) => {
      state.isLoggedIn = false;
      state.user_name = null;
      state.user_id = null;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
