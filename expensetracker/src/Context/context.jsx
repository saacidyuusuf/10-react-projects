import { useReducer, createContext } from "react";
import Reducer from "./reducer";


const intialState = [
  { id: 1, text: "basto", price: -50 },
  { id: 2, text: "bariis", price: 120 },
  { id: 3, text: "yanyo", price: 300 },
  { id: 4, text: "soor", price: -30 },
];

export const GlobalContext = createContext(intialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, intialState);

  const remove = (id) => {
    dispatch({
      type: "remove",
      payload: id,
    });
  };
  
  const add = (item) =>{
    dispatch({
      type: "add",
      payload: item,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        state,
        remove,
        add
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
