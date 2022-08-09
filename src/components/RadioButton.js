import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const RadioButton = ({items = [], valueRadio}) => {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Tipos</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={(event, value) => valueRadio(value)}
      >
        {items && items.map(({value, label}) => (
            <FormControlLabel key={label} value={value} control={<Radio />} label={label} />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButton