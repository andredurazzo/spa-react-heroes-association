import React, { Component } from 'react';
import { Input, Row, Container, Button, Icon } from 'react-materialize';

class FormHero extends Component {

    constructor(props) {
        super(props);

        this.state = {
            codename: "",
            local: "",
            mp: "nope",
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInputChange(event) {
        const target = event.target;
        this.setState({
            [target.name]: target.value
        });
    }

    handleSubmit(event) {
        console.log("form was submitted:", this.state);
        //alert('A name was submitted: ' + this.state);
        event.preventDefault();
    }

    render() {
        return (
            <div style={{minHeight: 400}}>
                <h4>Register a New Hero</h4>
                <Container>
                    <form onSubmit={this.handleSubmit}>
                        <Row>
                            <Input s={12} label="Codename" name="codename" type="text" required className="validate"
                                value={this.state.codename} onChange={this.handleInputChange}>
                                <Icon>account_circle</Icon>
                            </Input>
                            <Input s={6} label="Local" name="local" type="text" required validate
                                value={this.state.local} onChange={this.handleInputChange}>
                                <Icon>place</Icon>
                            </Input>
                            <Input s={6} label="Main Ability" name="mp" type="select"
                                value={this.state.mp} onChange={this.handleInputChange}
                            >
                                <option value='nope'>Nope</option>
                                <option value='teleport'>Teleport</option>
                                <option value='laser_eyes'>Laser Eyes</option>
                                <option value='invisibility'>Invisibility</option>
                                <option value='???'>Other</option>
                            </Input>
                        </Row>
                        <Row className="right-align">
                            <Button className="light-blue" type="submit" value="Submit">Register</Button>
                            {/* <Button onClick={this.handleSubmit}>Register</Button> */}
                        </Row>
                    </form>
                </Container>
            </div>
        );
    }
}

export default FormHero;