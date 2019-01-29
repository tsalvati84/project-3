import React, { Component } from 'react';
import moment from 'moment';



const Title = () => (
	<h3>Entertainment</h3>
);

const ArticlesListItem = ({ article }) => (
	<article>
		<h3>{article.title}</h3>
		
		<p><a href={article.url}>Link</a></p>
	</article>
)
const article= 1;
const ArticlesList = ({ articles }) => (
	<section>
		{articles.slice(0,4).map((article, index) => (
			<ArticlesListItem article={article} key={index} />
		))}
	</section>
);

class FoodFeed extends React.Component {
	constructor() {
		super();
		
		this.state = {
			articles: [],
		};
	}
	
	componentDidMount() {		
		fetch('https://newsapi.org/v1/articles?source=entertainment-weekly&sortBy=latest&apiKey=8f135b713f1a4487b7bbb9de394a1308')
			.then(response => response.json())
			.then((response) => {
				this.setState({ articles: response.articles });
			});		
	}
	
	render() {
		return (
            
                
			<div>
                

				<Title />
				<ArticlesList articles={this.state.articles} />
			</div>
            
            
		);
	}
}

export default FoodFeed;