import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Discover from "./pages/Discover";
// import About from "./pages/About";
// import Search from "./pages/Search";
import Home from "./containers/Home";
import View from "./containers/View";
import Post from "./containers/Post";
import Search from "./containers/Search";
import About from "./containers/About";
import Login from "./containers/Login";

import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/view" component={View} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

