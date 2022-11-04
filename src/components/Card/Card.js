import React from "react";
import { Card } from "antd";
import PropTypes from 'prop-types';

export const AntdCard = ({title, size, extra, width}) => {

  return (
<>
    <Card
    size={size}
      title={title}
      extra={extra}
      style = {{
        width: width
      }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </>
);
};

AntdCard.propTypes = {
    width: PropTypes.number,
  };