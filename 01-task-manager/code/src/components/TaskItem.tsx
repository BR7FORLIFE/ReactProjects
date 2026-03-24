import type { Task } from "../types/types";

type Props = {
  task: Task;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

function TaskItem({ task, onDelete, onToggle }: Props) {
  return (
    <li className="flex items-center justify-between border p-3 rounded-lg">
      <span
        onClick={() => onToggle(task.id)}
        className={`cursor-pointer ${
          task.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {task.title}
      </span>

      <div className="flex gap-2">
        <button
          onClick={() => onToggle(task.id)}
          className="text-green-500 hover:text-green-700"
        >
          ✔
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="text-red-500 hover:text-red-700"
        >
          ✖
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
