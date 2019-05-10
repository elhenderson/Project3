import React, {Component} from 'react';
import Proptypes from 'prop-types';
import {connect} from 'react-redux';
import {getPosts} from '../actions/postActions'
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow } from "mdbreact";

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
        <MDBRow>
          <MDBCol>
            <MDBPagination className="mb-5">
              <MDBPageItem>
                <MDBPageNav aria-label="Previous">
                  <span aria-hidden="true">Previous</span>
                </MDBPageNav>
              </MDBPageItem>
              <MDBPageItem>
                <MDBPageNav href="explore/1">
                  1
                </MDBPageNav>
              </MDBPageItem>
              <MDBPageItem>
                <MDBPageNav>2</MDBPageNav>
              </MDBPageItem>
              <MDBPageItem>
                <MDBPageNav>3</MDBPageNav>
              </MDBPageItem>
              <MDBPageItem>
                <MDBPageNav aria-label="Previous">
                  <span aria-hidden="true">Next</span>
                </MDBPageNav>
              </MDBPageItem>
            </MDBPagination>
          </MDBCol>
        </MDBRow>
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