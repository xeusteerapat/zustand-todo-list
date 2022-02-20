import "./styles.css";
import { useStore } from "./store";
import { useState } from "react";
import User from "./User";

export default function App() {
  const {
    todos,
    addTodo,
    removeTodo,
    toggleComplete,
    filterCompleted
  } = useStore((state) => state);

  const [task, setTask] = useState("");

  const submitTodo = () => {
    addTodo({
      id: crypto.randomUUID(),
      task,
      completed: false
    });

    setTask("");
  };

  return (
    <div className="App">
      <h1>Zustand Todo List</h1>
      <input
        type="text"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <button onClick={() => submitTodo()}>Add</button>
      <button onClick={() => filterCompleted()}>Fitler completed</button>
      <div>
        {!todos.length
          ? null
          : todos.map((todo) => (
              <li key={todo.id}>
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none"
                  }}
                  onClick={() => toggleComplete(todo.id)}
                >
                  {todo.task}{" "}
                </span>
                <button onClick={() => removeTodo(todo.id)}>X</button>{" "}
              </li>
            ))}
      </div>
      <div>
        <User />
      </div>
    </div>
  );
}
