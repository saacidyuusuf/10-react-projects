import { useContext } from "react";
import { GlobalContext } from "../Context/context";

const balance = () => {
  const { state } = useContext(GlobalContext);

/*   if (!state) {
    // Display a loading state or return null
    return <div>Loading...</div>;
  } */

  const price = state.map((p) => {
    return p.price;
  });
  const addprice = price.reduce((a, b) => {
    a = a + b;
    return a
  }, 0).toFixed(2);

  let income = price
    .filter((item) => item > 0)
    .reduce((a, b) => (a = a + b), 0)
    .toFixed(2);

  const expense = (
    price
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc = acc + item), 0) * -1
  ).toFixed(2);

  return (
    <div className="balance">
      <h1>Balance</h1>
      <h2>${addprice}</h2>
      <div className="haye">
        <div className="income">
          <p>${income}</p>
        </div>
        <div className="expense">
          <p>${expense}</p>
        </div>
      </div>
    </div>
  );
};

export default balance;
