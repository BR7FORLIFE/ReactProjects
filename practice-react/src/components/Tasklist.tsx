import type { Task } from "./Exercise";

type TaskListProps = {
  tasks: Task[];
  onToggle: (id: number) => void;
};

export default function TaskList({ tasks, onToggle }: TaskListProps) {
  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{
            textDecoration: task.done ? "line-through" : "none",
            cursor: "pointer",
          }}
          onClick={() => onToggle(task.id)}
        >
          {task.text}
        </li>
      ))}
    </ul>
  );
}
