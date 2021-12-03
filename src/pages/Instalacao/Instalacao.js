import React, { useState, useEffect } from "react";

import firebase, { firestore } from "../../config/Firebase";

import AddCircleIcon from "@material-ui/icons/AddCircle";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Autocomplete from "@material-ui/core/Autocomplete";
import Paper from "@material-ui/core/Paper";
import Alert from "@material-ui/core/Alert";
import InputAdornment from "@material-ui/core/InputAdornment";
import Tooltip from "@material-ui/core/Tooltip";
import { Input, Fab } from "@material-ui/core";

import DateTimePicker from "@material-ui/lab/DateTimePicker";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import { ptBR } from "date-fns/locale";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";

import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";

import HeaderWind from "../../components/HeaderWind";
import { TextFieldIU } from "../../components/TextFieldStyled";
import { useGlobalUse } from "../../components/GlobalUse";

function Instalacao() {
  const [name, setName] = useState([]);
  const [data, setData] = useState();
  const { userLog, userId } = useGlobalUse();
  const [msgalert, setMsgalert] = useState(true);
  const [showmsg, setShowMgs] = useState(false);
  const [arquivos, setArquivos] = useState([]);

  const SelectUser = () => {
    firestore.collection("USERS").onSnapshot((querySnapshot) => {
      setName(querySnapshot.docs.map((doc) => doc.data().Nome));
    });
  };

  useEffect(() => {
    SelectUser();
  }, []);

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  //função para aprecer a mensagem de alerta com delay para apagar o alerta da tela
  async function Showmsg() {
    setShowMgs(true);
    await sleep(3000);
    setShowMgs(false);
  }

  ///Listar arquivos do input file
  const ListArquivos = (arquivo) => {
    for (let i = 0; i < arquivo.length; i++) {
      const File = arquivo[i];
      File["id"] = Math.random();
      setArquivos((prevState) => [...prevState, File]);
    }
  };

  //upload para firebse storage
  const upload = (e) => {
    if (arquivos == null) return;
    arquivos.forEach((file) => {
      firebase
        .storage()
        .ref(`/${e.target.pt.value}/${userId}/${file.name}`)
        .put(file);
    });
  };

  const Submit = (e) => {
    e.preventDefault();

    try {
      firestore.collection("Servicos").add({
        Atividade: "Instalacao",
        PT: e.target.pt.value,
        Solicitante: userLog,
        Responsavel: e.target.responsavel.value,
        DataAgenda: e.target.data.value,
        Cliente: e.target.cliente.value,
        Inversor: e.target.inversor.value,
        Paineis: e.target.paineis.value,
        Endereco: e.target.endereco.value,
        instrucoes: e.target.instrucoes.value,
        Localizacao: e.target.localizacao.value,
        DataRegistro: firebase.firestore.Timestamp.now(),
        Status: "Abertos",
      });
      upload(e);
      setMsgalert(true);
    } catch (error) {
      setMsgalert(false);
    }

    Showmsg();
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <HeaderWind nameWind="Instalação" type="drag" />

      <Container component="form" onSubmit={Submit} sx={{ marginTop: "1%" }}>
        <Grid container spacing={0.8} sx={{ overflowY: "auto" }}>
          <Grid item xs={4}>
            <TextFieldIU
              variant="outlined"
              type="text"
              label="PT"
              name="pt"
              size="small"
              fullWidth={true}
              required={true}
            />
          </Grid>

          <Grid item xs={4}>
            <TextFieldIU
              variant="outlined"
              type="text"
              label="Cliente"
              name="cliente"
              size="small"
              required={true}
              fullWidth={true}
            />
          </Grid>

          <Grid item xs={4}>
            <TextFieldIU
              variant="outlined"
              type="text"
              label="Contato"
              name="contato"
              size="small"
              required={true}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={4}>
            <TextFieldIU
              variant="outlined"
              type="text"
              label="Inversor"
              name="inversor"
              size="small"
              required={true}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={4}>
            <TextFieldIU
              variant="outlined"
              type="text"
              label="Paineis"
              name="paineis"
              size="small"
              required={true}
              fullWidth={true}
            />
          </Grid>

          <Grid item xs={3}>
            <LocalizationProvider locale={ptBR} dateAdapter={AdapterDateFns}>
              <DateTimePicker
                label="Data"
                value={data}
                onChange={(value) => setData(value)}
                renderInput={(params) => (
                  <TextFieldIU
                    {...params}
                    required={true}
                    variant="outlined"
                    type="date"
                    name="data"
                    size="small"
                    fullWidth={true}
                  />
                )}
              />
            </LocalizationProvider>
          </Grid>

          <Grid item xs={5}>
            <TextFieldIU
              variant="outlined"
              type="text"
              label="Endereço"
              name="endereco"
              size="small"
              required={true}
              fullWidth={true}
            />
          </Grid>

          <Grid item xs={4}>
            <TextFieldIU
              variant="outlined"
              type="text"
              label="Localização"
              name="localizacao"
              size="small"
              required={true}
              fullWidth={true}
            />
          </Grid>

          <Grid item xs={3}>
            <Autocomplete
              options={name}
              renderInput={(params) => (
                <TextFieldIU
                  {...params}
                  variant="outlined"
                  name="responsavel"
                  label="Responsavel"
                  size="small"
                  required={true}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <TextFieldIU
              variant="outlined"
              multiline={true}
              rows={3}
              type="text"
              label="Instruções"
              name="instrucoes"
              fullWidth={true}
              required={true}
              sx={{ maxHeight: "170px" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <label htmlFor="arquivos">
                      <Input
                        style={{ display: "none" }}
                        name="arquivos"
                        id="arquivos"
                        type="file"
                        inputProps={{ multiple: true }}
                        onChange={(e) => ListArquivos(e.target.files)}
                      />
                      <Tooltip
                        title={
                          arquivos.length > 0
                            ? arquivos.map((row) => row.name + ", ")
                            : "vazio"
                        }
                      >
                        <Fab
                          color={arquivos.length <= 0 ? "" : "primary"}
                          size="small"
                          component="span"
                          aria-label="add"
                          onKeyDown={(e) => {
                            if (e.keyCode === 46) {
                              setArquivos("");
                            }
                          }}
                        >
                          <InsertDriveFileOutlinedIcon />
                        </Fab>
                      </Tooltip>
                    </label>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            height: "10px",
          }}
        >
          {showmsg ? (
            <Alert
              sx={{
                color: "#D9D8D7",
                fontWeight: "300",
                height: "8px",
                alignItems: "center",
                marginTop: "2%",
                marginLeft: "30%",
                float: "left",
                width: "200px",
                transition: "all 0.3s ease",
              }}
              variant="outlined"
              severity={msgalert ? "success" : "error"}
            >
              {msgalert === true
                ? "Atendimento agendado!"
                : "Falha ao agendar!"}
            </Alert>
          ) : null}

          <IconButton
            type="submit"
            sx={{
              color: "#006616",
              width: "22px",
              height: "22px",
              float: "right",
              marginTop: "2%",
              marginRight: "2%",
              borderRadius: 10,
              "&:hover": {
                color: "#009921",
              },
            }}
          >
            <AddCircleIcon />
          </IconButton>
        </Box>
        <Paper
          sx={{
            p: 2,
            marginTop: "5%",
            height: "280px",
            background: "#e9ecef",
            borderRadius: "2px",
          }}
          elevation={0}
        ></Paper>
      </Container>
    </Box>
  );
}

export default Instalacao;
