import React, { Component } from "react";
import { Carousel, Card, Row, Col } from "react-materialize";

import image1 from "../static/carousel1.jpg";
import image2 from "../static/carousel2.jpg";
import image3 from "../static/carousel3.jpg";

import './Home.css';
import Container from "react-materialize/lib/Container";

class Home extends Component {
    render() {
        return (
            <Row className="center-align">
                <Col s={7}></Col>
                <Col s={5}>
                    <Card className="grey darken-4" style={{padding: 0}}>
                        <h4 className="white-text" style={{marginTop: 0}}>Highlights of the Week</h4>
                        <Carousel
                            className="carousel-slider"
                            options={{ duration: 200, fullWidth: true, indicators: true }}
                            images={[
                                image1, image2, image3
                            ]}
                        />
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default Home;