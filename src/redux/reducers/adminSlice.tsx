import { createSlice } from "@reduxjs/toolkit";

export interface adminStateType {
  admin: adminType;
}

const initialState: adminStateType = {
  admin: { isAdmin: false },
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdmin: (state, action) => {
      return {
        isAdmin: true,
        ...action.payload.admin,
      };
    },
  },
});

export type adminType = {
  isAdmin: boolean;
  _id?: string;
  name?: string;
  username?: string;
};

export const { setAdmin } = adminSlice.actions;
export default adminSlice.reducer;
