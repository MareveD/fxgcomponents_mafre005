import PropTypes from "prop-types"
import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
function ButtonType({typeType = "", valueType = ""}) {

  const type = {
    typeType,
  }

  const value = {
    valueType,
  }

  return (

    <>
      <Button as="input" type={typeType} value={valueType}/>{' '}
    </>
  );
}


ButtonType.propTypes = {
  typeType: PropTypes.string,
  valueType: PropTypes.string,
}

export default ButtonType