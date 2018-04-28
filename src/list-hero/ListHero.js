import React, { Component } from "react";
import { Collection, CollectionItem } from "react-materialize";

import CardHero from "./card-hero/CardHero";

import "../home/Home.css"

class ListHero extends Component {

    heroes = [
        {name: "Saitama", ranking: "B", local: "Z-City", ability: "Normal Punch", img: "saitama.jpg"}, 
        {name: "Mumen Rider", ranking: "C", local: "???", ability: "Nope", img: "mumen.png"}, 
        {name: "Genos", ranking: "S", local: "???", ability: "Cybernetic Skills", img: "genos.png"}, 
        {name: "Tatsumaki", ranking: "S", local: "???", ability: "Telekinesis", img: "tatsumaki.png"}, 
        {name: "Silverfang", ranking: "S", local: "Z-City", ability: "Expert Martials Artist", img: "silverfang.png"}
    ];
    
    listItems = this.heroes.map((hero) =>
        <CollectionItem key={hero.name}>
            <CardHero {...hero}/>
        </CollectionItem>
    );

    render() {
        return (
            <div style={{minHeight: 400}}>
                <h4>Associated Heroes</h4>
                <div className="container custom">
                    <Collection>
                        {this.listItems}
                    </Collection>
                </div>
            </div>
        );
    }
}

export default ListHero;