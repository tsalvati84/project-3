import React, { Component } from 'react';
import Pusher from 'pusher-js';
import pushid from 'pushid';


class FoodFeed extends Component {
  state = {
    foodItems: [],
  }



  render() {
    const FoodItem = (article, id) => (
      <li key={id}><a href={`${article.url}`}>{article.title}</a></li>
    );

    const foodItems = this.state.foodItems.map(e => FoodItem(e, pushid()));

    return (
      <div className="foodNews">
        <h1 className="App-title">Food</h1>

        <ul className="food-items">{foodItems}</ul>
      </div>
    );
  }
}

export default FoodFeed;