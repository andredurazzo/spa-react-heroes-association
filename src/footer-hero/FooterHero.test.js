import React from 'react';
import ReactDOM from 'react-dom';
import FooterHero from "./FooterHero";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FooterHero />, div);
    ReactDOM.unmountComponentAtNode(div);
});
