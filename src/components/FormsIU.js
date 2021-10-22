import React from "react";
import { MenuItem, FormControl, InputLabel, Select } from "@material-ui/core/";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

//material iu estilos
import styled from "@material-ui/styled-engine-sc/";
const TextFieldNew = styled(TextField)({
  "& label.Mui-focused": {
    color: "#F2B138",
  },
  "& label": {
    color: "white",
  },
  "& .MuiInputBase-root": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#F2B138",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "solid 1px #F2B138",
      borderRadius: "10px",
    },
    "&:hover fieldset": {
      borderColor: "#F2B138",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#F2B138",
    },
  },
});

const FormControlNew = styled(FormControl)({
  "& label.Mui-focused": {
    color: "#F2B138",
  },
  "& label": {
    color: "white",
  },
  "& .MuiInputBase-root": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#F2B138",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "solid 1px #F2B138",
      borderRadius: "10px",
    },
    "&:hover fieldset": {
      borderColor: "#F2B138",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#F2B138",
    },
  },
});
export const FormInput = ({ label, name, type }, props) => {
  return (
    <Grid item xs={3}>
      <TextFieldNew
        label={label}
       variant="filled"
        name={name}
        type={type}
        size="small"
      />
    </Grid>
  );
};

export const FormSelect = ({ label, name, options,click }, props) => {
  return (
    <Grid item xs={3}>
      <FormControlNew variant="filled">
        <InputLabel>{label}</InputLabel>
        <Select name={name} label={label} onClick={click}  >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>

          {options.map((option) => (
            <MenuItem value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControlNew>
    </Grid>
  );
};
