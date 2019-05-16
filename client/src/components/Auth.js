import auth0 from "auth0-js";
import Explore from '../containers/Explore'
import React, { Component } from 'react';
/*eslint no-restricted-globals: 0 */
const LOGIN_SUCCESS_PAGE = "/Userpage";
const LOGIN_FAILURE_PAGE ='/home';
class Auth extends Component {

  auth0 = new auth0.WebAuth({
    domain: "dev-y0g40tq6.auth0.com",
    clientID: "aGAyCECea05TdRTEhRXRJhhSmXVWPXz7",
    redirectUri: "http://localhost:3000/explore",
    responseType: "token id_token",
    scope: "openid"
  });
  

  constructor() {
    super()
    this.login = this.login.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }
  login() {
    this.auth0.authorize();
  }
  handleAuthentication() {
    this.auth0.parseHash((err, authResults) => {
      if (authResults && authResults.accessToken && authResults.idToken) {
        let expiresAt = JSON.stringify(
          authResults.expiresIn * 1000 + new Date().getTime()
        );
        localStorage.setItem("access_token", authResults.accesstoken);
        localStorage.setItem("id_token", authResults.idToken);
        localStorage.setItem("expires_at", expiresAt);
        localStorage.hash = "";
        location.pathname = LOGIN_SUCCESS_PAGE;
      } else if (err) {
        location.pathname = LOGIN_FAILURE_PAGE;
        console.log(err);
      }
    });
  }

isAuthenticated(){
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
}

render(){
  const auth = new Auth();
  return(

  
    auth.login()

  );
}
}

export default Auth;