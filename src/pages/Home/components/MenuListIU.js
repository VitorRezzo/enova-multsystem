//React funções
import React from "react";

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

export const ListMenu = () => {
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

      <ListItem button onClick={() => window.electron.openserviceOSWindow()}>
        <ListItemIcon>
          <ThumbsUpDownIcon />
        </ListItemIcon>
        <ListItemText primary="Atendimentos" />
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
