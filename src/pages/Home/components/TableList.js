import React, { useState, useEffect } from "react";
import Link from "@material-ui/core/Link";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { firestore } from "../../../config/Firebase";

export default function TableList(preventDefault) {
  const [table, setTable] = useState([]);

  useEffect(() => {
    let cont = 0;
    const Dados = async () => {
      await firestore
        .collection("Servicos")
        .limit(5)
        .get()
        .then((querySnapshot) => {
          setTable(
            querySnapshot.docs.map((doc) => ({
              id: cont++,
              dataagenda: doc.data().DataAgenda,
              pt: doc.data().PT,
              solicitante: doc.data().Solicitante,
              responsavel: doc.data().Responsavel,
              atividade: doc.data().Atividade,
              problemas: doc.data().Problemas,
              status: doc.data().Status,
            }))
          );
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    };

    Dados();
  }, [table]);

  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>PT</TableCell>
            <TableCell>Solicitante</TableCell>
            <TableCell>Responsavel</TableCell>
            <TableCell>Tipo</TableCell>
            <TableCell>Problema Descrito</TableCell>
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
              <TableCell>
                {row.problemas.map((introw) => introw.problema + " ")}
              </TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 1 }}>
        Ver mais
      </Link>
    </React.Fragment>
  );
}
