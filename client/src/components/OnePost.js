import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { getOnePost } from '../actions/postActions'
import { MDBContainer, MDBCol, MDBRow, MDBIcon, MDBBtn } from "mdbreact"
import Images from '../components/Images'

class OnePost extends Component {
    componentWillMount() {
        this.props.getOnePost(this.props.onepostid);
    }
    render() {
        return (
            <MDBContainer className="my-3">

                <h3>{this.props.onePost.title}</h3>
                <div>
                    <p className="mb-1 grey-text"><MDBIcon icon="map-marker-alt" /> {this.props.onePost.location}</p>
                </div>

                <span className="block-example border border-info px-0 py-1">
                    <MDBIcon icon="angle-up" className="px-2" />
                </span>
                <span className="block-example border-top border-bottom border-info px-3 py-1">
                    3
                </span>
                <span className="block-example border border-info px-0 py-1">
                    <MDBIcon icon="angle-down" className="px-2" />
                </span>
                <MDBBtn color="cyan" size="sm" className="z-depth-0">
                    <MDBIcon icon="edit" /> Edit
                </MDBBtn>
                <MDBBtn color="yellow" size="sm" className="z-depth-0">
                    <MDBIcon icon="times" /> Delete
                </MDBBtn>

                <Images imgurls={this.props.onePost.photo} imgUploading={null}></Images>

                <p>{this.props.onePost.notes}</p>
            </MDBContainer>
        );
    }
}

OnePost.propTypes = {
    getOnePost: Proptypes.func.isRequired,
    onePost: Proptypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
    // console.log("mapStateToProps")
    // console.log(state);
    return {
        onePost: state.post.onePost
    }
}

// export default connect(mapStateToProps)(App)
export default connect(mapStateToProps, { getOnePost })(OnePost);
// export default PostOne;
