/* eslint-disable */
import { createContext,  useReducer } from "react";
import Reducer from "./Reducer";

const initialstate = [
  { id: 1, title: "one todo" },
  { id: 2, title: "two todo" },
];

export const TodoContext = createContext(initialstate);

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(Reducer, initialstate);

  const addTodo = (newTodo) => {
    dispatch({ type: "add", payload: newTodo });
  };

 

  return (
    <TodoContext.Provider
     value={{ todos, 
      addTodo,
       }}>
      {children}
    </TodoContext.Provider>
  );
};
