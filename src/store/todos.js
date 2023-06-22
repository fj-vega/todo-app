import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useTodosStore = create(
  devtools(
    persist(
      (set) => ({
        todos: [],
        todosPerPage: 10,
        filterType: "all",
        sortType: "newest",
        addTodo: (todo) =>
          set((state) => ({
            todos: [...state.todos, todo],
          })),
        editTodo: (id, name) =>
          set((state) => ({
            todos: state.todos.map((todo) =>
              todo.id === id ? { ...todo, name } : todo
            ),
          })),
        toggleTodo: (id) =>
          set((state) => ({
            todos: state.todos.map((todo) =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ),
          })),
        deleteTodo: (id) =>
          set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
          })),
        deleteAllTodos: () => set(() => ({ todos: [] })),
        setFilterType: (filterType) => set(() => ({ filterType })),
        setSortType: (sortType) => set(() => ({ sortType })),
        setTodosPerPage: (todosPerPage) => set(() => ({ todosPerPage })),
      }),
      {
        name: "todos-storage",
      }
    )
  )
);

export default useTodosStore;
