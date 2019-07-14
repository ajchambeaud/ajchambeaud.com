import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Test from "./Test";
import Home from "./Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/test/" component={Test} />
    </Router>
  );
}

export default App;
