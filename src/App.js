import logo from "./logo.svg";
import "./App.css";

import Assignment from "./components/LumelTechAssignment/Assignment";
import { Routes, Route } from "react-router";
import Gemini from "./pages/Gemini";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/gemini" element={<Gemini />}></Route>
        <Route path="/assignment" element={<Assignment />}></Route>
        <Route path="/landingpage" element={<LandingPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
