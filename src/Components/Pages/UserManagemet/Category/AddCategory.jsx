import { Box } from "@mui/material";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Header from "../../../Header";
import { useNavigate } from "react-router-dom";
import "./Category.css";
import { CreateCategory } from "../../../Services/API/API";
import { toast } from "react-toastify";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  //create category api implementation
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!name) {
      toast.error("Please enter name");
      return;
    }
    if (!image) {
      toast.error("Please insert image");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("image", image);
  
      const response = await CreateCategory(formData);
  
      if (response.status === 200) {
        toast.success("Category added successfully");
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        toast.error("Email already exists");
      } else if (error.response.status === 401) {
        toast.error("Token expired");
        localStorage.removeItem("adminToken");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        toast.error("Something went wrong");
      }
    }
  };
  

  const navigateToCategory = () => {
    navigate("/category");
  };
  return (
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Header title="USER MANAGEMENT" subtitle="Add Specialist" />
      </Box>
      <div className="form">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Category Name</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Icon</Form.Label>
            <Form.Control
              type="file"
              required
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}

            />
          </Form.Group>
        </Form>
        <div className="button">
          <Button
            type="submit"
            className="speciality_edit_button"
            variant="primary"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Submit
          </Button>

          <Button
            className="speciality_edit_button"
            variant="dark"
            onClick={(e) => {
              navigateToCategory();
            }}
          >
            Go Back
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default AddCategory;
