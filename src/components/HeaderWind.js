//React funções
import React, { useState } from "react";

//funções do firebase
import firebase from "../config/Firebase";

//material iu  icones
import CloseIcon from "@material-ui/icons/Close";
import MinimizeIcon from "@material-ui/icons/Minimize";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
//material iu componentes
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import { useGlobalUse } from "./GlobalUse";

//Cabeçalho com botão fechar e minimizar para as janelas do aplicativo
export default function HeaderWind({ type, nameWind }, props) {
  const { userLog } = useGlobalUse();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const close = () => {
    switch (nameWind) {
      case "Suporte":
        window.electron.closesuporteWindow();
        break;
      case "UserCad":
        window.electron.closeuserCadWindow();
        break;
      default:
        window.electron.closeWindow();
    }
  };

  const minimize = () => {
    switch (nameWind) {
      case "Login":
        window.electron.minloginWindow();
        break;
      case "Home":
        window.electron.minhomeWindow();
        break;
      case "Suporte":
        window.electron.minsuporteWindow();
        break;
      case "UserCad":
        window.electron.minusercadWindow();
        break;
      default:
        return null;
    }
  };
  const logout = () => {
    firebase.auth().signOut();
    window.electron.backLoginWindow();
  };

  return (
    <Box
      sx={{
        height: "5vh",
        WebkitAppRegion: type,
        borderRadius: 1,

        width: "100%",
      }}
    >
      <Grid container direction="row" justifyContent="flex-end">
        <Grid item>
          {nameWind === "Home" ? (
            <Typography
              sx={{ color: "#768591", fontSize: "14px", marginTop: "8px" }}
              variant="h2"
              component="div"
            >
              Seja Bem-Vindo! {userLog}
              <IconButton
                sx={{ WebkitAppRegion: "no-drag" }}
                onClick={handleClick}
              >
                <AccountBoxIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem>Perfil</MenuItem>
                <MenuItem onClick={logout}>Sair</MenuItem>
              </Menu>
            </Typography>
          ) : null}
        </Grid>
        <Grid item>
          <IconButton
            onClick={minimize}
            sx={{
              WebkitAppRegion: "no-drag",
              marginTop: "1px",
              color: "orange",
            }}
          >
            <MinimizeIcon sx={{ marginTop: "-13px" }} />
          </IconButton>

          <IconButton
            onClick={close}
            sx={{
              WebkitAppRegion: "no-drag",
              marginTop: "1px",
              color: "orange",
            }}
          >
            <CloseIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}
