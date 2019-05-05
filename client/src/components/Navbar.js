import React, { Component } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light cyan ">
        <a className="navbar-brand" href="/">GreenSpace!</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
                <li className={ window.location.pathname === "/past" ? "nav-item active" : "nav-item" }>
                    <a className="nav-link" href="/post"> Post </a>
                </li>
                <li className={ window.location.pathname === "/view" ? "nav-item active" : "nav-item" }>
                    <a className="nav-link" href="/view"> View </a>
                </li>
                <li className={ window.location.pathname === "/search" ? "nav-item active" : "nav-item" }>
                    <a className="nav-link" href="/search"> Search </a>
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
