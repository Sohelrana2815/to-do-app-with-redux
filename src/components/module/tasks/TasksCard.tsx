import { Button } from "@/components/ui/button";
import type { ITask } from "@/types";
import { FiTrash2 } from "react-icons/fi";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/redux/hook";
import {
  deleteTask,
  toggleCompleteState,
} from "@/redux/features/task/taskSlice";
interface IProps {
  task: ITask;
}

const TasksCard = ({ task }: IProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-between items-center bg-white dark:bg-gray-800 shadow rounded-lg p-4 mb-4 w-full max-w-xl mx-auto">
      {/* Left: Task details */}
      <div className="flex-1 pr-4">
        <h3
          className={cn(
            "text-lg font-semibold text-gray-900 dark:text-gray-100",
            task.isCompleted && "line-through"
          )}
        >
          {task.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
          {task.description}
        </p>
        <div className="mt-3 flex flex-wrap items-center text-xs text-gray-500 dark:text-gray-400">
          <span className="mr-4">
            Due Date: <time>{task.dueDate}</time>
          </span>
          <span
            className={cn("px-2 py-1 rounded-full", {
              "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200":
                task.priority === "low",
              "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200":
                task.priority === "medium",
              "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200":
                task.priority === "high",
            })}
          >
            {task.priority}
          </span>
        </div>
      </div>

      {/* Right: Checkbox and Delete */}
      <div className="flex items-center space-x-4">
        <Checkbox
          checked={task.isCompleted}
          onClick={() => dispatch(toggleCompleteState(task.id))}
          className="cursor-pointer"
        />
        <Button
          onClick={() => dispatch(deleteTask(task.id))}
          size="sm"
          variant={"ghost"}
          className="text-red-700 hover:text-red-800"
        >
          <FiTrash2 />
        </Button>
      </div>
    </div>
  );
};

export default TasksCard;
