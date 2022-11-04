import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './style.css';

import ButtonSize from '../components/ButtonSize/ButtonSize';

export default {
  title: 'Components-TP1/ButtonSize',
  component: ButtonSize,
};


const Template = (args) => <ButtonSize {...args} />;


export const SmallButton = Template.bind({})
SmallButton.args = {
  variantType: "primary",
  sizeType: "sm"
}

export const MediumButton = Template.bind({})
MediumButton.args = {
  variantType: "primary",
  sizeType: "md"
}

export const LargeButton = Template.bind({})
LargeButton.args = {
  variantType: "primary",
  sizeType: "lg"
}
