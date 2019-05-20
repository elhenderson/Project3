import React from "react";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

function Jumbotron() {
  const jbStyle = {
    "backgroundImage": "url(https://i.dailymail.co.uk/i/pix/2017/05/29/10/40E7DF2900000578-0-image-a-6_1496050595356.jpg)",
    "backgroundSize": "cover",
    "backgroundPosition": "center",
    "backgroundRepeat": "no-repeat"
    // "background-attachment": "fixed",
  }

  return (
    // <div className="jumbotron text-center" 
    // style={jbStyle}
    // >
    // <h2 className="display-5">Save More Green Space!</h2>
    // <a className="btn aqua-gradient btn-lg" href="/about" role="button">Learn more</a>
    // </div>
    <MDBContainer className="mt-0 text-center px-0">
      <MDBRow>
        <MDBCol className="text-white">
          <MDBJumbotron style={jbStyle}>
            <h2 className="display-5">Unlock More Green Space!</h2>
            <p className="lead">
            We connect those in your community with a shared desire to keep your community green.
            </p>
            <MDBBtn href="/explore" className="aqua-gradient"> Explore </MDBBtn>
            <MDBBtn href="/post" className="aqua-gradient"> Post </MDBBtn>
            <MDBBtn href="/about" className="aqua-gradient"> Learn More </MDBBtn>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Jumbotron;
