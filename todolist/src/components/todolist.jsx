/* eslint-disable */
import { useContext } from "react";
import { TodoContext } from "../Context/context";
import Addtodo from "./addtodo";
import { useState } from "react";
import { useMemo } from "react";
const TodoList = () => {
  const [query, setquery] = useState("");
  const [todo, settodo] = useState([
    { id: 1, name: "cabdi" },
    { id: 2, name: "cumar" },
  ]);

  //markan wixi an filter garaynayya object u bdalay error
  //ba igu imaday oo ah item.tolowercase() sbbto ah
  /* item.toLowerCase is not a function,"
   occurs because you're trying to call 
   the toLowerCase() method on an object 
   instead of a string 
   o resolve this, you need to access the
    name property of the item object
    before applying the toLowerCase() 
   */
  //use memeo runs markii parameter
  //garah ay is badalan
  /* if (!query) {
    return todo;
  } */

  const filtertodo = useMemo(() => {
    return todo.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });
  }, [todo, query]);

  const handleDeleteTodo = (todoId) => {
    let filtredOne = todo.filter((item) => item.id !== todoId);
    settodo(filtredOne);
  };

  return (
    <div className="todolist">
      <Addtodo
        query={query}
        setquery={setquery}
        todo={todo}
        settodo={settodo}
      />
      <div className="added">
        <h3>Added Items</h3>
        {filtertodo.map((todo) => (
          <>
            {`${todo.id}: `}
            {todo.name}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
