import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../actions/postActions'
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow } from "mdbreact";

class Post extends Component {


  constructor() {
    super()
    this.renderPagination = this.renderPagination.bind(this);
    this.renderPostGroup = this.renderPostGroup.bind(this);
    // this.changePageNum = this.changePageNum.bind(this);
  }

  componentWillMount() {
    this.props.getPosts(2);
    this.renderPostGroup();
  }
  
  // changePageNum = (newPage) => {
  //   this.props.pageNum = 1
  // }

  renderPostGroup = () => {
    const {postArray} = this.props;
    const limit = 5;
    const offset = 5;

    const postsList = postArray.slice(offset, offset + limit).map((post, index) => {
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
    return postsList
  }

  renderPagination = () => {
    console.log(this.props)
    const { total, postArray } = this.props
    console.log(total)
    const links = [];
    const limit = 5;
    // for(var i = 0; i < pages; i++ ) {
    //   links.push(
    //     <MDBPageItem key={i}>
    //       <MDBPageNav>{i + 1}</MDBPageNav>
    //     </MDBPageItem>
    const pages = Math.ceil(total / limit)
    postArray.slice(0, pages).map((post, index) => (
      links.push(
        <MDBPageItem key={post.id}>
          <MDBPageNav href={`explore/${index+1}`}>{index + 1}</MDBPageNav>
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
    const {total, postArray, allPosts} = this.props
    // var postsList = [];
     const limit = 5 //eventually determined by dropdown menu
    let offset = 0; //Will be limit * the value of the button that is clicked
    console.log(postArray);
    // for (let i = 0; i < postArray; i++ ) {
    //   console.log(postArray[i])
    //   postsList.push(postArray[i])
    //   return (
    //     <div key={[i].id}>
    //       <br />
    //       <h2>{[i].title}</h2>
    //       <p>{[i].location}</p>
    //       <img src={`data:image/jpeg;base64, ${[i].photo}`} width="250" height="250" />
    //     </div>
    //   )
    // }
    const postsList = postArray.slice(offset, offset + limit).map((post, index) => {
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
  const { limit, offset, total, postArray, allPosts, pageNum = 1 } = state.post;
  return {
    limit,
    offset,
    total,
    postArray,
    allPosts,
    pageNum
  }
  // return {
  //   posts: Object.values(state.post)
  // }
}

export default connect(mapStateToProps, { getPosts })(Post);