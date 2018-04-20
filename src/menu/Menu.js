import React, { Component } from "react";
import { SideNav, SideNavItem, Button, Icon, Navbar } from "react-materialize";

import './Menu.css';

//To pass on Tests
import jQuery from 'jquery';
const $ = jQuery;

class Menu extends Component {

    activeSide = true;

    render() {
        return (
            <div className="container-fluid">
                <div className="row menu">
                <div className="col menu s1 center-align black">
                    <SideNav
                    trigger={<Button className="black custom-btn"><Icon center>menu</Icon></Button>}
                    // fixed
                    options={{ closeOnClick: true }}
                    >
                    <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
                    <SideNavItem href='#!second'>Second Link</SideNavItem>
                    <SideNavItem divider />
                    <SideNavItem subheader>Subheader</SideNavItem>
                    <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
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