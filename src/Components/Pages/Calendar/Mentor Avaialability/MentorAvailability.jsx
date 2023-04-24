import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import Header from "../../../Header";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MoreTimeIcon from "@mui/icons-material/MoreTime";

function MentorAvailability() {
  const [pageSize, setPageSize] = useState(5);
  const navigate = useNavigate();

  // const navigateToCalendar = (value) => {
  //   navigate(`/calendar/${value.row.id}`);
  // };
  const navigateToMentorsShift = () => {
    navigate("/mentorsShift");
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "mentor_name", headerName: "Mentor Name", width: 250 },
    {
      field: "email",
      headerName: "Email",
      width: 350,
      flex: 1,
    },
    {
      field: "todaysShift",
      headerName: "Todays Shift's Timing",
      width: 350,
      flex: 1,
      renderCell: (cellValues) => {
        return (
          <div>
          <Button
            size="medium"
            variant="outlined"
            startIcon={<MoreTimeIcon />}
            onClick={() => navigateToMentorsShift(cellValues)}
          >
            View Shift
          </Button>
        </div>
         
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 350,
      flex: 1,
    },

    {
      field: "slots",
      headerName: "View Slots",
      sortable: false,
      width: 250,
      flex: 1,
      renderCell: (cellValues) => {
        return (
          <div>
            <Button
              size="medium"
              variant="outlined"
              startIcon={<CalendarMonthIcon />}
              // onClick={() => navigateToCalendar(cellValues)}
            >
              View Calendar
            </Button>
          </div>
        );
      },
    },
  ];
  const rows = [
    {
      id: 1,
      mentor_name: "Anshita",
      email: "anshita@gmail.com",
      totalMeetings: 35,
      todaysShift: "",
      calendar: "",
    },

  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="CALENDAR MANAGEMENT" subtitle="View Mentor's Information" />
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
}

export default MentorAvailability;
