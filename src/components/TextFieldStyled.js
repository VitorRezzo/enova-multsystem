import { TextField } from "@material-ui/core/";

//material iu estilos
import styled from "@material-ui/styled-engine-sc/";

export const TextFieldIU = styled(TextField)({
  "& label.Mui-focused": {
    color: "#f48c06",
    fontWeight: "bold",
  },
  "& label": {
    color: "#6C757D",
  },
  "& .MuiInputBase-root": {
    color: "#212529",
    backgroundColor: "#e9ecef",

    "&:hover fieldset": {
      borderColor: "#f48c06",
    },
    "&.Mui-focused fieldset": {
      borderColor: "orange",
    },
  },
});
