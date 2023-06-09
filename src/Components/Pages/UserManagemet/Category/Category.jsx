import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../../Header";
import { DataGrid } from "@mui/x-data-grid";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import "./Category.css";
import { useNavigate } from "react-router-dom";
import { GetAllCategory,DeleteCategory } from "../../../Services/API/API";
import { toast } from "react-toastify";

const Category = () => {
  const [pageSize, setPageSize] = useState(5);
  const [categoryData, setCategoryData] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState();
  const [userId, setUserId] = useState([]);
  const [userIdToNavigate, setUserIdToNavigate] = useState();
  const navigate = useNavigate();

  const handleClick = (event, value) => {
    setUserIdToNavigate(value);
    setAnchorEl(event.currentTarget);
  };

  //get all admin user api implementation
  const getData = async () => {
    try {
      let result = await GetAllCategory(localStorage.getItem("adminToken"));
      setCategoryData(result.data.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);


  //delete category 
  const removeCategory = async (id) => {
    const confirmed = window.confirm(
      "Do you really want to delete this Category?"
    );
    if (!confirmed) return;

    try {
      const arr = [...id];
      const result = await DeleteCategory(
        arr,
        localStorage.getItem("adminToken")
      );
      toast.success("Category deleted successfully!", {
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

  const navigateToAddCategory = () => {
    navigate("/addCategory");
  };
  const navigateToEditCategory = (event,id) => {
    navigate(`/editCategory/${id}`);
  };


  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "category_name",
      headerName: "Category name",
      width: 350,
      flex: 1,
    },
    {
      field: "image",
      headerName: "Icon",
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
                onClick={(event) =>
                  
                  navigateToEditCategory(event, cellValues.id)
                }
              />
            </Tooltip>

            <Tooltip title="Delete">
              <DeleteIcon className="speciality_edit"
              onClick={() => removeCategory(userId)} />
            </Tooltip>
          </div>
        );
      },
    },
  ];

 

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="USER MANAGEMENT" subtitle="Create Category" />
        <Box>
          <Button
            onClick={navigateToAddCategory}
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
            ADD CATEGORY
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
          rows={categoryData}
          columns={columns}
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

export default Category;
