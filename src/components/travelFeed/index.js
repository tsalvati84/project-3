import React, { Component } from 'react';
import Pusher from 'pusher-js';
import pushid from 'pushid';


class TravelFeed extends Component {
  state = {
    travelItems: [],
  }



  render() {
    const TravelItem = (article, id) => (
      <li key={id}><a href={`${article.url}`}>{article.title}</a></li>
    );

    const travelItems = this.state.travelItems.map(e => TravelItem(e, pushid()));

    return (
      <div className="travelNews">
        <h1 className="travel">Travel</h1>

        <ul className="tech-items">{travelItems}</ul>
      </div>
    );
  }
}

export default TravelFeed;