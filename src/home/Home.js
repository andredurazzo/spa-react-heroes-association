import React, { Component } from "react";
import { Card, Row, Col, Slide, Container } from "react-materialize";

import image1 from "../static/carousel1.jpg";
import image2 from "../static/carousel2.jpg";
import image3 from "../static/carousel3.jpg";
import imageBreaking from "../static/breakingnews.png";

import './Home.css';
import Divider from "react-materialize/lib/Divider";
import Slider from "react-materialize/lib/Slider";

class Home extends Component {

    highlights;
    listHighlights;

    constructor() {
        super();
        this.highlights = [
            {img: image1, name: "Saitama", description: "Bald Cape"},
            {img: image2, name: "Genos", description: "Cybernetic Prodigy"},
            {img: image3, name: "Mumem Rider", description: "Rides around on a bicycle"}
        ];
        
        this.listHighlights = this.highlights.map((highlight) => {
            return(
                <Slide
                key={highlight.name}
                src={highlight.img}
                title={highlight.name}
                placement="left">
                    {highlight.description}
                </Slide>
            );
        });
    }

    render() {
        return (
            <div className="container custom">
            <Row className="center-align">
                <Col s={7}>
                    <Card className="left-align">
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
                    <h5 className="black-text" style={{marginBottom: 0}}>Highlights of the Week</h5>
                    <Card className="grey darken-4 hoverable" style={{padding: 0, height: 400}}>
                        <Slider indicators={true} style={{height: 380}} fullscreen={true}>
                            {this.listHighlights}
                        </Slider>
                    </Card>
                </Col>
            </Row>
            </div>
        );
    }
}

export default Home;