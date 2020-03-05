import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Academic from "./components/Academic";
import Progress from "./components/Progress";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/academic" component={Progress} />
        <Route exact path="/projects" component={Progress} />
        <Route exact path="/blog" component={Progress} />
        <Route exact path="/home" component={Main} />
      </div>
    </Router>
  );
}
export default App;
