import React, {Component} from 'react';
import Proptypes from 'prop-types';
import {connect} from 'react-redux';
import {getPosts} from '../actions/postActions'
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow } from "mdbreact";

class Post extends Component {

  constructor() {
    super()
    this.renderPagination = this.renderPagination.bind(this);
  }

  componentWillMount() {
    this.props.getPosts();
  }

  renderPagination = () => {
    const {limit, total} = this.props
    const pages = total / limit
    const links = [];
    console.log(pages);
    for(var i = 1; i < pages; i++ ) {
      links.push(
        <MDBPageItem key={i}>
          <MDBPageNav>{i}</MDBPageNav>
        </MDBPageItem>
      )
    }
    return links;
  }

  render() {
    console.log(this.props.posts)
    {if(this.props.posts.length > 1) {console.log("hello")}}
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
            <MDBPagination className="mb-5" size="lg">
              <MDBPageItem>
                <MDBPageNav aria-label="Previous">
                  <span aria-hidden="true">Previous</span>
                </MDBPageNav>
              </MDBPageItem>
              {this.renderPagination()}
              {/* <MDBPageItem>
                <MDBPageNav href="explore/1">
                  1
                </MDBPageNav>
              </MDBPageItem>

              <MDBPageItem>
                <MDBPageNav>3</MDBPageNav>
              </MDBPageItem> */}
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
  ...state.post
})

export default connect(mapStateToProps, {getPosts})(Post);