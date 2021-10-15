import React,{ useState} from 'react';
import firebase from '../../config/Firebase';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CloseIcon  from '@material-ui/icons/Close';
import MinimizeIcon from '@material-ui/icons/Minimize';
import Grid from '@material-ui/core/Grid';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';





function Home(){

const drawerWidthmax=220;
const drawerWidthmin=35;

let [drawerWidth, setdrawerWidth] = useState(drawerWidthmin);

  function StatusDrawer(){
     if(drawerWidth !== drawerWidthmax){
         setdrawerWidth(drawerWidthmax)
      }else{
      setdrawerWidth(drawerWidthmin)
      }
  }


  const exit = () => {
    window.electron.exitWindow()
}

const min = () => {
  window.electron.minWindowhome()
}

    function logout(){

    firebase.auth().signOut()
    
    window.electron.exithomeWindow()

    }

const openServiceOS = () => {
    window.electron.openWindow()
}




    return(
     

   
    <Box sx={{height: '100vh',width:'100vw',background:  '#293443'}}>
        <Drawer
         sx={{
           
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: 'linear-gradient(to bottom right, #F2B705 10%, #F28705 60% )',
            
          },
          
        }}
        variant="permanent"
        open={true}
        >
        <Box sx={{alignItems: 'center', display: 'flex', justifyContent:"flex-end"  }}>
        <IconButton  onClick={()=> StatusDrawer()} >
         {drawerWidth === drawerWidthmin ? <MenuIcon sx={{color: '#293443'}} />: <ChevronLeftIcon />}
        </IconButton>
        </Box>


        </Drawer>
     
     <Box   
            sx={{ height:'1vh' }} 
        >
           <Grid  container direction="row" justifyContent="flex-end" >

            <IconButton onClick={min}  
            sx={{marginTop:'5px', color: 'orange'}} 
            >
            <MinimizeIcon   sx={{marginTop:'-13px'}}/> 
            </IconButton>

             <IconButton 
             size="small"
             onClick={exit} 
             sx={{marginTop:'5px',color: 'orange'}} 
             >  
             <CloseIcon />
             </IconButton>

            </Grid>
        </Box >
    </Box>



        

    );

}



export default Home;