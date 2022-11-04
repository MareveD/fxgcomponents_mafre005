import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './style.css';

import ButtonColor from '../components/ButtonColor/ButtonColor';

export default {
  title: 'Components-TP1/ButtonColor',
  component: ButtonColor
};


const Template = (args) => <ButtonColor {...args} />;


export const PrimaryButton = Template.bind({})
PrimaryButton.args = {
  variantType: "primary",
}

export const SuccessButton = Template.bind({})
SuccessButton.args = {
  variantType: "success",
}

export const WarningButton = Template.bind({})
WarningButton.args = {
  variantType: "warning",
}
