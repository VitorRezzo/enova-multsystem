import React from "react";
import { MenuItem, FormControl, Select, InputLabel } from "@material-ui/core/";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

//material iu estilos
import styled from "@material-ui/styled-engine-sc/";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 230,
      marginTop: "15px",
    },
  },
};

export const FormControlNew = styled(FormControl)({
  "& label.Mui-focused": {
    color: "orange",
    fontWeight: "bold",
  },
  "& label": {
    color: "#6C757D",
  },
  "& .MuiInputBase-root": {
    color: "#212529",
    backgroundColor: "#e9ecef",
    "&:hover fieldset": {
      borderColor: "#f48c06",
    },
    "&.Mui-focused fieldset": {
      borderColor: "orange",
    },
  },
});

export const FormSelect = (
  { label, name, options, width, height, click },
  props
) => {
  return (
    <Grid item>
      <FormControlNew>
        <InputLabel htmlFor="component-select">{label}</InputLabel>
        <Select
          size="small"
          multiline
          name={name}
          label={label}
          required={true}
          onClick={click}
          MenuProps={MenuProps}
          sx={{ width: width, height: height }}
        >
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
