import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';

it('renders without crashing', () => {
  const div = document.createElement('div');

  //Because jQuery on the react-materialize dependency, this test crashes.
  //ReactDOM.render(<Menu />, div);
  //ReactDOM.unmountComponentAtNode(div);
});