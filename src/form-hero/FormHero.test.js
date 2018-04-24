import React from 'react';
import ReactDOM from 'react-dom';
import FormHero from './FormHero';

import jQuery from 'jquery';
const $ = jQuery;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormHero />, div);
  ReactDOM.unmountComponentAtNode(div);
});
