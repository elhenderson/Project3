import React, {PureComponent} from "react";
import { MDBCol, MDBRow } from "mdbreact";
import loadinfo from "./loadinfo.gif"

function ImageItem(props) {
    return(
        <img src={props.imgurl} className="rounded pr-2 pb-2 z-depth-1" style={{height: "160px"}} alt="uploadedimage"/>
    );
}

class Images extends PureComponent {
    // console.log(props);
    render() {
        console.log(this.props);
        if(this.props.imgurls == null) {
            return null;
        }
    return (
        <MDBRow className="d-flex justify-content-start">
            {this.props.imgurls.map((imgurl, i) => 
                <div key={i} className="p-2 col-example text-left">
                    <ImageItem key={i} imgurl={imgurl}/>
                </div>
            )}
            {this.props.imgUploading ? <ImageItem imgurl={loadinfo}></ImageItem> : null}
        </MDBRow>
    );
}
}

export default Images;
