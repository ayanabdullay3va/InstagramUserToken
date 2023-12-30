import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  products: object[];
  isLogin: boolean;
}

const initialState: UserState = {
  products: [{}],
  isLogin: true,
};

export const UserState = createSlice({
  name: "users",
  initialState,
  reducers: {
    login: (state, actions) => {
      state.isLogin = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login } = UserState.actions;

export default UserState.reducer;
