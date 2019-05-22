import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { getOnePost, deletePost, editPost } from '../actions/postActions'
import { MDBContainer, MDBCol, MDBRow, MDBIcon, MDBBtn, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter } from "mdbreact"
import Images from '../components/Images'
import LeafletMap from '../components/LeafletMap'

class OnePost extends Component {
    constructor(props) {
        super(props)
        this.toggleModal = this.toggleModal.bind(this);

        this.state = {
            modalIsOpen: false,
            submitSuccess: true,
            editModalIsOpen: false
        }
    }
    componentWillMount() {
        this.props.getOnePost(this.props.onepostid);
    }

    submitHandler = event => {
        event.preventDefault();
        const data = {
            title: this.state.title,
            location: this.state.location.address,
            pluscode: this.state.location.pluscode,
            rating: this.state.rating,
            photo: this.state.imgurls,
            notes: this.state.notes,
        }
        console.log("submitHandler submitting data: ");
        console.log(data)
        fetch('/api/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log("submit returns:");
            console.log(data);
            if (data.success) {
                this.setState({
                    submitSuccess: true
                });
            } else {
                this.setState({
                    submitSuccess: false
                });
            }
            this.toggleModal();
        })
    }

    toggleModal = () => {
        this.props.deletePost(this.props.onepostid)
        this.setState({
            modalIsOpen: !this.state.modalIsOpen,
        });
    }

    toggleEditModal = () => {
        this.setState({
            editModalIsOpen: !this.state.editModalIsOpen
        })
    }

    render() {
        return (
            <MDBContainer className="my-3">

                <h3>{this.props.onePost.title}</h3>
                <div>
                    <p className="mb-1 grey-text"><MDBIcon icon="map-marker-alt" /> {this.props.onePost.location}</p>
                </div>

                <span className="block-example border border-info px-0 py-1">
                    <MDBIcon icon="angle-down" className="px-2" />
                </span>
                <span className="block-example border-top border-bottom border-info px-3 py-1">
                    {this.props.onePost.rating}
                </span>
                <span className="block-example border border-info px-0 py-1">
                    <MDBIcon icon="angle-up" className="px-2" />
                </span>
                {/* <MDBBtn color="cyan" size="sm" className="z-depth-0" onClick={() => this.toggleEditModal()}>
                    <MDBIcon icon="edit" /> Edit
                </MDBBtn> */}
                <MDBBtn color="yellow" size="sm" className="z-depth-0" onClick={() => this.toggleModal()}>
                    <MDBIcon icon="times" /> Delete
                </MDBBtn>

                <Images imgurls={this.props.onePost.photo} imgUploading={null}></Images>

                <MDBContainer className="cyan lighten-5">
                    <span className="font-weight-bold" >Notes</span>
                    <p>{this.props.onePost.notes}</p>
                </MDBContainer>

                <LeafletMap></LeafletMap>

                <MDBModal isOpen={this.state.modalIsOpen} toggle={this.toggleModal} size="md">
                    <MDBModalHeader className="cyan text-white" toggle={this.toggleModal}  data-backdrop="false"> Thank You! </MDBModalHeader>
                    <MDBModalBody className="text-center">
                        {this.state.submitSuccess ? 
                            <img alt="thank-you" width="90%" src="https://i.pinimg.com/originals/bf/e2/d8/bfe2d8aff690b4b94c035aa357e865d6.jpg"></img>
                            : 
                            <img alt="submission-fail" width="90%" src="https://content.spiceworksstatic.com/service.community/p/post_images/0000275711/59e5cc26/attached_image/Screen_Shot_2017-10-17_at_10.20.43.png"></img>
                            }
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="cyan" href="/" >Home</MDBBtn>
                        <MDBBtn color="cyan" href="/explore">Explore</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
                <MDBModal isOpen={this.state.editModalIsOpen} toggle={this.toggleEditModal} size="md">
                    <MDBModalHeader className="cyan text-white" toggle={this.toggleEditModal} > Thank You! </MDBModalHeader>
                    <MDBModalBody className="text-center">
                        {this.state.submitSuccess ? 
                            <img alt="thank-you" width="90%" src="https://i.pinimg.com/originals/bf/e2/d8/bfe2d8aff690b4b94c035aa357e865d6.jpg"></img>
                            : 
                            <img alt="submission-fail" width="90%" src="https://content.spiceworksstatic.com/service.community/p/post_images/0000275711/59e5cc26/attached_image/Screen_Shot_2017-10-17_at_10.20.43.png"></img>
                            }
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="cyan" href="/" >Home</MDBBtn>
                        <MDBBtn color="cyan" href="/explore">Explore</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
            
        );
    }
}

OnePost.propTypes = {
    getOnePost: Proptypes.func.isRequired,
    onePost: Proptypes.object.isRequired,
    deletePost: Proptypes.func.isRequired,
    editPost: Proptypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
    // console.log("mapStateToProps")
    // console.log(state);
    return {
        onePost: state.post.onePost
    }
}

// export default connect(mapStateToProps)(App)
export default connect(mapStateToProps, { getOnePost, deletePost, editPost })(OnePost);
// export default PostOne;
