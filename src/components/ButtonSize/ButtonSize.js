import PropTypes from "prop-types"
import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function ButtonSize({variantType = "", sizeType=""}) {

  const variant = {
    variantType,
  }

  const size = {
    sizeType,
  }

  return (

    <>
      <Button variant={variantType} size={sizeType}>
      {variantType}
      </Button>
      {' '}
    </>
  );
}


ButtonSize.propTypes = {
  variantType: PropTypes.string,
  sizeType: PropTypes.string
}

export default ButtonSize