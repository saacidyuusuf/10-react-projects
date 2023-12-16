import AddHistory from "./Components/AddHistory";
import History from "./Components/History";
import Balance from "./Components/balance";
import { ContextProvider } from "./Context/context";

function App() {
  return (
    <>
      <div className="bighaye">
        <ContextProvider>
          <Balance />
          <History />
          <AddHistory/>
        </ContextProvider>
      </div>
    </>
  );
}

export default App;
