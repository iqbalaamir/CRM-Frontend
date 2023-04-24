import { Box } from "@mui/material";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Header from "../../../Header";
import { useNavigate } from "react-router-dom";

import { CreateUser } from "../../../Services/API/API";
import { toast } from "react-toastify";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userStatus, setUserStatus] = useState("");
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();

  //create category api implementation
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!name) {
      toast.error("Please enter name");
      return;
    }
    if (!email) {
      toast.error("Please insert Email");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("userType", userType);
      formData.append("userStatus", userStatus);
  
      const response = await CreateUser(formData);
  
      if (response.status === 200) {
        toast.success("User added successfully");
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
    navigate("/users");
  };
  return (
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Header title="ADD USER" />
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
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}

            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Type</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={userStatus}
              onChange={(e) => setUserStatus(e.target.value)}
              className="create_admin_form_control"
            >
              <option>Select options</option>
              <option value="APPROVED">APPROVED</option>
              <option value="REJETED">REJETED</option>
              <option value="PENDING">PENDING</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Type</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="create_admin_form_control"
            >
              <option>Select options</option>
              <option value="MANAGER">MANAGER</option>
              <option value="EMPLOYEE">EMPLOYEE</option>
            </Form.Select>
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

export default AddUser;
