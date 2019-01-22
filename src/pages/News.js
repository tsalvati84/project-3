import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Clock from "../components/Clock";
import Moment from "react-moment";
import Calendar from 'react-calendar/dist/entry.nostyle';


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
              <h1>Weather API</h1>
              
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
