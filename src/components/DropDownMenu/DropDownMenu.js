import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

export const DropDownMenu = ({text, linkDisabled, dangerEnable}) => {

  const disabled = {
    linkDisabled,
  }

  const danger = {
    dangerEnable,
  }
    
  return (
    <Dropdown overlay={
        <Menu
      items={[
        {
          key: '1',
          label: (
            <a rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          ),
          disabled: linkDisabled,
          danger: dangerEnable,
        },
        {
          key: '2',
          label: (
            <a rel="noopener noreferrer" href="https://www.aliyun.com">
              2nd menu item
            </a>
          ),
          icon: <SmileOutlined />,
          disabled: linkDisabled,
          danger: dangerEnable,
        },
        {
          key: '3',
          label: (
            <a rel="noopener noreferrer" href="https://www.luohanacademy.com">
              3rd menu item
            </a>
          ),
          disabled: linkDisabled,
          danger: dangerEnable,
        },
      ]}
    />
    }>
      <a onClick={e => e.preventDefault()}>
        <Space>
          {text}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  ); 
}

DropDownMenu.propTypes = {
  text: PropTypes.string,
  linkDisabled: PropTypes.bool,
  dangerEnable: PropTypes.bool
};