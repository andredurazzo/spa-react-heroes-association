import React from 'react';
import ReactDOM from 'react-dom';
import ListHero from './ListHero';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListHero/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
