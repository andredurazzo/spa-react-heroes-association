import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./home/Home";
import FormHero from "./form-hero/FormHero";
import ListHero from "./list-hero/ListHero";

class AppRoute extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/hero/form" component={FormHero} />
                <Route path="/hero/list" component={ListHero} />
            </Switch>
        );
    }
}

export default AppRoute;