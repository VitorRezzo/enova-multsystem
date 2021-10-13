import Logo from '../img/EnovaLogo.png';
import '../App.css';
import firebase from '../config/Firebase';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import orange from '@material-ui/core/colors/orange';
import React,{useState} from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { borderRadius, color } from '@material-ui/system';
import { withStyles } from '@material-ui/core/styles';


function Login() { 

  const theme = createTheme({
    palette: {
      primary: {
        main: orange[400], //this overide blue color
        
      },
      text:{
        secondary:orange[200],
        
      },
      
    },
  });
  







  async function handleSubmit ( e ) {
      e.preventDefault();
  try{
    const data = new FormData(e.currentTarget);
    
   await firebase.auth().signInWithEmailAndPassword(data.get('email'),data.get('password'))
  
   window.electron.openhomeWindow()
  }catch(error){
    console.log(error)
  }
  
  }

  const exit = () => {
    window.electron.exitWindow()
}

const min = () => {
  window.electron.minWindow()
}

  return (
    
    
    <ThemeProvider theme={theme}>
    <Container  component="main" maxWidth="xs" sx={{ borderRadius: 2, background:  '#293443'}} >

        <div className="App-header" >
          <Grid>
            <Button onClick={exit}  >x</Button>
            <Button onClick={min}   >--</Button>
            </Grid>
        </div>
      
        <Box
          sx={{
            paddingTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '80vh'
          }}
        >
      <Grid  sx={{ mt: 1, mb: 1 }}>
              <img className="App-logo" src={Logo} />
        </Grid >
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            
            <TextField
              margin="normal"
              required 
              fullWidth
              placeholder="enova@enovaenergia.com.br"
              id="email"
              type="email"
              label="Email"
              name="email"
              autoComplete="email"
              size="small"
              color="primary"
              focused
           
            />

            <TextField
              margin="normal"
              required
              fullWidth
              placeholder="******"
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              size="small"
              color="primary"
              focused
            />
            
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 2, mb: 1,width:'150px', marginLeft:"24%" ,marginRight:"25%", borderRadius:3,  background: 'linear-gradient(to bottom right, #F2B705 10%, #F28705 60% )'}}
              
            >
              ENTRAR
            </Button>

          </Box>
          
        </Box>
     </Container>  
     </ThemeProvider>
   
    
  );
  
}

export default Login;