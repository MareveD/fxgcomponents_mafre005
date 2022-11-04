import React from 'react';
import './style.css'

import { Height } from '../components/Height/Height';

export default {
  title: 'Components-TP1/Height',
  component: Height
};

const Template = (args) => <Height {...args} />;

var img = [];

img.push('assets/img/balou1.jpg');
img.push('assets/img/balou2.jpg');
img.push('assets/img/balou3.jpg');


export const SmallH = Template.bind({});
SmallH.args = {
  imagesurl: img,
  height: 150
};

export const MediumH = Template.bind({});
MediumH.args = {
  imagesurl: img,
  height: 300
};

export const LargeH = Template.bind({});
LargeH.args = {
  imagesurl: img,
  height: 450
};