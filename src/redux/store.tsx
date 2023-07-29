import { configureStore } from "@reduxjs/toolkit";
import projectsSlice from "./reducers/projectsSlice";
import adminSlice from "./reducers/adminSlice";

export const store = configureStore({
  reducer: { projects: projectsSlice, admin: adminSlice },
});
