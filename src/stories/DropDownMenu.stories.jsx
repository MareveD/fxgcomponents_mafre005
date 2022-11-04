import React from 'react';
import './style.css'

import { DropDownMenu } from '../components/DropDownMenu/DropDownMenu';

export default {
  title: 'Components-TP1/DropDownMenu',
  component: DropDownMenu
};

const Template = (args) => <DropDownMenu {...args} />;


export const LinksEnabled = Template.bind({});
LinksEnabled.args = {
  text: "Links Enabled",
  linkDisabled: false,
  dangerEnable: false
};

export const LinksDisabled = Template.bind({});
LinksDisabled.args = {
  text: "Links Disabled",
  linkDisabled: true,
  dangerEnable: false
};

export const Danger = Template.bind({});
Danger.args = {
  text: "Danger",
  dangerEnable: true
};