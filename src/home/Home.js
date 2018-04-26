import React, { Component } from "react";
import { Carousel, Card, Row, Col } from "react-materialize";

import image1 from "../static/carousel1.jpg";
import image2 from "../static/carousel2.jpg";
import image3 from "../static/carousel3.jpg";
import imageBreaking from "../static/breakingnews.png";


import './Home.css';
import Divider from "react-materialize/lib/Divider";

class Home extends Component {
    render() {
        return (
            <Row className="center-align">
                <Col s={7}>
                    <Card className="left-align hoverable">
                        <h5 className="red-text"><strong>BREAKING NEWS</strong></h5>
                        <h5>A DISASTER LEVEL DRAGON APPEARS AT M-CITY</h5>
                        <Divider /><br/>
                        
                        <img className="responsive-img center-align" src={imageBreaking} alt="DRAGON DISASTER LEVEL APPEARS AT M-CITY"/>
                            
                        <p style={{fontSize: 18}}>
                            According with the authorities, this monster has killed approximately 100 million 
                            people and caused $17 billion of damage to the region.
                        </p> <br />
                        <p style={{fontSize: 18}}>
                            Seven heroes class A and two class S were sent to control this threat ...
                        </p>
                    </Card>
                </Col>
                <Col s={5}>
                    <Card className="grey darken-4 hoverable" style={{padding: 0}}>
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