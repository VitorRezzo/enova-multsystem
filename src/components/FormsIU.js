import React from 'react';
import  
{
MenuItem,
FormControl,
InputLabel,
Select
}  from '@material-ui/core/';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

//material iu estilos
import styled  from '@material-ui/styled-engine-sc/';
const TextFieldNew = styled(TextField)({
    '& label.Mui-focused': {
        color: '#F2B138',
      },
      '& label':{
        color: 'white',
      },
       '& .MuiInputBase-root': {
          color: 'white',
          
        },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#F2B138',
        
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
         border: 'solid 1px #F2B138',
          borderRadius:'10px',
         
        },
        '&:hover fieldset': {
          borderColor: '#F2B138',
        },
        '&.Mui-focused fieldset': {
        borderColor: '#F2B138',
        },
      },
})
export const FormInput = ({ label,name,type},props) => {
    return (
    <Grid item xs={6} >
    <TextFieldNew 
    label={label} 
    fullWidth 
    name={name} 
    type={type}
    size="small"
    />
    </Grid>
    );
}

export const FormSelect = ({label,value,options,Change,Click},props) => {
    return (
        <Grid item xs={6} >
    <FormControl fullWidth >
        <InputLabel>{label}</InputLabel>
    <Select
          label={label}
          value={value}
          onChange={Change}
          onClick={Click}
          
        >
        <MenuItem value=''>
            <em>None</em>
          </MenuItem>

          {options.map((option) => (
         <MenuItem  value={option}>{option}</MenuItem>
          ))
            }
        </Select>
    </FormControl>
    </Grid>
    );
}



