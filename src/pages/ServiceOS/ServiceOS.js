import React, { useState, useEffect } from "react";

import { firestore } from "../../config/Firebase";


import AddCircleIcon from '@material-ui/icons/AddCircle';

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import HeaderWind from "../../components/HeaderWind";
import { FormInput, FormSelect } from "../../components/FormsIU";
import { useGlobalUse } from "../../components/GlobalUse";

function ServiceOs() {
  const [options, setOptions] = useState([]);
  const optionsAtividades = ["SUPORTE", "INSTALAÇÃO"];

  const { userLog, dataAtual } = useGlobalUse();

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
      await firestore.collection(e.target.atividade.value).add({
        Atividade: e.target.atividade.value,
        OS: e.target.os.value,
        PT: e.target.pt.value,
        Solicitante: userLog,
        Responsavel: e.target.responsavel.value,
        DataAgenda: e.target.data.value,
        Cliente: e.target.cliente.value,
        Instrucao: e.target.instrucao.value,
        Descricao: e.target.descricao.value,
        Endereco: e.target.endereco.value,
        Localizacao: e.target.localizacao.value,
        DataRegistro: dataAtual,
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
      <Container >
        <HeaderWind nameWind="ServiceOS" type="drag" />
        <Paper sx={{backgroundColor: "#F2F2F2" , borderRadius: "3px" ,margin:'10px',marginTop: "25px"}}>
        <form   onSubmit={Submit}>
          <Grid container  spacing={2} >
            <FormSelect
              label="Atividade"
              name="atividade"
              options={optionsAtividades}
            />
            <FormSelect
              label="Responsavel"
              name="responsavel"
              options={options}
            />
            <FormInput label="OS" name="os" type="text" />

            <FormInput label="PT" name="pt" type="text" />

            <FormInput  label="Cliente" name="cliente" type="text" />

            <FormInput name="data" type="date" />

            <FormInput label="Endereço" name="endereco" type="text" />

            <FormInput label="Localização" name="localizacao" type="text" />

            <FormInput  label="Descrição" name="descricao" type="text" />

            <FormInput label="Instruções" name="instrucao" type="text" />
            <Grid item xs={6}>
              <IconButton
                type="submit"
                sx={{
                  color: "#006616",
                  width:'22px',
                  height:'22px',
                  marginTop:'25%',
                  borderRadius: 10,
                  '&:hover': {
                      color: "#009921",
                    },
                }}
              >
                <AddCircleIcon />
              </IconButton>
            </Grid>
          </Grid>
        </form>
        </Paper>
      </Container>
    </Box>
  );
}

export default ServiceOs;
