import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../actions/postActions'
import JwPagination from 'jw-react-pagination'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';


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
        // <div key={index}>
        /* <MDBCol className="col-md-6"> */
          <MDBCard key={index} style={{ width: "22rem", maxWidth: "95%" }} className="mb-2 mb-4 mr-4 p-2 col-lg-4 col-md-3 col-sm-12">
            <MDBCardBody>
              <MDBCardTitle>
                <a href={"/explore/" + post.id}> {post.title} </a>
              </MDBCardTitle>
              <MDBCardText> {post.location} </MDBCardText>
            </MDBCardBody>
            <MDBCardImage className="img-fluid" src={post.photo[0]} waves />
          </MDBCard>
        /* </MDBCol> */
        // </div>
      )

    })
    return (
      <MDBContainer>
        <h2 className="my-4 text-center font-weight-bold" style={{ color: "#0097a7" }}>Explore</h2>
        <MDBContainer className="d-flex flex-wrap bd-highlight example-parent">
          {postsList}

        </MDBContainer>
        {this.props.postArray.map(item => <div key={item.id}>{item.name}</div>)}
        <JwPagination items={postArray} onChangePage={this.onChangePage}/>
      </MDBContainer>
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