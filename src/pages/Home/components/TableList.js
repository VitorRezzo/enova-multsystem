import React, { useState, useEffect } from "react";

import { firestore } from "../../../config/Firebase";

import Link from "@material-ui/core/Link";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export default function TableList(preventDefault) {
  const [table, setTable] = useState([]);

  const DadosAtividades = async () => {
    var contID = 0;
    await firestore
      .collection("Servicos")
      .limit(6)
      .orderBy("DataRegistro", "desc")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setTable(
            querySnapshot.docs.map((doc) => ({
              id: contID++,
              dataagenda: doc.data().DataAgenda,
              pt: doc.data().PT,
              solicitante: doc.data().Solicitante,
              responsavel: doc.data().Responsavel,
              atividade: doc.data().Atividade,
              status: doc.data().Status,
            }))
          );
        });
      });
  };

  useEffect(() => {
    DadosAtividades();
  }, []);

  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data Agendamento</TableCell>
            <TableCell>PT</TableCell>
            <TableCell>Solicitante</TableCell>
            <TableCell>Responsavel</TableCell>
            <TableCell>Tipo</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {table.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.dataagenda}</TableCell>
              <TableCell>{row.pt}</TableCell>
              <TableCell>{row.solicitante}</TableCell>
              <TableCell>{row.responsavel}</TableCell>
              <TableCell>{row.atividade}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link
        color="primary"
        href="#"
        onClick={preventDefault}
        sx={{ position: "relative", top: "8px", bottom: "8px", left: "16px" }}
      >
        Ver mais
      </Link>
    </React.Fragment>
  );
}
