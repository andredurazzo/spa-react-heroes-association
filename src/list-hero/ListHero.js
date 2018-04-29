import React, { Component } from "react";
import { Collection, CollectionItem, Row, Input, Icon } from "react-materialize";
import CardHero from "./card-hero/CardHero";

import "../home/Home.css";
import "./ListHero.css";

let self;

class ListHero extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            search: "",
            ranking: "",
            local: "",
        };
        
        this.listItems = this.heroes.map((hero) =>
            <CollectionItem key={hero.name}>
                <CardHero {...hero}/>
            </CollectionItem>
        );

        this.handleInputChange = this.handleInputChange.bind(this);
        self = this;
    }

    handleInputChange(event) {
        const target = event.target;
        
        self.setState({
            [target.name]: target.value
        }, () => {
            self.filter();
        });
    }

    filter() {

        let filteredItems = this.heroes.filter((hero) =>
            {
                if((this.state.ranking === hero.ranking || this.state.ranking === "") &&
                    (this.state.local === hero.local || this.state.local === "") &&
                    (this.contains(hero) || this.state.search === ""))
                    return true;
                return false;
            }
        );

        if(filteredItems.length > 0) {
            this.listItems = filteredItems.map((hero) => 
                <CollectionItem key={hero.name}>
                    <CardHero {...hero}/>
                </CollectionItem>
            );
        } else {
            this.listItems = (
                <CollectionItem>
                    <p><b>Your search did't match any hero.</b></p>
                </CollectionItem>
            );
        }

        this.forceUpdate();
    }

    contains(hero) {
        if( this.state.search !== "" &&
            (hero.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
            hero.ranking.toLowerCase().includes(this.state.search.toLowerCase()) ||
            hero.local.toLowerCase().includes(this.state.search.toLowerCase()) ||
            hero.ability.toLowerCase().includes(this.state.search.toLowerCase())
        )) 
            return true;
        return false;
    }

    heroes = [
        {name: "Saitama", ranking: "B", local: "Z-City", ability: "Normal Punch", img: "saitama.jpg"}, 
        {name: "Mumen Rider", ranking: "C", local: "???", ability: "Nope", img: "mumen.png"}, 
        {name: "Genos", ranking: "S", local: "???", ability: "Cybernetic Skills", img: "genos.png"}, 
        {name: "Tatsumaki", ranking: "S", local: "???", ability: "Telekinesis", img: "tatsumaki.png"}, 
        {name: "Silverfang", ranking: "S", local: "Z-City", ability: "Expert Martials Artist", img: "silverfang.png"}
    ];
    
    listItems;

    searchBar = (
        <Row>
            <Input s={6} name="search" type="text" label="Search" placeholder="" 
                labelClassName="left-align" onChange={this.handleInputChange}>
                <Icon>search</Icon>
            </Input>
            <Input s={3} name="ranking" type="select" label="Ranking" onChange={this.handleInputChange}>
                <option value="">Class</option>
                <option value="S">S</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
            </Input>
            <Input s={3} name="local" type="select" label="Local" onChange={this.handleInputChange}>
                <option value="">Cities</option>
                <option value="a">A-City</option>
                <option value="b">B-City</option>
                <option value="c">C-City</option>
                <option value="d">D-City</option>
                <option value="f">F-City</option>
                <option value="g">G-City</option>
                <option value="h">H-City</option>
                <option value="i">I-City</option>
                <option value="j">J-City</option>
                <option value="k">K-City</option>
                <option value="m">M-City</option>
                <option value="n">N-City</option>
                <option value="q">Q-City</option>
                <option value="r">R-City</option>
                <option value="s">S-City</option>
                <option value="v">V-City</option>
                <option value="w">W-City</option>
                <option value="y">Y-City</option>
                <option value="z">Z-City</option>
            </Input>
        </Row>
    );

    render() {
        return (
            <div style={{minHeight: 400}}>
                <h4>Associated Heroes</h4>
                <div className="container custom">
                    <div className="card search-bar">
                        {this.searchBar}
                    </div>
                    <Collection>
                        {this.listItems}
                    </Collection>
                </div>
            </div>
        );
    }
}

export default ListHero;