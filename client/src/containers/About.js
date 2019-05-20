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
<div className="">
<h2>How it works</h2>
<div>
  <p>
  <h4> Search events you'd like to join or Post your own clean-up project</h4>
<ul>
  <li> Spot a location that needs to be beautified.</li>
  <li> Post any related info such as location, type, and image.</li>
  <li> Our site will then allow others to search for and join their desired beautifican project. </li>
  </ul>  
  </p>
  <hr></hr>
  <div></div>
  <h3> Recyclable or Not</h3>
</div>
<div id="recollect"></div>
</div>
);
}
}
export default About;