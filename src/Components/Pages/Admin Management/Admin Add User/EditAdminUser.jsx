import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Box } from "@mui/material";
import Header from "../../../Header";
import { useNavigate } from "react-router-dom";
import { UpdateCategory } from "../../../Services/API/API";


const EditAdminUser = () => {
  const navigate = useNavigate();
  const navigateToDashboard = () => {
    navigate("/dashboard");
  };
  return (
    <>
      <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="Create Sub-Admin" />
        </Box>
        <Form className="form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="Email" placeholder="Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User type</Form.Label>
            <Form.Select>
              <option>Select options</option>
              <option value="admin">Admin</option>
              <option value="SubAdmin">Sub Admin</option>
              <option value="SuperAdmin">Super Admin</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary" className="mx-3" type="submit">
            Save
          </Button>
          <Button
            onClick={(e) => {
              navigateToDashboard();
            }}
            variant="dark"
          >
            Go back
          </Button>
        </Form>
      </Box>
    </>
  );
};

export default EditAdminUser;
