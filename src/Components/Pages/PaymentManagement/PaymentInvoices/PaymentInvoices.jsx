import { Box } from '@mui/system'
import React,{useState} from 'react'
import Header from '../../../Header'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'menteeName',
    headerName: 'Mentee name',
    width: 250,
    editable: true,
    flex:1
  },
  {
    field: 'totalMeetings',
    headerName: 'Number of Meetings',
    width: 150,
    flex:1
  },
  {
    field: 'paymentStatus',
    headerName: 'Payment Status',
    width: 350,
    flex:1
  },
  {
    field: 'viewInvoices',
    headerName: 'View Invoices',
    width: 350,
    flex:1

  },
  {
    field: 'downloadInvoice',
    headerName: 'Download',
    width: 450,
    flex:1
  },
 
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const PaymentInvoices = () => {
  const [pageSize, setPageSize] = useState(5);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="PAYMENT MANAGEMENT" subtitle="View Payement Details" />
      </Box>
     
       <Box sx={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 15]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
      </Box>
  )
}

export default PaymentInvoices