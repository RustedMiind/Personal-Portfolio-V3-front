import { createSlice } from "@reduxjs/toolkit";

export interface adminStateType {
  admin: adminTypeState;
}

const initialState: adminStateType = {
  admin: { isAdmin: false },
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdmin: (state, action) => {
      console.log(action);
      return {
        isAdmin: true,
        ...action.payload.admin,
      };
    },
  },
});

export type adminTypeState = adminType | { isAdmin: false };
export type adminType = {
  isAdmin: true;
  _id: string;
  name: string;
  username: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  token: string;
};

export const { setAdmin } = adminSlice.actions;
export default adminSlice.reducer;
