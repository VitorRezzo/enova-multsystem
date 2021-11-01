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

export const ListMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <List sx={{ height: "90vh" }}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>

      <ListItem button onClick={() => window.electron.openuserCadWindow()}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Usuarios" />
      </ListItem>

      <ListItem
        sx={{ WebkitAppRegion: "no-drag" }}
        onMouseEnter={handleOpen}
        button
      >
        <ListItemIcon>
          <ThumbsUpDownIcon />
        </ListItemIcon>
        <ListItemText primary="Atendimentos" />
        <Popover
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          sx={{
            pointerEvents: "none",
          }}
          anchorEl={anchorEl}
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
          disableFocus
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
