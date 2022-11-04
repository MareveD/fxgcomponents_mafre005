import PropTypes from "prop-types"
import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function ButtonColor({variantType = ""}) {

  const variant = {
    variantType,
  }

  return (

    <>
      <Button variant={variantType}>
      {variantType}
      </Button>
      {' '}
    </>
  );
}


ButtonColor.propTypes = {
  variantType: PropTypes.string,
}

export default ButtonColor