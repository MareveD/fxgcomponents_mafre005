import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import PropTypes from 'prop-types';

export const SelectOtherProps = ({disabled, error, text, label}) => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  let valueString = "";
  if (age == 10) valueString = "Ten";
  if (age == 20) valueString = "Twenty";
  if (age == 30) valueString = "Thirty";

  let renderValue = ""
  if (error) renderValue = (value) => `⚠️  - ${value}`
  else renderValue = () => valueString


  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} disabled={disabled} error={error}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label={label}
          onChange={handleChange}
          renderValue={renderValue}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>{text}</FormHelperText>
      </FormControl>
    </div>
  );
}

SelectOtherProps.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  text: PropTypes.string,
  label: PropTypes.string
};

