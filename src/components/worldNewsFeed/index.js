import React, { Component } from 'react';
import Pusher from 'pusher-js';
import pushid from 'pushid';


class WorldNewsFeed extends Component {
  state = {
    worldNewsItems: [],
  }



  render() {
    const WorldNewsItem = (article, id) => (
      <li key={id}><a href={`${article.url}`}>{article.title}</a></li>
    );

    const worldNewsItems = this.state.worldNewsItems.map(e => WorldNewsItem(e, pushid()));

    return (
      <div className="WorldNews">
        <h1 className="worldNews">World News</h1>

        <ul className="worldNews-items">{worldNewsItems}</ul>
      </div>
    );
  }
}

export default WorldNewsFeed;