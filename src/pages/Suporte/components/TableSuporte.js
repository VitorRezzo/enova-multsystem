import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { TextFieldIU } from "../../../components/TextFieldStyled";

import FindInPageIcon from "@material-ui/icons/FindInPage";

import firebase, { firestore } from "../../../config/Firebase";

export function TableSuporte() {
  const [table, setTable] = useState([]);

  const Dados = async () => {
    var cont = 0;
    const midnight = new Date(
      firebase.firestore.Timestamp.now().toDate().setHours(0, 0, 0, 0)
    );
    await firestore
      .collection("Servicos")
      .where("DataRegistro", ">=", midnight || "Atividade", "==", "Suporte")
      .orderBy("DataRegistro", "desc")
      .limit(4)
      .get()
      .then((querySnapshot) => {
        setTable(
          querySnapshot.docs.map((doc) => ({
            id: cont++,
            dataagenda: doc.data().DataAgenda,
            os: doc.data().OS,
            pt: doc.data().PT,
            solicitante: doc.data().Solicitante,
            responsavel: doc.data().Responsavel,
            problemas: doc.data().Problemas,
          }))
        );
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  useEffect(() => {
    Dados();
  }, [table]);

  const Pesquisar = async (pesquisa) => {
    var cont = 0;

    await firestore
      .collection("Servicos")
      .where("PT", "==", pesquisa)
      .get()
      .then((querySnapshot) => {
        setTable(
          querySnapshot.docs.map((doc) => ({
            id: cont++,
            dataagenda: doc.data().DataAgenda,
            os: doc.data().OS,
            pt: doc.data().PT,
            solicitante: doc.data().Solicitante,
            responsavel: doc.data().Responsavel,
            problemas: doc.data().Problemas,
          }))
        );
      })

      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  return (
    <React.Fragment>
      <TextFieldIU
        placeholder="pesquisar"
        variant="outlined"
        size="small"
        type="text"
        onChange={(event, value) => {
          event.target.value === "" ? Dados() : Pesquisar(event.target.value);
        }}
        fullWidth={true}
        InputProps={{
          startAdornment: <FindInPageIcon sx={{ marginRight: "2%" }} />,
        }}
      />
      <Table
        size="small"
        sx={{ backgroundColor: "#e9ecef", borderRadius: "10px" }}
      >
        <TableHead>
          <TableRow>
            <TableCell>Agendado</TableCell>
            <TableCell>PT</TableCell>
            <TableCell>OS</TableCell>
            <TableCell>Solicitante</TableCell>
            <TableCell>Responsavel</TableCell>
            <TableCell>Problemas</TableCell>
            <TableCell>Ação</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {table.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.dataagenda}</TableCell>
              <TableCell>{row.pt}</TableCell>
              <TableCell>{row.os}</TableCell>
              <TableCell>{row.solicitante}</TableCell>
              <TableCell>{row.responsavel}</TableCell>
              <TableCell>
                {row.problemas.map((introw) => introw.problema + " ")}
              </TableCell>
              <TableCell>
                <EditIcon
                  sx={{
                    borderRadius: 10,
                    "&:hover": {
                      color: "black",
                      cursor: "pointer",
                    },
                  }}
                  fontSize="small"
                />
              </TableCell>
              <TableCell>
                <DeleteForeverIcon
                  color="error"
                  sx={{
                    borderRadius: 10,
                    "&:hover": {
                      color: "red",
                      cursor: "pointer",
                    },
                  }}
                  fontSize="small"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
