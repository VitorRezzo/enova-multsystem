import React, { useState, useEffect } from "react";

import { firestore } from "../../config/Firebase";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import HeaderWind from "../../components/HeaderWind";
import { FormInput, FormSelect } from "../../components/FormsIU";

function ServiceOs() {
  const [options, setOptions] = useState([]);
  const optionsAtividades =['SUPORTE','INSTALAÇÃO']

  useEffect(() => {
    const Filter = async () => {
      await firestore
        .collection("USERS")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setOptions(querySnapshot.docs.map((doc) => doc.data().Nome));
          });
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
        OS:e.target.os.value,
        PT: e.target.pt.value,
        Responsavel: e.target.responsavel.value,
        Data: e.target.data.value,
        Cliente: e.target.cliente.value,
        Problema: e.target.problema.value,
        Descricao: e.target.descricao.value,
        Endereco: e.target.endereco.value,
        Localizacao: e.target.localizacao.value,
      });

      alert("dados enviados com sucesso");
    } catch (error) {
      
      alert("dados não enviados ");
    }
  }

  return (
    <Box
     
      sx={{
        height: "100vh",
        width: "100vw",
        background:
          "  linear-gradient(20deg, rgba(14,36,64,1) 60%, rgba(13,13,13,1) 90%)",
      }}
    >
      <Container>
        <HeaderWind nameWind="ServiceOS" type="drag" />
        <form  onSubmit={Submit} >
        <Grid  container sx={{ marginTop: "8px" }} spacing={4}>
        
        <FormSelect
            label="Atividade"
            name="atividade"
            options={optionsAtividades}
          />
        
          <FormInput
           
            label="OS"
            name="os"
            type="text"
          />

          <FormInput label="PT" name="pt" type="text" />

          <FormInput label="Cliente" name="cliente" type="text" />

          <FormInput name="data" type="date" />

          <FormSelect
            label="Responsavel"
            name="responsavel"
            options={options}
          />

          <FormInput label="Problema" name="problema" type="text" />

          <FormInput label="Descrição" name="descricao" type="text" />

          <FormInput label="Endereço" name="endereco" type="text" />

          <FormInput label="Localização" name="localizacao" type="text" />

          <Grid item xs={4}>
            <Button
              type="submit"
            
              sx={{
                color: "#D9D8D7",
                mb: 1,
                width: "300px",
                marginLeft: "5%",
                borderRadius: 3,
                background:
                  "linear-gradient(to bottom right, #F2B705 10%, #F28705 60% )",
              }}
            >
              Enviar
            </Button>
          </Grid>
          
        </Grid>
        </form>
        
      </Container>
    </Box>
  );
}

export default ServiceOs;
