import React, { Component } from "react";
import { SideNav, SideNavItem, Button, Icon, Navbar } from "react-materialize";

import { NavLink } from "react-router-dom";

import './Menu.css';

class Menu extends Component {

    activeSide = true;

    render() {
        return (
            <div className="container-fluid">
                <div className="row menu">
                <div className="col menu s1 black">
                    <SideNav
                    className="left-align"
                    trigger={<Button className="black custom-btn"><Icon center>menu</Icon></Button>}
                    // fixed
                    options={{ closeOnClick: true }}
                    >
                    <SideNavItem subheader className="center-align">Heroes Association</SideNavItem>
                    <SideNavItem divider />
                    <SideNavItem icon="home">
                        <NavLink to="/">Home</NavLink>
                    </SideNavItem>
                    <SideNavItem icon="fiber_new">
                        <NavLink to="/form">Register a New Hero</NavLink>
                    </SideNavItem>
                    </SideNav>
                </div>
                <div className="col menu s11">
                    <Navbar className="black custom-nav">
                    </Navbar>
                </div>
                </div>
            </div>
        );
    }
}

export default Menu;