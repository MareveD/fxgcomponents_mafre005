import React from 'react'
import './style.css'

import { AntdCard } from '../components/Card/Card';

export default {
  title: "Components-TP1/AntDCard",
  component: AntdCard,
};

const Template = (args) => <AntdCard {...args} />;

export const DefaultSize = Template.bind({});
DefaultSize.args = {
    title: "Default Size",
    extra: <a href="#">More</a>,
    width: 500
};

export const SmallSize = Template.bind({});
SmallSize.args = {
    size: "small",
    title: "Small Size",
    extra: <a href="#">More</a>,
    width: 300
};

export const NoHeader = Template.bind({});
NoHeader.args = {
    width: 300
};
