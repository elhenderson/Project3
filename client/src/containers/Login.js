import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import Auth from '../components/Auth';


export default class LoginForm extends Component{

    render(){
        const auth = new Auth();
    return(

        
        auth.login()

    );
}};
