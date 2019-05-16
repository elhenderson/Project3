import React, { Component } from "react";

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
          ABOUT PAGE
        <div id="recollect"></div>
      </div>
    );
  }
}

export default About;


