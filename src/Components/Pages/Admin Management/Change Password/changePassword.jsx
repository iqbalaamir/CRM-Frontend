import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./changePassword.css";
import { Box } from "@mui/material";
import Header from "../../../Header";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const navigate = useNavigate();
  const navigateToDashboard = () => {
    navigate("/dashboard");
  };
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="ADMIN MANAGEMENT" subtitle="CHANGE PASSWORD" />
      </Box>
      <Form className="form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Current Password</Form.Label>
          <Form.Control type="password" placeholder="Current Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control type="password" placeholder=" New Password" />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>

        <Button variant="primary" className="mx-3" type="submit">
          Change Password
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

export default ChangePassword;
