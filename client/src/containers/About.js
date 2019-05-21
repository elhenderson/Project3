import React, { Component } from "react";
import "./About.css";
class About extends React.Component {
constructor(props) {
super(props);
this._ref = React.createRef();
}
componentDidMount() {
var rcw = document.querySelector("#rCw");
document.querySelector("#recollect").appendChild(rcw);
rcw.setAttribute('style', 'display:block');
}
render() {
return (
<div class="about">
<h3>How It Works</h3>
<div class= "events">
  <p>
<ul>
  <li> Spot a location that needs to be beautified</li>
  <li> Post any related info such as location, type, and image</li>
  <li> Our site will also allow users to post and view clean-up projects </li>
  </ul>  
  </p>
  <hr className="my-5" />
  <div class="recycle">
  <h3> Recyclable or Not</h3>
</div>
<div id="recollect"></div>
</div>
</div>

);
}
}
export default About;