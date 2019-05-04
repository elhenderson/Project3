import React, {Component} from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBView, MDBMask } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';


export default class Navbar extends Component {
 render() {
  return(
  <ul class="nav grey lighten-4 py-4">
  <li class="nav-item">
    <a class="nav-link active" href="#!">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#!">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#!">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#!">Disabled</a>
  </li>
</ul>
  )
 }
}

