import React, { useState, useEffect } from "react";

import { firestore } from "../../config/Firebase";

import AddCircleIcon from "@material-ui/icons/AddCircle";

import Box from "@material-ui/core/Box";

import IconButton from "@material-ui/core/IconButton";

import HeaderWind from "../../components/HeaderWind";
import { PaperInput, PaperSelect } from "../../components/PaperIU";
import { useGlobalUse } from "../../components/GlobalUse";

function ServiceOs() {
  const [options, setOptions] = useState([]);
  const optionsAtividades = ["SUPORTE", "INSTALAÇÃO"];

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
        height: "90vh",
        width: "100vw",

        overflow: "auto",
      }}
    >
      <HeaderWind nameWind="ServiceOS" type="drag" />

      <PaperSelect
        label="Atividade"
        name="atividade"
        options={optionsAtividades}
      />

      <PaperSelect label="Responsavel" name="responsavel" options={options} />

      <PaperInput label="OS" name="os" type="text" />

      <PaperInput label="PT" name="pt" type="text" />

      <PaperInput label="Cliente" name="cliente" type="text" />

      <PaperInput name="data" type="date" />

      <PaperInput label="Endereço" name="endereco" type="text" />

      <PaperInput label="Localização" name="localizacao" type="text" />

      <PaperInput label="Descrição" name="descricao" type="text" />

      <PaperInput label="Instruções" name="instrucao" type="text" />

      <IconButton
        type="submit"
        sx={{
          color: "#006616",
          width: "22px",
          height: "22px",
          float: "right",
          marginRight: "8%",
          marginTop: "6%",
          borderRadius: 10,
          "&:hover": {
            color: "#009921",
          },
        }}
      >
        <AddCircleIcon />
      </IconButton>
    </Box>
  );
}

export default ServiceOs;
