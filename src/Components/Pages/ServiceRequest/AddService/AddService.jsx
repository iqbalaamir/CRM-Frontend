import { Box } from "@mui/material";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Header from "../../../Header";
import { useNavigate } from "react-router-dom";

import { CreateService } from "../../../Services/API/API";
import { toast } from "react-toastify";

const AddService = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  //create category api implementation
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!name) {
      toast.error("Please enter name");
      return;
    }
    if (!description) {
      toast.error("Please insert description");
      return;
    }
    if (!status) {
      toast.error("Please insert status");
      return;
    }
    try {
      
      const response = await CreateService({
        name: name,
        description: description,
        status:status
      });
      console.log(response)
      if (response) {
        toast.success("Service added successfully");
        navigate("/service")
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
  

  const navigateToUser = () => {
    navigate(-1);
  };
  return (
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Header title="ADD SERVICE" />
      </Box>
      <div className="form">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>description</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}

            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicdescription">
            <Form.Label>Status</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="create_admin_form_control"
            >
              <option>Select options</option>
              <option value="CREATED">CREATED</option>
              <option value="RELEASED">RELEASED</option>
              <option value="OPEN">OPEN</option>
              <option value="CANCELED">CANCELED</option>
              <option value="IN PROCESS">IN PROCESS</option>
              <option value="COMPLETED">COMPLETED</option>
            </Form.Select>
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
              navigateToUser();
            }}
          >
            Go Back
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default AddService;
