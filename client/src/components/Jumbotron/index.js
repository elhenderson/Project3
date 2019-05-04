import React from "react";

function Jumbotron() {
  const jbStyle = {
    "background-image": "url(https://i.dailymail.co.uk/i/pix/2017/05/29/10/40E7DF2900000578-0-image-a-6_1496050595356.jpg)",
    "background-size": "cover",
    "background-position": "center",
    "background-repeat": "no-repeat",
    // "background-attachment": "fixed",
  }

  return (
    <div className="jumbotron text-center" 
    style={jbStyle}
    >
    <h2 class="display-5">Save More Green Space!</h2>
    <a class="btn aqua-gradient btn-lg" href="/about" role="button">Learn more</a>
    </div>
  );
}

export default Jumbotron;
