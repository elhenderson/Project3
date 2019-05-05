import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

const LoginForm = () => {
    return (
        <MDBContainer>
            <MDBRow className="d-flex justify-content-around my-4">
                <MDBCol md="6" className="shadow-box-example z-depth-1">
                    <form>
                        <p className="h5 text-center my-4">Sign in</p>
                        <div className="grey-text">
                            <MDBInput
                                label="Type your email"
                                icon="envelope"
                                group
                                type="email"
                                validate
                                error="wrong"
                                success="right"
                            />
                            <MDBInput
                                label="Type your password"
                                icon="lock"
                                group
                                type="password"
                                validate
                            />
                        </div>
                        <div className="text-center">
                            <MDBBtn>Login</MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default LoginForm;

// function Login() {
//     return (
//         <div className="">
//             LOGIN PAGE <br />
//         </div>

//     );
// }

// export default Login;
