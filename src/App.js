import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import News from "./pages/News";
import Nav from "./components/Nav";
import Authenticator from "./pages/Authenticator";
import Wrapper from "./components/Wrapper";



class App extends React.Component {
render(){
 return (
    
    <Wrapper>
    <Router>
    <div>
    <Nav />
    
      <Route exact path="/" component={Authenticator} />
      <Route exact path="/SignIn" component={Authenticator} />
      <Route exact path="/News" component={News} />
      
      
    </div>
    
  </Router>
  </Wrapper>

  )
 
  }

}
 

export default App;

