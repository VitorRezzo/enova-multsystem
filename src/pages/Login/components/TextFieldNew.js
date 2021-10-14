import styled  from '@material-ui/styled-engine-sc/';
import TextField from '@material-ui/core/TextField';


const TextFieldNew = styled(TextField)({
  '& label.Mui-focused': {
    color: '#F2B138',
  },
  '& label':{
    color: '#768591',
  },
   '& .MuiInputBase-root': {
      color: '#BFBFBF',
      
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
});

export default TextFieldNew;


