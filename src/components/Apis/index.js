import React from 'react';

import Title from "./Title";
import Form from "./Form"
import Weather from "./Weather"

const  API_KEY = "bfbfc09af450b7a68ea5758dffc070b2";

class Apis extends React.Component {

    state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined,
    }

    ///https://api.openweathermap.org/data/2.5/weather?q=manchester,uk&units=imperial&appid=bfbfc09af450b7a68ea5758dffc070b2
   /// http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&apiid=${API_KEY}&units=metric
   /// https://api.openweathermap.org/data/2.5/weather?zip=85201,us&units=imperial&appid=bfbfc09af450b7a68ea5758dffc070b2

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${API_KEY}`);
    const data = await api_call.json();
    
    if (city && country) {
      console.log(data);
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
      
    });
    } else {
      this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: "Please enter the value"
    });
    }
  }
  render() {
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather}/>
        <Weather 
        temperature={this.state.temperature} 
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}
        />
      </div>
    );
  }
};

export default Apis;