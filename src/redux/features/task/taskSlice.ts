import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialSate {
  tasks: ITask[];
  filter: "All" | "High" | "Medium" | "Low";
}

const initialState: InitialSate = {
  tasks: [
    {
      id: "1",
      title: "Learn Programming",
      description: "JavaScript",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "2",
      title: "Create GitHub Repo",
      description: "fklsdjflkd",
      dueDate: "2025-12",
      isCompleted: false,
      priority: "Low",
    },
    {
      id: "3",
      title: "Create GitHub Repo",
      description: "fklsdjflkd",
      dueDate: "2025-12",
      isCompleted: false,
      priority: "Medium",
    },
  ],
  filter: "All",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
