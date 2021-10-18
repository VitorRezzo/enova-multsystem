//React funções
import React from "react";

//material iu  icones
import CloseIcon from "@material-ui/icons/Close";
import MinimizeIcon from "@material-ui/icons/Minimize";

//material iu componentes
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";

//Cabeçalho com botão fechar e minimizar para as janelas do aplicativo
export default function HeaderWind({ type, nameWind }, props) {
  const close = () => {
    switch (nameWind) {
      case "ServiceOS":
        window.electron.closeserviceOSWindow();
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
      case "Home":
        window.electron.minhomeWindow();
        break;
      case "ServiceOS":
        window.electron.minserviceosWindow();
        break;
      case "UserCad":
        window.electron.minusercadWindow();
        break;
      default:
        window.electron.minloginWindow();
    }
  };

  return (
    <Box sx={{ height: "6vh", WebkitAppRegion: type, borderRadius: 1 }}>
      <Grid container direction="row" justifyContent="flex-end">
        <IconButton
          onClick={minimize}
          sx={{ WebkitAppRegion: "no-drag", marginTop: "1px", color: "orange" }}
        >
          <MinimizeIcon sx={{ marginTop: "-13px" }} />
        </IconButton>

        <IconButton
          onClick={close}
          sx={{ WebkitAppRegion: "no-drag", marginTop: "1px", color: "orange" }}
        >
          <CloseIcon />
        </IconButton>
      </Grid>
    </Box>
  );
}
