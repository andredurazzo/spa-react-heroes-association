import React, { Component } from 'react';
import { Input, Row } from 'react-materialize';
import Container from 'react-materialize/lib/Container';
import Button from 'react-materialize/lib/Button';

class FormHero extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h4>Register a New Hero</h4>
                <form>
                    <Container>
                        <Row>
                            <Input s={12} label="Codename" type="text"></Input>
                            <Input s={6} label="Local" type="text"></Input>
                            <Input s={6} label="Main Ability" type="select">
                                <option value='1'>Nope</option>
                                <option value='2'>Teleport</option>
                                <option value='3'>Laser Eyes</option>
                                <option value='4'>Invisibily</option>
                            </Input>
                        </Row>
                        <Row className="right-align">
                            <Button type="submit" value="Submit">Register</Button>
                        </Row>
                    </Container>
                </form>
            </div>
        );
    }
}

export default FormHero;