import "./App.css";
import Nav from "./Components/Nav";
import Wiki from "./Components/wiki";
import { Route, Routes } from "react-router-dom";
import Value from "./Components/Value";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/Value"element={<Value/>} />
        <Route path="/" element={<Wiki/>} />
      </Routes>
    </>
  );
}

export default App;
