import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon, MDBFormInline } from 'mdbreact';
import Images from "../components/Images"
import "./SubmitForm.css";
import LocationSearchInput from "../components/LocationSearchInput"

/* global google */

class SubmitForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            location: {address: null, latitude: null, longitude: null,},
            category: { isPlastics: false, isWood: false, isMetal: false, isOther: true },
            rating: "0",
            notes: "",
            imgUploading: false,
            imgurls: [],
            // imgurls: ["https://images-na.ssl-images-amazon.com/images/I/61uHDTvqDLL._SX425_.jpg", "https://3vnqw32fta3x1ysij926ljs3-wpengine.netdna-ssl.com/wp-content/uploads/2003/03/Talking-Trash-576x360.jpg",
            //     "https://i.loli.net/2019/05/14/5cda4dc0cf76278317.jpg",
            // ]
        };
    }

    // // manual way 1
    // addressRef = React.createRef();
    // componentDidMount() {
    //     console.log(this.addressRef);
    //     new window.google.maps.places.Autocomplete(this.addressRef.current);
    // }

    // // manual way 2
    // addressRef = React.createRef();
    // componentDidMount () {
    //     console.log(this.addressRef);
    //     const initialize = () => {
    //         new window.google.maps.places.Autocomplete(this.addressRef.current);
    //     }
    //     window.google.maps.event.addDomListener(window, 'load', initialize);
    // }

    // addressRef = React.createRef();
    // componentDidMount() {
    //     console.log(this.addressRef);
    //     this.autocomplete = new google.maps.places.Autocomplete(
    //         this.addressRef.current,
    //         { types: ["geocode"] }
    //     );
    //     // this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
    //     this.autocomplete.addListener("place_changed", ()=>{
    //         const place = this.autocomplete.getPlace();
    //         // this.props.onPlaceChanged(place);
    //         console.log("place = " + place);
    //     });

    // }


    changeHandler = event => {
        console.log("event: " + event.target.name + " = " + event.target.value);
        this.setState({ [event.target.name]: event.target.value });
    };

    checkboxChangeHandler = event => {
        console.log("event: " + event.target.name + " = " + event.target.value);
        const name = event.target.name;
        // const checked = e.target.checked;
        const d = this.state.category;
        d[name] = !d[name];
        this.setState({ category: d });
        console.log(this.state.category);
    };

    // upload images to third-party server
    imgUploadChangeHandler = event => {
        console.log(event.target.name + " = " + event.target.value + " haha");
        const files = Array.from(event.target.files)
        console.log("num of files = " + files.length);
        if (files.length > 0) {
            this.setState({ imgUploading: true });
        }

        // sm.ms allows only one image in each request
        files.map((singleFile) => {
            const formData = new FormData()
            formData.append("smfile", singleFile);

            fetch("https://sm.ms/api/upload", {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                    if (data.data) {
                        console.log(data.data.url);
                        this.setState({
                            imgurls: [...this.state.imgurls, data.data.url],
                            imgUploading: false,
                        })
                    } else {
                        // TODO inform user about this error
                        console.log(data.msg);
                    }
                })
        });
    }

    // Get the info from the LocationSearchInput component and save it to state.
    setFormLocation = (googleLocation) => {
        if (typeof googleLocation == 'string' || googleLocation instanceof String) {
            console.log("not google location result", googleLocation);
            this.setState({
                location: {address: googleLocation, latitude: null, longitude: null,}
            })
        } else {
            // The Google result comes back here
            console.log("yes google location result");
            console.log(googleLocation);
            this.setState({
                location: googleLocation
            })
        }
    }

    submitHandler = event => {
        event.preventDefault();
        const data = {title: this.state.title, location: this.state.location.address, rating: this.state.rating, photo: this.state.imgurls, notes: this.state.notes};
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
    }

    render() {
        return (
            <MDBContainer>
                {/* <h2 className="h1-responsive font-weight-bold text-center my-5">POST PAGE</h2> */}
                <MDBRow>
                    <MDBCol md="10">
                        <form onSubmit={this.submitHandler}>
                            <h3 className="text-center font-weight-bold my-4" style={{ color: "#0097a7" }}>Post a trash</h3>
                            <MDBInput
                                label="Title"
                                icon="tag" iconClass="cyan-text"
                                group
                                required
                                type="text"
                                validate
                                error=""
                                success=""
                                name="title"
                                value={this.state.title}
                                onChange={this.changeHandler}
                            />

                            <div className="md-form form-group">
                                <i className="fa fa-map-marker-alt cyan-text prefix"></i>
                                <LocationSearchInput setFormLocation={this.setFormLocation} />
                            </div>

                            {/* <MDBFormInline> */}
                            <div className="input-group py-2" id="category-div">
                                <span className="my-3 mr-2 font-weight-bold cyan-text">Category:</span>
                                <MDBInput name="isPlastics" type="checkbox" id="checkbox1" checked={this.state.category.isPlastics} onClick={this.checkboxChangeHandler} label="Plastics" />
                                <MDBInput name="isWood" type="checkbox" id="checkbox2" checked={this.state.category.isWood} onClick={this.checkboxChangeHandler} label="Wood" />
                                <MDBInput name="isMetal" type="checkbox" id="checkbox3" checked={this.state.category.isMetal} onClick={this.checkboxChangeHandler} label="Metal" />
                                <MDBInput name="isOther" type="checkbox" id="checkbox4" checked={this.state.category.isOther} onClick={this.checkboxChangeHandler} label="Other" />
                            </div>
                            {/* </MDBFormInline> */}


                            {/* <MDBFormInline> */}
                            <div className="input-group py-2" id="rating-div">
                                <span className="py-3 mr-2 font-weight-bold cyan-text">Rating:</span>
                                <MDBInput group value="1" name="rating" onClick={this.changeHandler} checked={this.state.rating === "1" ? true : false} label="1" type="radio" id="radio1" />
                                <MDBInput group value="2" name="rating" onClick={this.changeHandler} checked={this.state.rating === "2" ? true : false} label="2" type="radio" id="radio2" />
                                <MDBInput group value="3" name="rating" onClick={this.changeHandler} checked={this.state.rating === "3" ? true : false} label="3" type="radio" id="radio3" />
                                <MDBInput group value="4" name="rating" onClick={this.changeHandler} checked={this.state.rating === "4" ? true : false} label="4" type="radio" id="radio4" />
                                <MDBInput group value="5" name="rating" onClick={this.changeHandler} checked={this.state.rating === "5" ? true : false} label="5" type="radio" id="radio5" />
                            </div>
                            {/* </MDBFormInline> */}


                            <div>
                                <span className="font-weight-bold cyan-text py-2">Images</span>
                                <Images imgurls={this.state.imgurls} imgUploading={this.state.imgUploading}></Images>
                            </div>
                            <div className="custom-file input-group py-2">
                                <input
                                    id="smfile"
                                    multiple
                                    type="file"
                                    data-min-file-count="1"
                                    className="custom-file-input"
                                    id="multifileinput"
                                    name="smfile"
                                    accept="image/*"
                                    onChange={this.imgUploadChangeHandler}
                                />
                                <label
                                    className="custom-file-label"
                                    htmlFor="multifileinput"
                                >
                                    Choose images...
                                </label>
                                <div className="invalid-feedback">
                                    Example invalid custom file feedback
                                </div>
                            </div>


                            <MDBInput
                                label="Notes"
                                name="notes"
                                value={this.state.notes}
                                icon="pencil-alt" iconClass="cyan-text"
                                type="textarea" rows="1"
                                onChange={this.changeHandler}
                            />

                            <div className="text-center py-4 mt-3">
                                <MDBBtn color="cyan" type="submit">
                                    Submit
                                </MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
                <br />

            </MDBContainer>
        );
    }
}

export default SubmitForm;
