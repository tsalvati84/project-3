import React, { Component } from 'react';
import Calendar from 'react-calendar';

export default class MyApp extends Component {
  state = {
    date: new Date(),
    selectedDate:moment(),
  }
 
  onChange = activeStartDate => this.setState({ activeStartDate })
 
  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          
        }
        />
      </div>
    );
  }