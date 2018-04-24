import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';

import $ from "jquery";

window.jQuery = $;
require('jquery-ui/ui/version');
require('jquery-ui/ui/plugin');
require('jquery-ui/ui/widget');
require('jquery-ui/ui/widgets/mouse');
require('jquery-ui/ui/widgets/resizable');

it('renders without crashing', () => {
  const div = document.createElement('div');

  //Because jQuery on the react-materialize dependency, this test crashes.
  ReactDOM.render(<Menu />, div);
  ReactDOM.unmountComponentAtNode(div);
});