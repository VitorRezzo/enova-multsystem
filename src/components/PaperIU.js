import React from "react";
import {
  MenuItem,
  FormControl,
  InputLabel,
  Input,
  Select,
} from "@material-ui/core/";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

//material iu estilos
import styled from "@material-ui/styled-engine-sc/";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

const FormControlNew = styled(FormControl)({
  "& label.Mui-focused": {
    color: "#F2B138",
  },
  "& label": {
    color: "#768591",
  },
  "& .MuiInputBase-root": {
    color: "#A8C0CE",
  },
});

function Myfrase(label, name) {
  switch (label || name) {
    case "OS":
      return (
        <Typography variant="h6">Digite a OS para esse Atendimento!</Typography>
      );
      break;
    case "PT":
      return <Typography variant="h6">Digite a PT do cliente!</Typography>;
      break;
    case "Cliente":
      return <Typography variant="h6">Digite o nome do cliente !</Typography>;
      break;
    case "data":
      return (
        <Typography variant="h6">
          Escolha uma data para esse Atendimento!
        </Typography>
      );
      break;
  }
}

export const PaperInput = ({ label, name, type, width }, props) => {
  return (
    <Paper
      sx={{
        display: "grid",
        marginTop: "6%",
        marginRight: "8%",
        marginLeft: "8%",
        height: "160px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {Myfrase(label, name)}

      <FormControlNew>
        <InputLabel htmlFor="component-input">{label}</InputLabel>
        <Input
          required={true}
          label={label}
          name={name}
          type={type}
          rows={3}
          multiline={
            name === "descricao" || name === "instrucao" ? true : false
          }
          sx={{ width: width }}
        />
      </FormControlNew>
    </Paper>
  );
};

export const PaperSelect = ({ label, name, options, width, click }, props) => {
  return (
    <Paper
      sx={{
        display: "grid",
        marginTop: "6%",
        marginRight: "8%",
        marginLeft: "8%",
        height: "160px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h6">
        {label === "Atividade"
          ? "Selecione atividade que será realizada!"
          : "Selecione o responsavel por esse atendimento!"}
      </Typography>

      <FormControlNew variant="standard">
        <InputLabel htmlFor="component-select">{label}</InputLabel>
        <Select
          size="small"
          multiline
          name={name}
          label={label}
          required={true}
          onClick={click}
          MenuProps={MenuProps}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>

          {options.map((option) => (
            <MenuItem value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControlNew>
    </Paper>
  );
};
