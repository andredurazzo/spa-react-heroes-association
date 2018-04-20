import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./home/Home";
import FormHero from "./form-hero/FormHero";

class AppRoute extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />

                    <Route path="/form" component={FormHero} />
                </Switch>
            </Router>
        );
    }
}

export default AppRoute;