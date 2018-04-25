import React, { Component } from "react";
import { Carousel, Card } from "react-materialize";

import image1 from "../static/carousel1.jpg";
import image2 from "../static/carousel2.jpg";
import image3 from "../static/carousel3.jpg";

import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="container center-align">
            <Card className="grey darken-4" style={{padding: 0}}>
                <h4 className="white-text" style={{'margin-top': 0}}>Highlights of the Week</h4>
                <Carousel
                    className="carousel-slider"
                    options={{ duration: 200, fullWidth: true, indicators: true }}
                    images={[
                        image1, image2, image3
                    ]}
                />
            </Card>
            </div>
        );
    }
}

export default Home;