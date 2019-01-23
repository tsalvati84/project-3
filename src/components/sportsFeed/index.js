import React from "react";


class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {category: categories[0], content: "First Post"},
        {category: categories[1], content: 'Second Post'}
      ],
      posts: JSON.parse(localStorage.getItem('posts')) || [],
      filteredPosts: []
    }
    this.handleNewPost = this.handleNewPost.bind(this);
  }
  handleNewPost(post) {
    var posts = this.state.posts.concat([post]);
    this.setState({posts: posts});
      posts: this.state.posts.concat([post])
    }

  handleFilter(filter) {
    this.setState({
      filteredPosts: this.state.posts.filter((post) =>
      post.category.toUpperCase() === filter.toUpperCase() ||
      post.content.includes(filter)
    )
    });
  }
  render() {
    const posts = this.state.posts.map((post, index) =>
    <Post key={index} value={post} />
    );
    const filteredPosts = this.state.filteredPosts.map((post, index) =>
    <Post key={index} value={post} />
    );
    return (
      <div className="feed">
      <Filter onFilter={this.handleFilter} />
      {filteredPosts.length > 0 ? filteredPosts : posts}
      <PostForm onSubmit={this.handleNewPost} />
      </div>
    )
  }
}

class Post extends Component {
  render() {
    return (
      <div className="post">
      <span className="label">{this.props.value.category}</span>
      <span>{this.props.content}</span>
      </div>
    )
  }
}