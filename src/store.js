import create from "zustand";

export const useTodoStore = create((set, get) => ({
  todos: [],
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
    })
}));
