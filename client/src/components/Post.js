import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../actions/postActions'
import JwPagination from 'jw-react-pagination'


class Post extends Component {


  constructor(props) {
    super(props)
    this.onChangePage = this.onChangePage.bind(this);
    this.state = {
      pageOfItems: []
    };
  }

  componentWillMount() {
    this.props.getPosts();
  }

  onChangePage(pageOfItems) {
    this.setState({pageOfItems});
  }


  render() {
    window.scrollTo(0,0)
    const {postArray} = this.props
    
    const postsList = this.state.pageOfItems.map((post, index) => {
      return (
        <div key={post.id}>
          <br />
          <h2>{post.title}</h2>
          <p>{post.location}</p>
          <img src={`${post.photo[0]}`} width="250" height="250" />        
        </div>
      )

    })
    return (
      <div>
        <h1>Posts</h1>
        <JwPagination items={postArray} onChangePage={this.onChangePage}/>
        {postsList}
        {this.props.postArray.map(item => <div key={item.id}>{item.name}</div>)}
        <JwPagination items={postArray} onChangePage={this.onChangePage}/>
      </div>
    )
  }
}

Post.propTypes = {
  getPosts: Proptypes.func.isRequired,
  posts: Proptypes.array.isRequired
}

const mapStateToProps = (state) => {
  const {postArray} = state.post;
  return {
    postArray
  }
}

export default connect(mapStateToProps, { getPosts })(Post);