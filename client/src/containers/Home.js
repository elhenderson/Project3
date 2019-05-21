import React, { Component } from "react";
import CarouselPage from "../components/carousel";
import Jumbotron from "../components/Jumbotron"

function Home() {
    return (
        <div className="container">
        <div >
            <Jumbotron />
            <CarouselPage />
        </div>
        </div>

    );
}

export default Home;
