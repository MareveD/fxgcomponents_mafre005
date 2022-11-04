import React from 'react';
import './style.css'

import { DisplayFlex } from '../components/DisplayFlex/DisplayFlex';

export default {
  title: 'Components-TP1/DisplayFlex',
  component: DisplayFlex
};

const Template = (args) => <DisplayFlex {...args} />;

var img = [];

img.push('assets/img/bruce_dickinson.jpg');
img.push('assets/img/steve_harris.jpg');
img.push('assets/img/dave_murray.jpg');
img.push('assets/img/adrian_smith.jpg');
img.push('assets/img/janick_gers.jpg');
img.push('assets/img/nicko_mcbrain.jpg');


export const Small = Template.bind({});
Small.args = {
  imagesurl: img,
  width: 150,
  height: 100,
  size: "sm"
};

export const Medium = Template.bind({});
Medium.args = {
  imagesurl: img,
  width: 300,
  height: 200,
  size: "md"
};

export const Large = Template.bind({});
Large.args = {
  imagesurl: img,
  width: 600,
  height: 400,
  size: "lg"
};