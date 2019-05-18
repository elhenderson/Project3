import React, { Component } from "react";
import {Provider} from 'react-redux';
import store from './store'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Discover from "./pages/Discover";
// import About from "./pages/About";
// import Search from "./pages/Search";
import Home from "./containers/Home";
import Explore from "./containers/Explore";
import Post from "./containers/Post";
import Search from "./containers/Search";
import About from "./containers/About";
import Login from "./containers/Login";

import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Auth from './components/Auth';

function App() {
  return (
    <Router>
      <div className="container" style={{display: "flex", flexDirection: "column", justifyItems: "center", width: "100%"}}>
      <Provider store={store}>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/post" component={Post} />
            <Route path="/explore" component={Explore} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/login" component={Auth} />
          </Switch>
          <Footer />
      </Provider>
      </div>
    </Router>
  )
}

export default App;

