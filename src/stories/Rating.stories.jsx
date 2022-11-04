import React from 'react';
import './style.css'

import { RatingSize } from '../components/Rating/Rating';

export default {
  title: 'Components-TP1/Rating',
  component: RatingSize
};

const Template = (args) => <RatingSize {...args} />;


export const Small = Template.bind({});
Small.args = {
    name: "small",
    size: "small"
};

export const Medium = Template.bind({});
Medium.args = {
    name: "medium",
    size: ""
};

export const Large = Template.bind({});
Large.args = {
    name: "large",
    size: "large"
};