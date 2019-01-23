import React, { Component } from "react";

import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import Clock from "../components/Clock";
import Moment from "react-moment";
import Calendar from 'react-calendar/dist/entry.nostyle';
import Titles from "../components/Titles";
import Form from "../components/Form";
import Weather from "../components/Weather";

class News extends Component {
 
 

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
            <div>
         <Titles />
         <Form loadWeather={this.getWeather} />
         <Weather />
       </div>  
      </div>
            </Jumbotron>
           
          </Col>
        </Row>
        <Row>
          
          
          <Col size="md-12">
          <Jumbotron>
              
          
        <h1>Articles</h1>
        
         
            </Jumbotron>
            </Col>
          </Row>
      </Container>
    );
  }
}

export default News;
