import Logo from '../../img/EnovaLogo.png';
import firebase from '../../config/Firebase';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import React from 'react';
import TextFieldNew from './components/TextFieldNew.js'


function Login() { 



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
    
    
    
    <Container  component="main" maxWidth="xs" sx={{ borderRadius: 2, background:  '#293443'}} >
   
        <Box >
          <Grid sx={{width:'100%', height:'5px'}}>
            <Button onClick={exit}  >x</Button>
            <Button onClick={min}   >--</Button>
            </Grid>
        </Box>
      
        <Box
          sx={{
            paddingTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '80vh'
          }}
        >
        <Box  sx={{ mt: 1, mb: 1 }}>
              <img style={{width: '60px', height: '50px'}}src={Logo} alt="logo enova"/>
        </Box >

          <Box component="form"  onSubmit={handleSubmit}  noValidate sx={{ mt: 1 }}>
          
              <TextFieldNew
              margin="normal"
              fullWidth
              id="email"
              type="email"
              label="Email"
              name="email"
              autoComplete="email"
              size="small"
               //variant="filled"
               InputProps={{ disableUnderline: true }}
              />

  
            <TextFieldNew
              margin="normal"
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              size="small"
              
            />
            
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 2, color:"#242840", mb: 1,width:'150px', marginLeft:"23%" ,marginRight:"25%", borderRadius:3,  background: 'linear-gradient(to bottom right, #F2B705 10%, #F28705 60% )'}}
              
            >
              ENTRAR
            </Button>

          </Box>
          
        </Box>
     </Container>  
     
   
    
  );
  
}

export default Login;