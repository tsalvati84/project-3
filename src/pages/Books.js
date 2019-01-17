import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";


class News extends Component {
  


  render() {
    return (
      <Container fluid>
        <Row>
        <Col size="md-4">
            <Jumbotron>
              <h1>Sports API</h1>
            
            </Jumbotron>
          </Col>

          <Col size="md-4">
            <Jumbotron>
              <h1>Google Maps API</h1>
            
            </Jumbotron>
          </Col>
          
          <Col size="md-4">
            <Jumbotron>
              <h1>Weather API</h1>
              
            </Jumbotron>
           
          </Col>
        </Row>
        <Row>
          
          
          <Col size="md-12">
          <Jumbotron>
              
              <h3>News Articles</h3>
            </Jumbotron>
            </Col>
          </Row>
      </Container>
    );
  }
}

export default News;
