import { useRef, useState, useContext } from "react";
import { GlobalContext } from "../Context/context";

const AddHistory = () => {
  const { state ,add} = useContext(GlobalContext);

  const textInputref = useRef();
  const priceInputref = useRef();

  const handlesubmit = (e) => {
    e.preventDefault();
    const textValue = textInputref.current.value;
    const priceValue = parseFloat(priceInputref.current.value);

    if (!textValue || !priceValue || isNaN(priceValue)) return;
    const newId = state.length + 1;
    const newItem = { id: newId, text: textValue, price: priceValue };

    add(newItem);

    textInputref.current.value = "";
    priceInputref.current.value = "";
  };

  return (
    <div className="add">
      <h1>Add</h1>
      <form action="" onSubmit={handlesubmit}>
        <label htmlFor=""> Add History</label>
        <input type="text" className="text" placeholder="add" ref={textInputref} /><br />
        <label htmlFor="">Add Price</label>
        <input type='number' className="num"  placeholder="add" ref={priceInputref} /><br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddHistory;
