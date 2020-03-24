import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Academic from "./components/Academic";
import Progress from "./components/Progress";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/academic" component={Academic} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/blog" component={Progress} />
        <Route exact path="/portfolio" component={Main} />
      </div>
    </Router>
  );
}
export default App;
