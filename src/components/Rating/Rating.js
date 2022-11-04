import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';

export const RatingSize = ({name, size}) => {
    return (
      <Stack spacing={1}>
        <Rating name={name} defaultValue={2} size={size} />
      </Stack>
    );
  }

  RatingSize.propTypes = {
    name: PropTypes.string,
    size: PropTypes.string
  };
