import React from 'react';
import './style.css'

import { Width } from '../components/Width/Width';

export default {
  title: 'Components-TP1/Width',
  component: Width
};

const Template = (args) => <Width {...args} />;

var img = [];

img.push('assets/img/balou1.jpg');
img.push('assets/img/balou2.jpg');
img.push('assets/img/balou3.jpg');


export const SmallW = Template.bind({});
SmallW.args = {
  imagesurl: img,
  width: 150,
};

export const MediumW = Template.bind({});
MediumW.args = {
  imagesurl: img,
  width: 300,
};

export const LargeW = Template.bind({});
LargeW.args = {
  imagesurl: img,
  width: 450,
};