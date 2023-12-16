/* eslint-disable */
import {  useRef } from "react";

const Addtodo = ({ todo, settodo, setquery, query }) => {
  const inputref = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputref.current.value;
    if (value === "") return;

   const newItem = {
      id: todo.length + 1,
      name: value
    };

    settodo((prev) => {
      return [...prev, newItem];
    });
    inputref.current.value = "";
  };
  
  return (
    <>
      <div className="inputhaye">
        <label htmlFor="">Search Item</label>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setquery(e.target.value)}
          value={query}/>

        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">Add Item</label>
          <input type="text" placeholder="add todo" ref={inputref} />
          <button>Add Todo</button>
        </form> 
      </div>
    </>
  );
};

export default Addtodo;
