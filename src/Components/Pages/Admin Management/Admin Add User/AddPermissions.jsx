import { Box } from "@mui/material";
import React from "react";
import Header from "../../../Header";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./AdminUser.css"

const AddPermissions = () => {
  const navigate = useNavigate();
  const navigateToAdminUser = () => {
    navigate("/adminAddUser");
  };
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="ADMIN MANAGEMENT" subtitle="Add Permissions" />
      </Box>

      <Form className="form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="permission_form_lable">Name:</Form.Label>
          <Form.Control type="text" placeholder="Name"  className="form_permission_control"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="permission_form_lable">Email Id:</Form.Label>
          <Form.Control type="Email" placeholder="Email" className="form_permission_control" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="permission_form_lable">Add Permissions:</Form.Label><br/>
          <Form.Check
           inline
            type="checkbox"
            label="View"
            // checked={isChecked}
            // onChange={handleCheckboxChange}
          />

          <Form.Check
           inline
            type="checkbox"
            label="Create"
            // checked={isChecked}
            // onChange={handleCheckboxChange}
          />
          <Form.Check
           inline
            type="checkbox"
            label="Edit"
            // checked={isChecked}
            // onChange={handleCheckboxChange}
          />
          <Form.Check
           inline
            type="checkbox"
            label="Delete"
            // checked={isChecked}
            // onChange={handleCheckboxChange}
          />
        </Form.Group>

        <div className="add_permissions_button">
          <Button variant="primary" className="permission_button mx-3" type="submit">
            Submit
          </Button>
          <Button
            onClick={(e) => {
              navigateToAdminUser();
            }}
            variant="dark"
          >
            Go back
          </Button>
        </div>
      </Form>
    </Box>
  );
};

export default AddPermissions;
