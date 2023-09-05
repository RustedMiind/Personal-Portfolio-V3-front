import { createSlice } from "@reduxjs/toolkit";

export interface projectsStateType {
  projects: projectType[];
}

const initialState: projectsStateType = {
  projects: [],
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state: projectsStateType, action) => {
      return action.payload.projects;
    },
  },
});

export type projectType = {
  _id: string;
  title: string;
  image: string;
  describtion?: string;
  github: string;
  live?: string;
};

export const { setProjects } = projectsSlice.actions;
export default projectsSlice.reducer;
