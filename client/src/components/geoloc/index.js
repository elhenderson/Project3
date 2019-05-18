//possible rename app.js

import React, { Component} from "react";
import { GoogleComponent } from 'react-google-location';
const API_KEY = "AIzaSyC3QnudejNAQPQPvH5rZOg8m0XjpDNinh8"

class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        place: null,
      };
    }
   
    render() {
        console.warn("result return here",this.state.place)
      return (
        <div >
           <GoogleComponent
           
            apiKey={API_KEY}
            language={'en'}
            country={'country:us'}
            coordinates={true}
            // locationBoxStyle={'custom-style'}
            // locationListStyle={'custom-style-list'}
            onChange={(e) => { this.setState({ place: e }) }} />
        </div>
   
      )
    } 
  }


  export default App