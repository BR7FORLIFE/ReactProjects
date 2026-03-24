import { useState } from "react";

type Props = {
  onAddTask: (title: string) => void;
};

function TaskForm({ onAddTask }: Props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input.trim()) return;

    onAddTask(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Nueva tarea..."
        className="flex-1 border rounded-lg px-3 py-2"
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default TaskForm;
