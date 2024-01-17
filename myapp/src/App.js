import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar title="WordWand" />
      <div className="container">
        <TextForm heading="Enter Your Text to Analyze" />
      </div>
    </Router>
  );
}

export default App;
