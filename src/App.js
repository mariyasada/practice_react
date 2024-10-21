import logo from "./logo.svg";
import "./App.css";

import Assignment from "./components/LumelTechAssignment/Assignment";
import { Routes, Route } from "react-router";
import Gemini from "./pages/Gemini";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/gemini" element={<Gemini />}></Route>
        <Route path="/assignment" element={<Assignment />}></Route>
      </Routes>
    </div>
  );
}

export default App;
