import React, { Component } from "react";
import CarouselPage from "../components/carousel";
import Jumbotron from "../components/Jumbotron"

function Home() {
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", "margin": 0, "width": "100%", "textAlign": "center"}}>
            <Jumbotron />
            <div
                style={{margin: 0, "width": "100%", "textAlign": "center"}}
                className="container text-center">
                 <br />
                <div>
                    <CarouselPage />

                </div>
            </div>
        </div>

    );
}

export default Home;
