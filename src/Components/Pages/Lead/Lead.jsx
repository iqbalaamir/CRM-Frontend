import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../Header";
import { DataGrid } from "@mui/x-data-grid";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
import { GetLeads, GetUserByToken } from "../../Services/API/API";
import { toast } from "react-toastify";

const Lead = () => {
  const [pageSize, setPageSize] = useState(5);
  const [categoryData, setCategoryData] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState();
  const [userId, setUserId] = useState([]);
  const [userRole, setUserRole] = useState(null);
  const [editLeads, setEditLeads] = useState(false);
  const [userIdToNavigate, setUserIdToNavigate] = useState();
  const navigate = useNavigate();

  const handleClick = (event, value) => {
    setUserIdToNavigate(value);
    setAnchorEl(event.currentTarget);
  };

  //get all admin user api implementation
  const getData = async () => {
    try {
      let result = await GetLeads(localStorage.getItem("adminToken"));
      setCategoryData(result.data);
      console.log("222222222222222222", result.data);
    } catch (e) {
      console.log(e);
    }
  };
  const getUserRole = async () => {
    try {
      const response = await GetUserByToken(localStorage.getItem('adminToken'));
      console.log(response.data.userType, "token User")
      const role = response.data.userType; // assuming the server returns the user's role as 'role'
      const leads = response.data.editLeads;
      setUserRole(role);
      setEditLeads(leads);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
    getUserRole();
  }, []);

  //delete category
  //   const removeCategory = async (id) => {
  //     const confirmed = window.confirm(
  //       "Do you really want to delete this Category?"
  //     );
  //     if (!confirmed) return;

  //     try {
  //       const arr = [...id];
  //       const result = await DeleteCategory(
  //         arr,
  //         localStorage.getItem("adminToken")
  //       );
  //       toast.success("Category deleted successfully!", {
  //         position: "top-right",
  //         autoClose: 2000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //       });
  //       setTimeout(() => {
  //         navigate("/mentor");
  //       }, 3000);
  //     } catch (error) {
  //       if (error.response.status == 401) {
  //         toast.error("Token expired", {
  //           position: "top-right",
  //           autoClose: 2000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "light",
  //         });
  //       }
  //       localStorage.removeItem("adminToken");
  //       setTimeout(() => {
  //         navigate("/login");
  //       }, 3000);
  //     }
  //   };

  const navigateToAddLead = () => {
    navigate("/AddLead");
  };
  const navigateToEditLead = (event, id) => {
    navigate(`/EditLead/${id}`);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 150 },
    {
      field: "name",
      headerName: "Name",
      width: 250,
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email Id",
      width: 450,
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Mobile",
      width: 350,
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      width: 350,
      flex: 1,
    },
    {
      field: "action",
      headerName: "Actions",
      width: "350",
      flex: 1,
      renderCell: (cellValues) => {
        if (editLeads === true){
        return (
          <div>
            <Tooltip title="Edit">
              <ModeEditIcon
                className="speciality_edit"
                sx={{ marginRight: "15px" }}
                onClick={(event) => navigateToEditLead(event, cellValues.id)}
              />
            </Tooltip>

            <Tooltip title="Delete">
              <DeleteIcon
                className="speciality_edit"
              //   onClick={() => removeCategory(userId)}
              />
            </Tooltip>
          </div>
        );
      }
      else {
        return <></>; // or any other UI element you want to render for non-admin users
      }
      }
      
      ,
    },
  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="LEADS" />
        {userRole === "ADMIN"  && (
          <Box>
            <Button
              onClick={navigateToAddLead}
              className="add_specialist_button"
              sx={{
                background: "#a4a9fc",
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
              }}
            >
              <AddIcon sx={{ mr: "10px" }} />
              ADD LEAD
            </Button>
          </Box>
        )}

      </Box>
      <div
        style={{
          height: 430,
          width: "100%",
          //   marginLeft: "10%",
          //   marginTop: "20px",
        }}
      >
        <DataGrid
          rows={categoryData}
          columns={columns}
          getRowId={(row) => row._id}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 15]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          onSelectionModelChange={(id) => {
            const selectedIDs = new Set([id]);
            const selectedRowData = categoryData.filter((row) =>
              selectedIDs.has(row.id.toString())
            );
            setUserId(selectedIDs);
          }}
        />
      </div>
    </Box>
  );
};

export default Lead;
