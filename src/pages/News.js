import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import Clock from "../components/Clock";
import Calendar from 'react-calendar';
import Titles from "../components/Titles";
import Form from "../components/Form";
import Weather from "../components/Weather";
import moment from "moment";
import { Carousel } from 'react-bootstrap';
import Jumbotron2 from "../components/Jumbotron2";



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
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${Api_Key}`);
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
            
           

             
              
           
            </Jumbotron>

          </Col>

          <Col size="md-4">
            <Jumbotron>
            <Clock
      style={{fontSize: '1.5em'}}
      format={'h:mm:ssa'}
      ticking={true} />
              
              <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          date={moment("01/25/2019", "MM/DD/YYYY")}
          
        />
      </div>
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
                <br></br>
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
        <br></br>
            </Jumbotron>
           
          </Col>
        </Row>
        <Jumbotron2>
          Articles
         
       </Jumbotron2>
       
      </Container>
    );
  }
}

export default News;




