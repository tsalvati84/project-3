import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import News from "./pages/News";
import Nav from "./components/Nav";
import Authenticator from "./pages/Authenticator";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Wrapper from "./components/Wrapper";

const  Api_Key = "ede664f6620d9bc9b168f4a7378a2778";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  
getWeather = async (e) => {
  e.preventDefault();
  const city = e.target.elements.city.value;
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=${Api_Key}`);
  const response = await api_call.json();

  this.setState({
    temperature: response.main.temp,
    city: response.name,
    humidity: response.main.humidity,
    description: response.weather[0].description,
    error: ""
  })
}
  

render(){
  
  return (
    <Router>
    <div>
    <Nav />
    <Wrapper>
      <Route exact path="/" component={Authenticator} />
      <Route exact path="/SignIn" component={Authenticator} />
      <Route exact path="/News" component={News} />
      <Route exact path="/Nav" component={Nav} />
      </Wrapper>
    </div>
    
  </Router>
    )
 
  }

}
 

export default App;

