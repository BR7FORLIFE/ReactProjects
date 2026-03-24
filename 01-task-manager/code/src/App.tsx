import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useTasks } from "./hooks/useTask";

function App() {
  const { tasks, addTask, deleteTask, toggleTask } = useTasks();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Task Manager
        </h1>

        <TaskForm onAddTask={addTask} />
        <TaskList
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleTask}
        />
      </div>
    </div>
  );
}

export default App;
