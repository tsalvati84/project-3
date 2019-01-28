import React, { Component } from 'react';
import Pusher from 'pusher-js';
import pushid from 'pushid';


class SportsFeed extends Component {
  state = {
    sportsItems: [],
  }
  componentDidMount() {
    fetch('http://localhost:3000/News')
      .then(response => response.json())
      .then(articles => {
        this.setState({
          newsItems: [...this.state.newsItems, ...articles],
        });
      }).catch(error => console.log(error));

    const pusher = new Pusher('a9d6d17170fc662e48eb', {
      cluster: 'us2',
      encrypted: true,
    });

    const channel = pusher.subscribe('news-channel');
    channel.bind('update-news', data => {
      this.setState({
        sportsItems: [...data.articles, ...this.state.sportsItems],
      });
    });
  }


  render() {
    const NewsItem = (article, id) => (
      <li key={id}><a href={`${article.url}`}>{article.title}</a></li>
    );

    const sportsItems = this.state.sportsItems.map(e => sportsItems(e, pushid()));

    return (
      <div className="sportsNews">
        <h1 className="sports">Sports</h1>

        <ul className="sports-items">{sportsItems}</ul>
      </div>
    );
  }
}

export default SportsFeed;