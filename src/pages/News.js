import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import Clock from "../components/Clock";
import Moment from "react-moment";
import Calendar from 'react-calendar';
import Titles from "../components/Titles";
import Form from "../components/Form";
import Weather from "../components/Weather";

const  Api_Key = "ede664f6620d9bc9b168f4a7378a2778";

class News extends Component {

  state = {
    
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  
  getWeather = async (e) => {

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();   
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
    const response = await api_call.json();
    console.log(response);
    if(city && country){
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      })
    }else{
      this.setState({
        error: "Please input search values..."
      })
    }
  }
  render() {
    return (
      <Container fluid>
        <Row>
        <Col size="md-4">
            <Jumbotron>
              
            <h3>Sports</h3>
           
            </Jumbotron>
          </Col>

          <Col size="md-4">
            <Jumbotron>
              <Clock></Clock>
              
            <Calendar></Calendar>
            </Jumbotron>
          </Col>
          
          <Col size="md-4">
          
            <Jumbotron>
            <div>
         <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                <Titles />
                </div>
                <div className="col-xs-7 form-container">
                <Form loadWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
            </Jumbotron>
           
          </Col>
        </Row>
        
        <Row>
          
          
          <Col size="md-12">
          <Jumbotron>
              
          
        <h1>Articles</h1>
        <hr></hr>
        
         
            </Jumbotron>
            </Col>
          </Row>
      </Container>
    );
  }
}

export default News;




