import { v4 as uuidv4 } from "uuid";

export const createTodo = (name) => {
  return {
    id: uuidv4(),
    name,
    completed: false,
    createdAt: new Date().toISOString(),
  };
};
