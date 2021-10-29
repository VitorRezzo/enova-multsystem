import React, { useState, useEffect } from "react";
import Link from "@material-ui/core/Link";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { firestore } from "../config/Firebase";

export default function TableList(preventDefault) {
  const [table, setTable] = useState([]);

  useEffect(() => {
    let cont = 0;
    const Dados = async () => {
      await firestore
        .collection("Servicos")
        .get()
        .then((querySnapshot) => {
          setTable(
            querySnapshot.docs.map((doc) => ({
              id: cont++,
              dataagenda: doc.data().DataAgenda,
              solicitante: doc.data().Solicitante,
              responsavel: doc.data().Responsavel,
              atividade: doc.data().Atividade,
            }))
          );
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    };

    Dados();
  }, []);

  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data Agendamento</TableCell>
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
              <TableCell>{row.solicitante}</TableCell>
              <TableCell>{row.responsavel}</TableCell>
              <TableCell>{row.atividade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        Ver mais
      </Link>
    </React.Fragment>
  );
}
