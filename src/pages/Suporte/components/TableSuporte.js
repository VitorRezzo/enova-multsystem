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
  const [tablesuport, setTableSuport] = useState([]);

  const DadosSuporte = () => {
    const midnight = new Date(
      firebase.firestore.Timestamp.now().toDate().setHours(0, 0, 0, 0)
    );
    var cont = 0;
    firestore
      .collection("Servicos")
      .where("Atividade", "==", "Suporte")
      .where("DataRegistro", ">=", midnight)
      .orderBy("DataRegistro", "desc")
      .limit(4)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setTableSuport(
            querySnapshot.docs.map((row) => ({
              id: cont++,
              dataagenda: row.data().DataAgenda,
              os: row.data().OS,
              pt: row.data().PT,
              solicitante: row.data().Solicitante,
              responsavel: row.data().Responsavel,
              problemas: row.data().Problemas,
            }))
          );
        });
      });
  };

  useEffect(() => {
    DadosSuporte();
  }, []);

  return (
    <React.Fragment>
      <TextFieldIU
        placeholder="pesquisar"
        variant="outlined"
        size="small"
        type="text"
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
          {tablesuport.map((row) => (
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
