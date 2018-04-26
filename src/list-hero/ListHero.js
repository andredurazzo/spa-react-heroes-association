import React, { Component } from "react";
import { Container, Collection, CollectionItem } from "react-materialize";

import CardHero from "./card-hero/CardHero";

class ListHero extends Component {

    heroes = [
        {name: "Saitama", ranking: "B", local: "Z-City", ability: "Normal Punch"}, 
        {name: "Mumen Rider", ranking: "C", local: "???", ability: "Nope"}, 
        {name: "Genos", ranking: "S", local: "???", ability: "Cybernetic Skills"}, 
        {name: "Tornado", ranking: "S", local: "???", ability: "Telekinesis"}, 
        {name: "Silverfang", ranking: "S", local: "Z-City", ability: "Expert Martials Artist"}
    ];
    
    listItems = this.heroes.map((hero) =>
        <CollectionItem key={hero.name}>
            <CardHero name={hero.name} ranking={hero.ranking} 
            local={hero.local} ability={hero.ability}/>
        </CollectionItem>
    );

    render() {
        return (
            <div style={{minHeight: 400}}>
                <h4>Associated Heroes</h4>
                <Container>
                    <Collection>
                        {this.listItems}
                    </Collection>
                </Container>
            </div>
        );
    }
}

export default ListHero;