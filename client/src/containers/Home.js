import React, { Component } from "react";
import CarouselPage from "../components/carousel";
import Jumbotron from "../components/Jumbotron"

function Home() {
    return (
        <div>
            <Jumbotron />
            <div
                // style={{ height: 200, clear: "both", paddingTop: 120, textAlign: "center" }}
                className="container text-center">
                HOME PAGE <br />
                <div>
                    <CarouselPage/>

                </div>
            </div>
        </div>

    );
}

export default Home;
