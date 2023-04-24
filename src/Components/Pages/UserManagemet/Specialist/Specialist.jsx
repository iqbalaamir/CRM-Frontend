import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../../Header";
import { DataGrid } from "@mui/x-data-grid";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import "./Specialist.css";
import { useNavigate } from "react-router-dom";
import { GetAllSpecialist } from "../../../Services/API/API";

const Specialist = () => {
  const navigate = useNavigate();
  const [pageSize, setPageSize] = useState(5);
  const [specialistData,setSpecialistData] = useState([])


   //get all admin user api implementation
   const getData = async () => {
    try {
      let result = await GetAllSpecialist(localStorage.getItem("adminToken"));
      setSpecialistData(result.data.data);
      console.log("111111111111",result.data.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const navigateToAddSpeciality = () => {
    navigate("/addSpeciality");
  };
  const navigateToEditSpeciality = () => {
    navigate("/editSpeciality");
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "specialist_name",
      headerName: "Speciality name",
      width: 350,
      flex: 1,
    },
    {
      field: "action",
      headerName: "Actions",
      width: "350",
      flex: 1,
      renderCell: (cellValues) => {
        return (
          <div>
            <Tooltip title="Edit">
              <ModeEditIcon
                className="speciality_edit"
                sx={{ marginRight: "15px" }}
                onClick={navigateToEditSpeciality}
              />
            </Tooltip>

            <Tooltip title="Delete">
              <DeleteIcon className="speciality_edit" />
            </Tooltip>
          </div>
        );
      },
    },
  ];


  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="USER MANAGEMENT" subtitle="Create Specialist" />
        <Box>
          <Button
            // onClick={() => navigateToAddSpeciality()}
            onClick={navigateToAddSpeciality}
            className="add_specialist_button"
            sx={{
              background: "#a4a9fc",
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              marginRight: "165px",
            }}
          >
            <AddIcon sx={{ mr: "10px" }} />
            ADD SPECIALITY
          </Button>
        </Box>
      </Box>
      <div
        style={{
          height: 430,
          width: "80%",
          marginLeft: "10%",
          marginTop: "20px",
        }}
      >
        <DataGrid
          rows={specialistData}
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

export default Specialist;
