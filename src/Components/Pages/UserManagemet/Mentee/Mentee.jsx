import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useState, useMemo, useEffect } from "react";
import "./Mentee.css";
import { Button, Box, MenuItem, Menu } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Header from "../../../Header";
import { useTheme } from "@mui/material";
import { tokens } from "../../../../theme";
import { useNavigate } from "react-router-dom";
import {
  GetMentee,
  DeleteMentee,
  ChangeUserStatus,
} from "../../../Services/API/API";

const Mentee = () => {
  const [userId, setUserId] = useState([]);
  const [userIdToNavigate, setUserIdToNavigate] = useState([]);
  const navigate = useNavigate();
  const [pageSize, setPageSize] = useState(5);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [anchorEl, setAnchorEl] = React.useState();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, value) => {
    setUserIdToNavigate(() => {
      return value.id;
    });
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [menteeData, setMenteeData] = useState([]);
  const getData = async () => {
    try {
      let result = await GetMentee(localStorage.getItem("adminToken"));
      setMenteeData(result.data.data);
      console.log(result.data.data, "menteedata");
    } catch (e) {}
  };
  useEffect(() => {
    getData();
  }, []);

  //implementation of change status api
  const [selectValue, setSelectValue] = React.useState("");
  const onChange = async (event, id) => {
    const value = event.target.value;
    const data = { response: value };
    const arr = [...id];
    let status = await ChangeUserStatus(
      arr,
      data,
      localStorage.getItem("adminToken")
    );
    setSelectValue(value);
  };

  const navigateToNewFormMentee = () => {
    navigate("/newformMentee");
  };

  const navigateToViewMentee = () => {
    navigate(`/viewMentee/${userIdToNavigate}`);
  };

  const navigateToEditFormMentee = (event) => {
    navigate(`/editformMentee/${userIdToNavigate}`);
  };

  const navigateToChangeMenteePassword = (value) => {
    navigate(`/changeMenteePassword/${value}`);
  };

  const removeMentee = async (id) => {
    const confirmed = window.confirm(
      "Do you really want to delete this mentee?"
    );
    if (!confirmed) return;

    try {
      const arr = [...id];
      const result = await DeleteMentee(
        arr,
        localStorage.getItem("adminToken")
      );
      toast.success("Mentee deleted successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        navigate("/mentor");
      }, 3000);
    } catch (error) {
      if (error.response.status == 401) {
        toast.error("Token expired", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      localStorage.removeItem("adminToken");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  };

  const columns: GridColDef[] = useMemo(() => [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "User Name", width: 150, flex: 1 },
    {
      field: "email_id",
      headerName: "Email Address",
      width: 150,
      flex: 1,
    },
    {
      field: "mentee_type",
      headerName: " Mentee's Type",
      width: 100,
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      flex: 1,
      renderCell: (cellValues1) => {
        return (
          <div>
            <select
              onClick={(e) => onChange(e, userId)}
              className="form-select"
              value={menteeData.status}
            >
              <option
                value="pending"
                selected={
                  menteeData.length !== 0 &&
                  menteeData
                    .filter((user) => user.id === cellValues1.id)
                    .map((item, index) => {
                      return item.status;
                    })[0] === "pending"
                    ? true
                    : false
                }
              >
                Pending
              </option>
              <option
                value="approve"
                selected={
                  menteeData.length !== 0 &&
                  menteeData
                    .filter((user) => user.id === cellValues1.id)
                    .map((item, index) => {
                      return item.status;
                    })[0] === "approved"
                    ? true
                    : false
                }
              >
                Approve
              </option>
              <option
                value="reject"
                selected={
                  menteeData.length !== 0 &&
                  menteeData
                    .filter((user) => user.id === cellValues1.id)
                    .map((item, index) => {
                      return item.status;
                    })[0] === "rejected"
                    ? true
                    : false
                }
              >
                Reject
              </option>
            </select>
          </div>
        );
      },
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
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={(e) => handleClick(e, cellValues)}
              variant="contained"
            >
              Action
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => navigateToEditFormMentee(cellValues)}>
                Edit
              </MenuItem>
              <MenuItem onClick={() => navigateToViewMentee()}>View</MenuItem>
              <MenuItem onClick={() => removeMentee(userId)}>Delete</MenuItem>
            </Menu>
          </div>
        );
      },
    },
    {
      field: "password",
      headerName: "Change Password",
      sortable: false,
      width: 250,
      renderCell: (cellValues2) => {
        return (
          <div>
            <Button
              color="primary"
              size="medium"
              variant="outlined"
              onClick={() => navigateToChangeMenteePassword(cellValues2.id)}
            >
              Change Password
            </Button>
          </div>
        );
      },
    },
  ]);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="USER MANAGEMENT" subtitle="Mentee's List" />
        <Box>
          <Button
            onClick={navigateToNewFormMentee}
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <AddIcon sx={{ mr: "10px" }} />
            ADD NEW MENTEE
          </Button>
        </Box>
      </Box>
      <div className="tabledata">
        <DataGrid
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rows={menteeData}
          onSelectionModelChange={(id) => {
            const selectedIDs = new Set([id]);
            const selectedRowData = menteeData.filter((row) =>
              selectedIDs.has(row.id.toString())
            );
            setUserId(selectedIDs);
          }}
          rowsPerPageOptions={[5, 10, 15]}
          columns={columns}
        />
      </div>
    </Box>
  );
};

export default Mentee;
