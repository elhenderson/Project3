import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark cyan ">
        <a className="navbar-brand" href="/"> <img alt="logo" src="/favicon.ico" style={{maxHeight:"32px"}}></img> GreenSpace!</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
                <li className={ window.location.pathname === "/submit" ? "nav-item active" : "nav-item" }>
                    <a className="nav-link" href="/submit"> Submit </a>
                </li>
                <li className={ window.location.pathname === "/explore" ? "nav-item active" : "nav-item" }>
                    <a className="nav-link" href="/explore"> Explore </a>
                </li>
                <li className={ window.location.pathname === "/about" ? "nav-item active" : "nav-item" }>
                    <a className="nav-link" href="/about"> About </a>
                </li>
                <li className={ window.location.pathname === "/login" ? "nav-item active" : "nav-item" }>
                    <a className="nav-link" href="/login"> Login </a>
                </li>
            </ul>
        </div>
      
    </nav>
  );
}

export default Navbar;
