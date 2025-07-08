export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "high" | "medium" | "low"; // lowercase
}

export interface IUser {
  userId: string;
  name: string;
}
