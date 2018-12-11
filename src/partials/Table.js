import React from 'react'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'

import MaterialTable from '@material-ui/core/Table'
import MaterialTableBody from '@material-ui/core/TableBody'
import MaterialTableCell from '@material-ui/core/TableCell'
import MaterialTableHead from '@material-ui/core/TableHead'
import MaterialTableRow from '@material-ui/core/TableRow'

const StyledTableCell = styled(MaterialTableCell)`
  padding: 1rem !important;
`

export const Table = props => (
  <Paper>
    <MaterialTable {...props} />
  </Paper>
)

export const TableBody = props => <MaterialTableBody {...props} />

export const TableCell = props => <StyledTableCell {...props} />

export const TableTh = props => <StyledTableCell component="th" {...props} />

export const TableHead = props => <MaterialTableHead {...props} />

export const TableRow = props => <MaterialTableRow {...props} />
