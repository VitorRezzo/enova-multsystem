//React funções
import React, { useState } from "react";

//material iu  icones
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ThumbsUpDownIcon from "@material-ui/icons/ThumbsUpDown";

//material iu componentes
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Popover from "@material-ui/core/Popover";
import { makeStyles } from "@material-ui/styles";

export const ListMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorUser, setAnchorUser] = useState(null);

  const open = Boolean(anchorEl);
  const openuser = Boolean(anchorUser);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorUser(null);
  };

  const useStyles = makeStyles((theme: Theme) => ({
    menu: {
      "& .MuiPaper-root": {
        background: "linear-gradient(90deg, #F28705 35%, #F2B705 60% )",
        borderRadius: 2,
      },
    },
  }));

  const classes = useStyles();

  return (
    <List sx={{ height: "90vh" }}>
      <ListItem button={true}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>

      <ListItem
        onMouseEnter={(event) => setAnchorUser(event.currentTarget)}
        button
      >
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Usuarios" />

        <Popover
          className={classes.menu}
          anchorEl={anchorUser}
          elevation={0}
          open={openuser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={handleClose}
        >
          <MenuItem onClick={() => window.electron.openuserCadWindow()}>
            Cadastro
          </MenuItem>
        </Popover>
      </ListItem>

      <ListItem onMouseEnter={handleOpen} button>
        <ListItemIcon>
          <ThumbsUpDownIcon />
        </ListItemIcon>
        <ListItemText primary="Atendimentos" />
        <Popover
          className={classes.menu}
          anchorEl={anchorEl}
          elevation={0}
          open={open}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={handleClose}
        >
          <MenuItem onClick={() => window.electron.opensuporteWindow()}>
            Suporte
          </MenuItem>
          <MenuItem>Instalação</MenuItem>
        </Popover>
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <AssessmentIcon />
        </ListItemIcon>
        <ListItemText primary="Graficos" />
      </ListItem>
    </List>
  );
};
