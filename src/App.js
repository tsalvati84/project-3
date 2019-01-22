import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import News from "./pages/News";
import Nav from "./components/Nav";
import Authenticator from "./pages/Authenticator";


function App() {
  return (
    <Router>
      <div>
      <Nav />
        <Route exact path="/" component={Authenticator} />
        <Route exact path="/SignIn" component={Authenticator} />
        <Route exact path="/News" component={News} />
        <Route exact path="/Nav" component={Nav} />

      </div>
    </Router>
  );
}

export default App;
