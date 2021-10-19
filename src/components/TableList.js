import React, { useState, useEffect } from "react";
import Link from "@material-ui/core/Link";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { firestore } from "../config/Firebase";

export default function TableList(
  preventDefault,
  color,
  background,
  border,
  marginTop
) {
  const [table, setTable] = useState([]);

  let rows = [];

  
  useEffect(() => {
    let cont = 0;
    const Dados = async () => {
      await firestore
        .collection("USERS")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            rows.push({id: 0,name:doc.data().Nome})
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    };
    Dados();
  }, []);

  return (
    <React.Fragment>
      <Table
        sx={{ marginTop: marginTop, background: background, border: border }}
        size="small"
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: color }}>Data Inicio</TableCell>
            <TableCell sx={{ color: color }}>Solicitante</TableCell>
            <TableCell sx={{ color: color }}>Responsavel</TableCell>
            <TableCell sx={{ color: color }}>Tipo</TableCell>
            <TableCell sx={{ color: color }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row}</TableCell>
              <TableCell>{row}</TableCell>
              <TableCell>{row}</TableCell>
              <TableCell>{row}</TableCell>
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
