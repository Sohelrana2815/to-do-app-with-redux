import AddTaskModal from "@/components/module/tasks/AddTaskModal";
import TasksCard from "@/components/module/tasks/TasksCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();
  console.log("Tasks", tasks);
  return (
    <div className="space-y-5 mt-10">
      <div className="flex justify-end items-center gap-5">
        <h2 className="mr-auto">Tasks</h2>
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("all"))}
              value="all"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("low"))}
              value="low"
            >
              Low
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("medium"))}
              value="medium"
            >
              Medium
            </TabsTrigger>
            <TabsTrigger
              value="high"
              onClick={() => dispatch(updateFilter("high"))}
            >
              High
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal />
      </div>
      {tasks.map((task) => (
        <TasksCard task={task} key={task.id} />
      ))}
    </div>
  );
};

export default Tasks;
