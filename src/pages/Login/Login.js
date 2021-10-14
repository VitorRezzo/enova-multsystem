import Logo from '../../img/EnovaLogo.png';
import firebase from '../../config/Firebase';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import React, { useState,useEffect} from 'react';
import TextFieldNew from './components/TextFieldNew.js';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import CloseIcon  from '@material-ui/icons/Close';
import MinimizeIcon from '@material-ui/icons/Minimize';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import Alert from '@material-ui/core/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

function Login() { 

    const [values, setValues] = React.useState({
    password: '',
    showPassword: false
  });


  const [msgErro,setMgsErro] = useState(false);
  const [load,setLoad] = useState(false);
 
useEffect(() => { 
  
    setLoad(false);

},[]);

 const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };


   const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });

  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  async function handleSubmit ( e ) {
      e.preventDefault();
  const data = new FormData(e.currentTarget);
  try{
  
   setLoad(true) ; 
   await  firebase.auth().signInWithEmailAndPassword(data.get('email'),data.get('password')) 
    
   window.electron.openhomeWindow()
  }catch(error){
  setLoad(false);
  setMgsErro(true);
  }
  
  }

  const exit = () => {
    window.electron.exitWindow()
}

const min = () => {
  window.electron.minWindow()
}

  return (
    
    
    
    <Container onClick={() => setMgsErro(false)}  component="main" maxWidth="xs" sx={{ borderRadius: 2, background:  '#293443'}} >
   
        <Box    sx={{ WebkitAppRegion:'drag',height:'5vh' }} >
           <Grid  container direction="row" justifyContent="flex-end" >

            <IconButton onClick={min}  
            sx={{marginTop:'8px',WebkitAppRegion:'no-drag', color: 'orange'}} 
            >
            <MinimizeIcon   sx={{marginTop:'-11px'}}/> 
            </IconButton>

             <IconButton 
             size="small"
             onClick={exit} 
             sx={{marginTop:'8px',WebkitAppRegion:'no-drag',color: 'orange'}} 
             >  
             <CloseIcon />
             </IconButton>

            </Grid>
        </Box >
      
        <Box
          sx={{
            paddingTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '80vh'
          }}
        >
        <Box  sx={{ mt: -1, mb: 3 }}>
              <img style={{width: '115px', height: '65px'}}src={Logo} alt="logo enova"/>
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
              />

            <TextFieldNew
              margin="normal"
              fullWidth
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              name="password"
              label="Senha"
              id="password"
              autoComplete="current-password"
              size="small"
              onChange={handleChange('password')}
               InputProps={{
              endAdornment:(
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility   />}
                </IconButton>
              </InputAdornment>
              )
                } }
            />
         
            {msgErro ? <Alert sx={{ color: '#D9D8D7', fontWeight: '300',height:'20px', alignItems:'center'}} variant="filled"  severity="error">Usuario ou Senha Incorreto!</Alert> : null }

            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 2, color:"#D9D8D7", mb: 1,width:'150px', marginLeft:"23%" ,marginRight:"25%", borderRadius:3,  background: 'linear-gradient(to bottom right, #F2B705 10%, #F28705 60% )'}}
              
            >
            {load ? <CircularProgress size="30px" disableShrink color="inherit" /> : "ENTER" }
              
            </Button>
           
         
          </Box>
          
        </Box>
         
     
     
     </Container>  
    
  );
  
}

export default Login;