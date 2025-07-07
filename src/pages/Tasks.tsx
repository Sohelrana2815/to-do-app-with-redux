import AddTaskModal from "@/components/module/tasks/AddTaskModal";
import TasksCard from "@/components/module/tasks/TasksCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  console.log("Tasks", tasks);
  return (
    <div className="space-y-5 mt-10">
      <div className="flex justify-between items-center ">
        <h2>Tasks</h2>
        <AddTaskModal />
      </div>
      {tasks.map((task) => (
        <TasksCard task={task} key={task.id} />
      ))}
    </div>
  );
};

export default Tasks;
