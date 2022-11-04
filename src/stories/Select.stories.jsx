import React from 'react';
import './style.css'

import { SelectOtherProps } from '../components/Select/Select';

export default {
  title: 'Components-TP1/Select',
  component: SelectOtherProps
};

const Template = (args) => <SelectOtherProps {...args} />;


export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    error: false,
    text: "Disabled",
    label: "Age"
};

export const Error = Template.bind({});
Error.args = {
    disabled: false,
    error: true,
    text: "Error",
    label: "Age"
};


export const Required = Template.bind({});
Required.args = {
    disabled: false,
    error: false,
    text: "Required",
    label: "Age*"
};