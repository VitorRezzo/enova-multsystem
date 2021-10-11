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
import green from '@material-ui/core/colors/green';
import React,{useState} from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


function Login() { 

const theme = createTheme({
 
  palette: {
    secondary: {
      main: green[600],
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
    window.electron.exithomeWindow()
}

const min = () => {
  window.electron.minWindow()
}

  return (



        <div >

        <div  className="App-header">
          <header>
            <button onClick={exit} className="exit"></button>
            <button onClick={min} className="minimize"></button>
             
            </header>

     </div>
          
     
   
   

   

    <Container component="main" maxWidth="xs" sx={{background: 'linear-gradient(45deg, #2B3240 50%, #FFFF 45%)',}} >
  
    <CssBaseline />
      
        <Box
          sx={{
            paddingTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height:'96vh',
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
              id="email"
              type="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              variant="standard"
               size="small"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              variant="standard"
              autoComplete="current-password"
              size="small"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color='secondary'
            >
              ACESSAR
            </Button>

          </Box>
        </Box>
     </Container>  
    
    </div>
    
  );
  
}

export default Login;