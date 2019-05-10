import React, {Component} from 'react';
import Proptypes from 'prop-types';
import {connect} from 'react-redux';
import {getPosts} from '../actions/postActions'

class Post extends Component {

  componentWillMount() {
    this.props.getPosts();
  }

  render() {
    const postsList = this.props.posts.map(post => (
      <div key={post.id}>
        <br/>
        <h2>{post.title}</h2>
        <p>{post.location}</p>
        <img src={`data:image/jpeg;base64, ${post.photo}`} width="250" height="250"/>  
      </div>
    ))
    return(
      <div>
        <h1>Posts</h1>
        {postsList}
      </div>
    )
  }
}

Post.propTypes = {
  getPosts: Proptypes.func.isRequired,
  posts: Proptypes.array.isRequired
}

const mapStateToProps = state => ({
  posts: state.post.posts
})

export default connect(mapStateToProps, {getPosts})(Post);