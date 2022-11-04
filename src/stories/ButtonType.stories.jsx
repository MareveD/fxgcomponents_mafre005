import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './style.css';

import ButtonType from '../components/ButtonType/ButtonType';

export default {
  title: 'Components-TP1/ButtonType',
  component: ButtonType
};


const Template = (args) => <ButtonType {...args} />;


export const ButtonButton = Template.bind({})
ButtonButton.args = {
  typeType: "button",
  valueType: "button"
}

export const SubmitButton = Template.bind({})
SubmitButton.args = {
  typeType: "submit",
  valueType: "submit"
}

export const ResetButton = Template.bind({})
ResetButton.args = {
  typeType: "reset",
  valueType: "reset"
}
