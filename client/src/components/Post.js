import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../actions/postActions'
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
    console.log(this.props)
    const { limit, totalk, postArray } = this.props
    console.log(this.props.posts)
    const links = [];
    postArray.map((post, index) => (
      links.push(
        <MDBPageItem key={post.id}>
          <MDBPageNav>{index + 1}</MDBPageNav>
        </MDBPageItem>
      )
    ))
    console.log(links);
    return links;
    // const pages = Math.ceil(total / limit)

    // console.log(pages);

    // const pageGenerator = 
    // for(var i = 0; i < pages; i++ ) {
    //   links.push(
    //     <MDBPageItem key={i}>
    //       <MDBPageNav>{i + 1}</MDBPageNav>
    //     </MDBPageItem>
    //   )
    // }
    // return links;
  }

  render() {
    const {limit, total, postArray, postsWithIds} = this.props
    // console.log(postsWithIds);
    // var postsList = [];
    // const offset = 5;
    // console.log(postArray);
    // for (let i = 0; i < postArray; i++ ) {
    //   postsList.push(postArray)
    //   console.log(postsList)
    // }
    // console.log(postsList);
    const postsList = postArray.map((post, index) => {
      console.log(index)
      return (
        <div key={post.id}>
          <br />
          <h2>{post.title}</h2>
          <p>{post.location}</p>
          <img src={`data:image/jpeg;base64, ${post.photo}`} width="250" height="250" />
        </div>
      )

    })
    return (
      <div>
        <h1>Posts</h1>
        {postsList}
        <MDBRow>
          <MDBCol>
            <MDBPagination className="mb-5" size="lg">
              <MDBPageItem>
              </MDBPageItem>



              {this.renderPagination()}
              <MDBPageItem>
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

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  const { limit, offset, total, postArray, postsWithIds } = state.post;
  return {
    limit,
    offset,
    total,
    postArray,
    postsWithIds
  }
  // return {
  //   posts: Object.values(state.post)
  // }
}

export default connect(mapStateToProps, { getPosts })(Post);