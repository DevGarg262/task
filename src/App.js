import React from "react";
import "./App.css";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import About from "./components/about"
import Signup from "./components/signup"
// import Setting from "./components/Settings";
// import UserView from "./components/UserView";

// jsx => js
// import MyVerticallyCenteredModal from './components/signup'
// import Smodal from "./components/dashboard"


// render(<App />);




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