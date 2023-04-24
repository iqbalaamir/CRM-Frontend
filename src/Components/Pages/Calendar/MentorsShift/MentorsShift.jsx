import { Box } from "@mui/system";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import Header from "../../../Header";
import { Badge } from "react-bootstrap";
import { Button } from "@mui/material";

const MentorsShift = () => {
  const navigate = useNavigate();
  const [pageSize, setPageSize] = useState(5);

  const navigateToPaymentIvoices = () => {
    navigate("/paymentInvoices");
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "mentorName", headerName: "Mentor's Name", width: 250 },
    { field: "menteeName", headerName: "Mentee's Name", width: 250 },

    {
      field: "meetingtime",
      headerName: "Meeting Time",
      width: 350,
      flex: 1,
    },
    {
      field: "meetingstatus",
      headerName: "Meeting Status",
      width: 350,
      flex: 1,
      renderCell: (cellValues) => {
        return (
          <Badge pill bg="primary" large>
            Completed
          </Badge>
        );
      },
    },

    {
      field: "paymentstatus",
      headerName: "Payment Status",
      sortable: false,
      width: 250,
      flex: 1,
    },
    {
      field: "viewinvoice",
      headerName: "View Invoice",
      sortable: false,
      width: 250,
      flex: 1,
      renderCell: (cellValues) => {
        return (
          <>
            <Button
              className="payment_invoices_button"
              onClick={navigateToPaymentIvoices}
              sx={{
                fontSize: "12px",
                borderRadius: "4px",
                border: "1px solid",
                paddingLeft: "13px",
                paddingRight: "13px",
              }}
            >
              View Invoices
            </Button>
          </>
        );
      },
    },
  ];
  const rows = [
    {
      id: 1,
      mentorName: "Aamir",
      menteeName: "Anshita",
      meetingtime: "11:00 - 11:20 AM",
      meetingstatus: "",
      paymentstatus: "",
      viewinvoice: "",
    },
    {
      id: 1,
      mentorName: "Aamir",
      menteeName: "Sparsh",
      meetingtime: "12:00 - 11:20 AM",
      meetingstatus: "",
      paymentstatus: "",
      viewinvoice: "",
    },
  ];
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="MENTOR'S SHIFT "
          subtitle="View Mentor's Shift Details"
        />
      </Box>
      <div className="tabledata">
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
      </div>
    </Box>
  );
};

export default MentorsShift;
