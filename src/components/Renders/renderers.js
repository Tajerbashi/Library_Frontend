import React from "react";
import _ from "lodash";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import { TextField, Select, InputLabel, FormControl } from "@mui/material";


export const RGHiddenField = (props) => {
  const { value, onChange } = props;

  return <input type="hidden" value={_.toString(value)} onChange={onChange} />;
};

export const RGLabelField = ({ value, label }) => {
  return value;
};

export const RGTextField = (props) => {
  const { label, name, value, errors, onChange, ...custom } = props;

  return (
    <TextField
      label={label}
      value={_.toString(value)}
      error={_.has(errors, `${name}`)}
      onChange={onChange}
      autoComplete={"off"}
      fullWidth
      {...custom}
    />
  );
};


export const RGCheckboxField = (props) => {
  const { label, checked, onChange, controlClassName } = props;
  if (checked) console.log(label);
  return label ? (
    <FormControlLabel
      classes={{ root: controlClassName || "mt-10" }}
      control={
        <Checkbox
          color="primary"
          checked={checked ? true : false}
          onChange={(e) => {
            onChange(e.target.checked);
          }}
        />
      }
      label={label}
    />
  ) : (
    <Checkbox
      color="primary"
      checked={checked ? true : false}
      onChange={(e) => {
        onChange(e.target.checked);
      }}
    />
  );
};

export const RGSelectField = (props) => {
  const { label, name, value, errors, onnChange, onChange, items, ...custom } = props;
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        value={_.toString(value)}
        error={_.has(errors, `${name}`)}
        onChange={(e) => {
          onChange(e.target.value);

          if (onnChange)
            onnChange(e.target.value);
        }}
        {...custom}
      >
        <MenuItem key={""} value="">انتخاب کنید</MenuItem>
        {items.map((item) => (
          <MenuItem key={item.value} value={_.toString(item.value)} selected={item.selected}>
            {item.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
