import { useContext } from "react";
import { GlobalContext } from "../Context/context";

const History = () => {
  const { state, remove } = useContext(GlobalContext);

 /*  if (!state) {
    // Display a loading state or return null
    return <div>Loading...</div>;
  }
 */
  return (
    <div className="history">
      <h2>History</h2>
      {state.map((item) => (
        <>
          <div className="tran" key={item.id}>
            <p>{item.text}</p>
            <h5>{item.price}</h5>
            <button onClick={() => remove(item.id)}>delete</button>
          </div>
        </>
      ))}
    </div>
  );
};

export default History;
