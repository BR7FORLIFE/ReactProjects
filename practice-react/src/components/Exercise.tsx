import { useState, useEffect } from "react";
import TaskList from "./Tasklist";

export type Task = {
  id: number;
  text: string;
  done: boolean;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const addTask = (text: string) => {
    const newTask: Task = { id: Date.now(), text, done: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Gestor de Tareas ✅</h1>
      <button onClick={() => addTask("Nueva tarea")}>Agregar tarea</button>
      <TaskList tasks={tasks} onToggle={toggleTask} />
    </div>
  );
}

export default App;
