import * as React from 'react';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



function createData(id, datainicio, solicitante, responsavel, tipo, status) {
  
  return { id, datainicio,solicitante, responsavel, tipo, status };
}

const rows = [
  createData(
    0,
    '16/08/2021',
    'Antonio Lucas',
    'Carlos Vitor Santos Rezzo',
    'OS',
    'pendente',
  ),
  createData(
    1,
    '25/08/2021',
    'Pratricia',
    'Cezinha',
    'OS',
    'pendente',
  ),
  createData(2, 
  '20/09/2021',
    'Pratricia',
    'Equipe A',
    'Instalação',
    'pendente',
   ),
  createData(
    3,
    '25/09/2021',
    'Pratricia',
    'Equipe B',
    'Instalação',
    'pendente',
  ),
  createData(
    4,
    '25/09/2021',
    'Pratricia',
    'Equipe C',
    'Instalação',
    'pendente',
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export  default function TableList  ()  {
  return (
    <React.Fragment>

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data Inicio</TableCell>
            <TableCell>Solicitante</TableCell>
            <TableCell>Responsavel</TableCell>
            <TableCell>Tipo</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.datainicio}</TableCell>
              <TableCell>{row.solicitante}</TableCell>
              <TableCell>{row.responsavel}</TableCell>
              <TableCell>{row.tipo}</TableCell>
              <TableCell>{row.status}</TableCell>
              
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