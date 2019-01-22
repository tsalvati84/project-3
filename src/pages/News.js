import React, { Component } from "react";

import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import Clock from "../components/Clock";
import Moment from "react-moment";
import Calendar from 'react-calendar/dist/entry.nostyle';
import GenericWeather from "../components/Weather";

class News extends Component {
  
  


  render() {
    return (
      <Container fluid>
        <Row>
        

          <Col size="md-6">
            <Jumbotron>
              
              <Clock>

              </Clock>
            <Calendar>

            </Calendar>
            </Jumbotron>
          </Col>
          
          <Col size="md-6">
            <Jumbotron>
              <GenericWeather></GenericWeather>
              
            </Jumbotron>
           
          </Col>
        </Row>
        <Row>
          
          
          <Col size="md-12">
          <Jumbotron>
              
          
        
        
         
            </Jumbotron>
            </Col>
          </Row>
      </Container>
    );
  }
}

export default News;
