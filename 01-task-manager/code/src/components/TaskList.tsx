import TaskItem from "./TaskItem";
import type { Task } from "../types/types";

type Props = {
  tasks: Task[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

function TaskList({ tasks, onDelete, onToggle }: Props) {
  if (tasks.length === 0) {
    return <p>No hay tareas</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}

export default TaskList;
