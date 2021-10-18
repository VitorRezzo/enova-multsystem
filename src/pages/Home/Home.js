//React funções
import React,{ useState} from 'react';

//funções do firebase
import firebase from '../../config/Firebase';

//Logo marca da empresa
import Logo from '../../img/EnovaLogo.png';

//material iu  icones
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import MeetingRoomRoundedIcon from '@material-ui/icons/MeetingRoomRounded';

//material iu componentes
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import ListItemText from '@material-ui/core/ListItemText';
import { createTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';

//Componentes personalizado
import HeaderWind from '../../components/HeaderWind';
import {ListMenu} from './components/MenuListIU.js';

function Home(){
const theme = createTheme();
const drawerWidth=220;


const [openDrawer, setopendrawer] = useState(true);

  function StatusDrawer(){
     if(openDrawer === false){
      setopendrawer(true)
      }else{
        setopendrawer(false)
      }
  }

    const logout = () =>{

    firebase.auth().signOut()
    
    window.electron.backLoginWindow()

    }

const openServiceOS = () => {
    window.electron.openserviceOSWindow()
}

    return(
     
    <Box sx={{height: '100vh',width:'100vw',background:  '#293443'}}>

        <HeaderWind nameWind="Home"/>

        <Drawer
          sx={{
            flexShrink: 0,
            '& .MuiDrawer-paper': {
               boxSizing: 'border-box',
              background: 'linear-gradient(to bottom right, #F2B705 10%, #F28705 60% )',
               overflowX: [openDrawer ?  'hidden' : 'auto'], 
                width: [openDrawer ? theme.spacing(7) : drawerWidth],
                [openDrawer ? theme.breakpoints.up('sm') : null]:{width: theme.spacing(7)},
                
                
              }
          }}

          variant="permanent"
          open={openDrawer}
       >
           

            
    

        <Grid container
            spacing={7}       
          >
            {openDrawer ?
            null :<Grid item xs={4} sx={{marginLeft:'30%',marginTop:'2%'}} > <img style={{width: '45px', height: '25px'}}src={Logo} alt="logo enova"/>
            </Grid>
            }
            <Grid item  >
        <IconButton  onClick={()=> StatusDrawer()} >
         {openDrawer  ? <MenuIcon sx={{marginLeft:"50%",color:'#293443'}} /> : <ChevronLeftIcon /> }
        </IconButton>
        </Grid>
       </Grid>
        
        <Divider/>

      
          <ListMenu />
        
        

        <Divider />
        <Toolbar sx={{
              display: 'flex',
              flexDirection:'column',
              alignItems: 'center',
              justifyContent: 'center',
              px: [1],
            }}>
          <IconButton  onClick={logout}><MeetingRoomRoundedIcon/></IconButton>
          <ListItemText >Logout</ListItemText>
        </Toolbar>

        </Drawer>
        
       
    
    </Box>



        

    );

}



export default Home;