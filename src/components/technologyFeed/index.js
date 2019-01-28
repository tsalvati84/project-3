import React, { Component } from 'react';
import Pusher from 'pusher-js';
import pushid from 'pushid';


class TechFeed extends Component {
  state = {
    techItems: [],
  }



  render() {
    const TechItem = (article, id) => (
      <li key={id}><a href={`${article.url}`}>{article.title}</a></li>
    );

    const techItems = this.state.techItems.map(e => TechItem(e, pushid()));

    return (
      <div className="techNews">
        <h1 className="tech">Technology</h1>

        <ul className="tech-items">{techItems}</ul>
      </div>
    );
  }
}

export default TechFeed;