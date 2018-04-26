import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./home/Home";
import FormHero from "./form-hero/FormHero";
import ListHero from "./list-hero/ListHero";

class AppRoute extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/spa-react-heroes-association/" component={Home} />
                <Route path="/spa-react-heroes-association/hero/form" component={FormHero} />
                <Route path="/spa-react-heroes-association/hero/list" component={ListHero} />
            </Switch>
        );
    }
}

export default AppRoute;