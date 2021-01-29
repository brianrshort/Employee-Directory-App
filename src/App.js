import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./Components/Search";
import Navbar from "./Components/Navbar";
import Empdisplay from "./Components/Empdisplay";
import EastOf from "./Components/EastOf";
import './App.css';

function App() {
  return (
    <Router>
    <div className="container">
      <Navbar />
      <Search />
      <Route exact path="/" component={Empdisplay} />
      <Route exact path="/One-Half" component={EastOf} />
    </div>
    </Router>
  );
}

export default App;
