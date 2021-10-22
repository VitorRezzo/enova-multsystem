//React funções
import React, { useState} from "react";

//Logo marca da empresa
import Logo from "../../img/EnovaLogoMenu.png";

//material iu  icones
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";

//material iu componentes
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { createTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

//Componentes personalizado
import HeaderWind from "../../components/HeaderWind";
import TableList from "../../components/TableList";

import { ListMenu } from "./components/MenuListIU.js";
import { Barchart } from "./components/Barchart.js";
import { Piechart } from "./components/Piechart.js";



export default function Home() {
  const theme = createTheme();

  const drawerWidth = 240;

  const [openDrawer, setopendrawer] = useState(true);
  

  function StatusDrawer() {
    if (openDrawer === false) {
      
      setopendrawer(true);
    } else {
      setopendrawer(false);
    }
  }

  return (
    <Box sx={{ height: "100vh", width: "100vw", background: "#293443" }}>
      <HeaderWind nameWind="Home" />
      <Drawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            background:"linear-gradient(to bottom right, #F2B705 10%, #F28705 60% )",   
            overflowX: [openDrawer ? "hidden" : "auto"],
            width: [openDrawer ? theme.spacing(7) : drawerWidth],
            [openDrawer ? theme.breakpoints.up("sm") : null]: {
              width: theme.spacing(7),
            },
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          },
        }}
        variant="permanent"
        open={openDrawer}
      >
        
         
          
        { openDrawer ?
        <Grid 
          container 
          direction="row" 
          justifyContent="center"
          >
          <Grid item  >
            <IconButton onClick={() => StatusDrawer()}>   
              <MenuIcon />
            </IconButton>
            </Grid>
            </Grid>
              :
            <Grid 
            container
            direction="row" 
            justifyContent="flex-end"
            alignItems="flex-end" 
            spacing={6}
            >
                <Grid item  >
                <img   src={Logo} alt="logo enova" />
                </Grid>
               <Grid item >
               <IconButton onClick={() => StatusDrawer()}>
                
               <ChevronLeftIcon />
               
               </IconButton>
               </Grid>
            </Grid>
    
         }
        

        <Divider />
        <ListMenu />
        <Divider />

      </Drawer>

      <Container
        maxWidth="lg"
        sx={{
          mt: 2,
          mb: 2,
          marginLeft: [openDrawer ? "15%" : "25%"],
          width: [
            openDrawer
              ? 
              `calc(50% + ${300}px)`
              : 
              `calc(40% + ${300}px)`,
          ],
          transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Grid container spacing={3} >
          <Grid item xs={7} >
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 250,
               
              }}
            >
              <Typography color="primary" variant="h6" component="div">
                Desempenho Equipes
              </Typography>
              <Barchart />
            </Paper>
          </Grid>

          <Grid item  sx={{marginLeft:"8%"}}xs={4} >
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 250,
                
              }}
            >
              <Typography color="primary" variant="h6" component="div">
                Chamados
              </Typography>
              <Piechart />
            </Paper>
          </Grid>

          <Grid item  xs={12} >
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 250,
               
              }}
            >
              <Typography color="primary" variant="h6" component="div">
                Atividades Recentes
              </Typography>
              <TableList />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
