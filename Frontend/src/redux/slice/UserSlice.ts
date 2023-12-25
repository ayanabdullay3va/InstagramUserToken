import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  value: number;
}

const initialState: UserState = {
  value: 0,
};

export const UserState = createSlice({
  name: "users",
  initialState,
  reducers: {
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { decrement } = UserState.actions;

export default UserState.reducer;
