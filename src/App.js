import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/about"
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
          <Header />
          <About />
          
      </Router>
    </React.Fragment>
  );
}

export default App;
