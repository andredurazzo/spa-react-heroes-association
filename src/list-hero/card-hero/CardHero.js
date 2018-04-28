import React, { Component } from "react";
import { Row, Col } from "react-materialize";

// import noImage from "../../static/anonymous-avatar.jpg";

import "./CardHero.css";

class CardHero extends Component {
    
    render() {
        return(
            <Row className="left-align" style={{marginBottom: 0}}>
                <Col s={2}>
                    <img className="responsive-img rounded" src={process.env.PUBLIC_URL+"/profile/"+this.props.img} alt={this.props.name}/>
                </Col>
                <Col s={4}>
                    <h5>{this.props.name}</h5>
                    <p className="custom-p"><b>Ranking:</b> {this.props.ranking}</p>
                    <p className="custom-p"><b>Local:</b> {this.props.local}</p>
                    <p className="custom-p"><b>Main Ability:</b> {this.props.ability}</p>
                </Col>
                <Col s={6}>
                    <p style={{marginTop: 0}}>Biography</p>
                    <p className="custom-p" style={{textAlign: 'justify'}}>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                       incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                       exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </Col>
            </Row>
        );
    }
}

export default CardHero;