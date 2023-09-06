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

export interface projectSendType {
  name: string;
  image: string;
  describtion?: string;
  github: string;
  url?: string;
}
export interface projectType extends projectSendType {
  _id: string;
}

export const { setProjects } = projectsSlice.actions;
export default projectsSlice.reducer;
