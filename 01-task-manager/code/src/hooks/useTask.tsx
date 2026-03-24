import { useEffect, useState } from "react";
import type { Task } from "../types/types";
import { loadTasks, saveTasks } from "../utils/storage";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // cargar
  useEffect(() => {
    setTasks(loadTasks());
  }, []);

  // guardar
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTasks(prev => [...prev, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const toggleTask = (id: number) => {
    setTasks(prev =>
      prev.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return {
    tasks,
    addTask,
    deleteTask,
    toggleTask,
  };
};
