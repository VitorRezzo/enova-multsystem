import React, { useState, useEffect } from "react";

import { firestore } from "../../config/Firebase";

import AddCircleIcon from "@material-ui/icons/AddCircle";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import { InputLabel, OutlinedInput } from "@material-ui/core/";

import HeaderWind from "../../components/HeaderWind";

import { FormControlNew, FormSelect } from "../../components/FormControlIU";
import { useGlobalUse } from "../../components/GlobalUse";

function ServiceSuport() {
  const [options, setOptions] = useState([]);

  const { userLog, dataAtual, horaAtual } = useGlobalUse();

  useEffect(() => {
    const Filter = async () => {
      await firestore
        .collection("USERS")
        .get()
        .then((querySnapshot) => {
          setOptions(querySnapshot.docs.map((doc) => doc.data().Nome));
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    };
    Filter();
  }, []);

  async function Submit(e) {
    e.preventDefault();

    try {
      await firestore.collection("Servicos").add({
        OS: e.target.os.value,
        PT: e.target.pt.value,
        Solicitante: userLog,
        Responsavel: e.target.responsavel.value,
        DataAgenda: e.target.data.value,
        Cliente: e.target.cliente.value,
        Instrucao: e.target.instrucao.value,
        Problemas: e.target.problemas.value,
        Endereco: e.target.endereco.value,
        Localizacao: e.target.localizacao.value,
        DataRegistro: dataAtual,
        HoraRegistro: horaAtual,
        Status: "Abertos",
      });
      alert("Atendimento agendado ");
    } catch (error) {
      alert("dados não enviados ");
    }
  }

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <HeaderWind nameWind="ServiceSuport" type="drag" />
      <Container sx={{ marginTop: "2%" }}>
        <Grid container spacing={1.5}>
          <form onSubmit={Submit}>
            <Grid item>
              <FormControlNew>
                <InputLabel htmlFor="my-outlined">PT</InputLabel>
                <OutlinedInput type="text" name="pt" />
              </FormControlNew>
            </Grid>

            <Grid item>
              <FormControlNew>
                <InputLabel htmlFor="my-outlined">Cliente</InputLabel>
                <OutlinedInput type="text" name="cliente" />
              </FormControlNew>
            </Grid>

            <Grid item>
              <FormControlNew>
                <InputLabel htmlFor="my-outlined">Data</InputLabel>
                <OutlinedInput type="date" name="data" />
              </FormControlNew>
            </Grid>

            <Grid item>
              <FormSelect
                label="Responsavel"
                name="responsavel"
                options={options}
              />
            </Grid>

            <Grid item>
              <FormSelect
                label="Problemas"
                name="problemas"
                options={options}
              />
            </Grid>

            <Grid item>
              <FormControlNew>
                <InputLabel htmlFor="my-outlined">Endereço</InputLabel>
                <OutlinedInput type="text" name="endereco" />
              </FormControlNew>
            </Grid>

            <Grid item>
              <FormControlNew>
                <InputLabel htmlFor="my-outlined">Localização</InputLabel>
                <OutlinedInput type="text" name="localizacao" />
              </FormControlNew>
            </Grid>
          </form>
        </Grid>
        <IconButton
          type="submit"
          sx={{
            color: "#006616",
            width: "22px",
            height: "22px",
            float: "right",
            marginRight: "2%",
            marginTop: "2%",
            borderRadius: 10,
            "&:hover": {
              color: "#009921",
            },
          }}
        >
          <AddCircleIcon />
        </IconButton>
      </Container>
    </Box>
  );
}

export default Instalacao;
