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
    console.log(this.props)
    const {limit, total} = this.props
    console.log(this.props.posts)
    const links = [];
    this.props.posts[0].map((post, index) => (
      links.push(
        <MDBPageItem key={post.id}>
         {index + 1}
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
    const {offset} = this.props
    console.log(offset);
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

const mapStateToProps = state => {
  return {
    posts: Object.values(state.post)
  }
}

export default connect(mapStateToProps, {getPosts})(Post);