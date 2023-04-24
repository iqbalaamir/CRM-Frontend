import React from "react";
import "./AdminProfile.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Box } from "@mui/material";
import Header from "../../../Header";
import { useNavigate } from "react-router-dom";

const EditAdminProfile = () => {
  const navigate = useNavigate();
  const navigateToDashboard = () => {
    navigate("/dashboard");
  };
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="ADMIN MANAGEMENT" subtitle="Edit Admin Profile" />
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
          <Form.Label>Country</Form.Label>
          <Form.Control type="text" placeholder="Country" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Communication Address</Form.Label>
          <Form.Control type="text" placeholder="Communication Address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Contact Phone</Form.Label>
          <Form.Control type="phone" placeholder="Contact Phone" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Company name</Form.Label>
          <Form.Control type="text" placeholder="Company name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Company Site</Form.Label>
          <Form.Control type="text" placeholder="Company Site" />
        </Form.Group>
        <Button variant="primary" className="mx-3" type="submit">
          Submit
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
  );
};

export default EditAdminProfile;
