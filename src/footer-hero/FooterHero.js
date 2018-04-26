import React, { Component } from "react";
import { Footer } from "react-materialize";

class FooterHero extends Component {
    render() {
        return(
            <Footer 
                copyrights="Guilherme Maegava © 2018 - All rights reserved."
                links={
                    <ul>
                    <li><a className="grey-text text-lighten-3" href="https://github.com/guilherme-maegava/spa-react-heroes-association">Github Repository</a></li>
                    <li><a className="grey-text text-lighten-3" href="http://onepunchman.wikia.com/wiki/Heroes/Hero_Association">About this organization</a></li>
                    <li><a className="grey-text text-lighten-3" href="/spa-react-heroes-association/hero/form">Be a Hero!</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                    </ul>
                }
                className='black'
            >
                <h5 className="white-text">Heroes Association</h5>
            </Footer>
        );
    }
}

export default FooterHero;