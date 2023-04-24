import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../../Header";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";
import {GetAdminUser} from "../../../Services/API/API"


function AdminUser() {
  const [pageSize, setPageSize] = useState(5);
  const [adminData,setAdminData] = useState([])
  const navigate = useNavigate();


  //get all admin user api implementation
  const getData = async () => {
    try {
      let result = await GetAdminUser(localStorage.getItem("adminToken"));
      setAdminData(result.data.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);


  const navigateToEditAdmin = () => {
    navigate("/editAdminUser");
  };

  const navigateToCreateAdminUser = () => {
    navigate("/createAdminUser");
  };

  const navigateToAddPerissions = () => {
    navigate("/addPermissions");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      flex: 1,
    },
    {
      field: "admin_type",
      headerName: "Role",
      width: 150,
      flex: 1,
    },

    {
      field: "permissions",
      headerName: "Permissions",
      width: 150,
      flex: 1,
    },

    {
      field: "Action",
      headerName: "Actions",
      width: 150,
      sortable: false,
      flex: 1,
      renderCell: (cellValues) => {
        return (
          <div>
            <Button
              id="demo-customized-button"
              aria-controls={open ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Actions
            </Button>
            <Menu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={() => navigateToAddPerissions()} disableRipple>
                <SettingsIcon sx={{ mr: "6px" }} />
                Add Permissions
              </MenuItem>
              <MenuItem onClick={() => navigateToEditAdmin()} disableRipple>
                <EditIcon sx={{ mr: "6px" }} />
                Edit
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <DeleteForeverIcon sx={{ mr: "6px" }} />
                Delete
              </MenuItem>
            </Menu>
          </div>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="ADMIN MANAGEMENT" subtitle=" Admin Users" />
        <Box>
          <Button
            onClick={() => navigateToCreateAdminUser()}
            sx={{
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              background: "#a4a9fc",
            }}
          >
            <AddIcon sx={{ mr: "10px" }} />
            ADD ADMIN USER
          </Button>
        </Box>
      </Box>
      <Box sx={{ height: 400, width: "100%", marginTop: "10px" }}>
        <DataGrid
          rows={adminData}
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
  );
}

export default AdminUser;
