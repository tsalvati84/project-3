import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Clock from "../components/Clock";
import Moment from "react-moment";
import Apis from "../components/Apis";

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
              
              <Clock>

              </Clock>
            
            </Jumbotron>
          </Col>
          
          <Col size="md-4">
            <Jumbotron>
            <Apis></Apis>
              
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
