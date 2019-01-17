import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import SignIn from "./pages/SignIn.js";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={SignIn} />
        <Route exact path="/SignIn" component={SignIn} />
        <Route exact path="/Books" component={Books} />
        <Route exact path="/Nav" component={Nav} />

      </div>
    </Router>
  );
}

export default App;
