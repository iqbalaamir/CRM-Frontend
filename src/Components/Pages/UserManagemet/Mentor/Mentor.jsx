import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useState, useMemo, useEffect } from "react";
import "./Mentor.css";
import { Button, Box, MenuItem, Menu } from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddIcon from "@mui/icons-material/Add";
import Header from "../../../Header";
import { useTheme } from "@mui/material";
import { tokens } from "../../../../theme";
import { useNavigate } from "react-router-dom";
// import {
//   GetMentor,
//   DeleteMentor,
//   ChangeUserStatus,
// } from "../../../Services/API/API";

const Mentor = () => {
  const [userId, setUserId] = useState([]);
  const [userIdToNavigate, setUserIdToNavigate] = useState([]);
  const navigate = useNavigate();
  const [pageSize, setPageSize] = useState(5);
  const [mentorData, setMentorData] = useState([]);

  //implementation of status change api
  const [selectValue, setSelectValue] = React.useState("");
  const onChange = async (event, id) => {
    const value = event.target.value;
    const data = { response: value };
    const arr = [...id];
    // let status = await ChangeUserStatus(
    //   arr,
    //   data,
    //   localStorage.getItem("adminToken")
    // );
    // setSelectValue(value);
  };

  // const getData = async () => {
  //   try {
  //     let result = await GetMentor(localStorage.getItem("adminToken"));
  //     setMentorData(result.data.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
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
  // const handleClick = (event, value) => {
  //   setUserIdToNavigate(() => {
  //     return value.id;
  //   });
  //   setAnchorEl(event.currentTarget);
  // };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const [anchorE2, setAnchorE2] = React.useState();
  // const open1 = Boolean(anchorE2);
  // const handleClickE2 = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorE2(event.currentTarget);
  // };
  // const handleCloseE2 = () => {
  //   setAnchorEl(null);
  // };
  const navigateToNewFormMentor = () => {
    navigate("/newformMentor");
  };

  const navigateToViewMentor = () => {
    navigate(`/viewMentor/${userIdToNavigate}`);
  };

  const navigateToEditFormMentor = () => {
    navigate(`/editformMentor/${userIdToNavigate}`);
  };
  const navigateToChangeMentorPassword = (value) => {
    navigate(`/changeMentorPassword/${value}`);
  };

  // const removeMentor = async (id) => {
  //   const confirmed = window.confirm(
  //     "Do you really want to delete this mentor?"
  //   );
  //   if (!confirmed) return;

  //   try {
  //     const arr = [...id];
  //     const result = await DeleteMentor(
  //       arr,
  //       localStorage.getItem("adminToken")
  //     );
  //     toast.success("Mentor deleted successfully!", {
  //       position: "top-right",
  //       autoClose: 2000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //     setTimeout(() => {
  //       navigate("/mentor");
  //     }, 3000);
  //   } catch (error) {
  //     if (error.response.status == 401) {
  //       toast.error("Token expired", {
  //         position: "top-right",
  //         autoClose: 2000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //       });
  //     }
  //     localStorage.removeItem("adminToken");
  //     setTimeout(() => {
  //       navigate("/login");
  //     }, 3000);
  //   }
  // };

  const columns: GridColDef[] = useMemo(() => [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 250 },
    {
      field: "email_id",
      headerName: "Email Address",
      width: 350,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      sortable: false,
      flex: 1,
      renderCell: (cellValues1) => {
        return (
          <div>
            <select
              onClick={(e) => onChange(e, userId)}
              className="form-select"
              // defaultValue={mentorData.status}
              value={mentorData.status}
            >
              <option
                value="pending"
                selected={
                  mentorData.length !== 0 &&
                  // mentorData.filter((user) => user.id === cellValues1.id).map((item,index)=>{return item.status})
                  mentorData
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
                  mentorData.length !== 0 &&
                  mentorData
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
                  mentorData.length !== 0 &&
                  mentorData
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
              <MenuItem onClick={() => navigateToEditFormMentor()}>
                Edit
              </MenuItem>
              <MenuItem onClick={() => navigateToViewMentor()}>View</MenuItem>
              <MenuItem
              // onClick={() => removeMentor(userId)}
              >
                Delete
              </MenuItem>
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
      // flex: 1,
      renderCell: (cellValues2) => {
        return (
          <div>
            <Button
              color="primary"
              size="medium"
              variant="outlined"
              onClick={() => navigateToChangeMentorPassword(cellValues2.id)}
              // onClick={() => changeMentorPassword(cellValues2)}
            >
              Change Password
            </Button>
            <div></div>
          </div>
        );
      },
    },
  ]);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="USER MANAGEMENT" subtitle="Mentor's List" />
        <Box>
          <Button
            onClick={navigateToNewFormMentor}
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <AddIcon sx={{ mr: "10px" }} />
            ADD MENTOR
          </Button>
        </Box>
      </Box>
      <div className="tabledata">
        <DataGrid
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rows={mentorData}
          onSelectionModelChange={(id) => {
            const selectedIDs = new Set([id]);
            const selectedRowData = mentorData.filter((row) =>
              selectedIDs.has(row.id.toString())
            );
            setUserId(selectedIDs);
          }}
          rowsPerPageOptions={[5, 10, 15]}
          columns={columns}
          // checkboxSelection
        />
      </div>
    </Box>
  );
};

export default Mentor;
