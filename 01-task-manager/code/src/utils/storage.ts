import type { Task } from "../types/types";

const KEY = "tasks";

export const loadTasks = (): Task[] => {
  const data = localStorage.getItem(KEY);
  if (!data) return [];

  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
};

export const saveTasks = (tasks: Task[]) => {
  localStorage.setItem(KEY, JSON.stringify(tasks));
};
