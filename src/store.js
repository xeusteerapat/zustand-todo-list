import create from "zustand";

export const useStore = create((set, get) => ({
  todos: [
    {
      id: crypto.randomUUID(),
      task: "First one",
      completed: false
    },
    {
      id: crypto.randomUUID(),
      task: "Second one",
      completed: false
    },
    {
      id: crypto.randomUUID(),
      task: "Third one",
      completed: false
    }
  ],
  users: [],
  addTodo: (newTask) => set((state) => state.todos.push(newTask)),
  removeTodo: (id) =>
    set((state) => {
      return {
        todos: state.todos.filter((todo) => todo.id !== id)
      };
    }),
  toggleComplete: (id) =>
    set((state) => {
      return {
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      };
    }),
  filterCompleted: () =>
    set((state) => {
      return {
        todos: state.todos.filter((todo) => todo.completed)
      };
    }),
  fetchUsers: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    set({ users });
  }
}));
