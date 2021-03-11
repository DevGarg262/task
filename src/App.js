import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/about"

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
