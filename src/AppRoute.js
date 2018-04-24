import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./home/Home";
import FormHero from "./form-hero/FormHero";

class AppRoute extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/form" component={FormHero} />
            </Switch>
        );
    }
}

export default AppRoute;