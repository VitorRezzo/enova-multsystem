import React from "react";
import { MenuItem, FormControl, InputLabel,FilledInput , Select } from "@material-ui/core/";
import Grid from "@material-ui/core/Grid";


//material iu estilos
import styled from "@material-ui/styled-engine-sc/";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

const FormControlNew = styled(FormControl)({
  "& label.Mui-focused": {
    color: "#F2B138",
  },
  "& label": {
    color: "#768591",
  },
  "& .MuiInputBase-root": {
    color: "#A8C0CE",
  },

});
export const FormInput = ({ label, name, type ,width}, props) => {
  return (
    <Grid item xs={12} >
     <FormControlNew variant="filled" sx={{width: '100px'}}  >
        <InputLabel htmlFor="component-filled">{label}</InputLabel>
        <FilledInput
        required={true}
        label={label}  
        name={name} 
        type={type} 
        rows={3} 
        
     
        multiline={name === 'descricao' || name === 'instrucao'  ? true : false} 
        />
      </FormControlNew>
    </Grid>
  );
};

export const FormSelect = ({ label, name, options,width,click }, props) => {
  return (
    <Grid item xs={4}  >
      <FormControlNew  variant="filled"   >
        <InputLabel htmlFor="component-filled">{label}</InputLabel>
        <Select
         size="small"
          multiline
         name={name}    
         label={label} 
         required={true}  
         onClick={click}  
         MenuProps={MenuProps}
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
