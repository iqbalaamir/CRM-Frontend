import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Box } from "@mui/material";
import Header from "../../../Header";
import { useNavigate } from "react-router-dom";
import { AddAdminUsers } from "../../../Services/API/API";
import { toast } from "react-toastify";
import "./AdminUser.css"

const CreateAdminUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [adminType, setAdminType] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email) {
      toast.error("Please enter name and email");
      return;
    }

    // if (adminType !== "SUBADMIN" || adminType !== "SUPERADMIN" ) {
    //   toast.error("Please select admin Type");
    //   return;
    // }

    try {
      const response = await AddAdminUsers({
        admin_type: adminType,
        email: email,
        name: name,
      });

      if (response.status === 200) {
        toast.success("Admin added successfully");
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
  const navigate = useNavigate();
  const navigateToAdminUser = () => {
    navigate("/adminAddUser");
  };
  return (
    <>
      <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="ADMIN MANAGEMENT" subtitle="Create Sub-Admin" />
        </Box>
        <Form className="form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="create_admin_form_control"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="create_admin_form_control"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Type</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={adminType}
              onChange={(e) => setAdminType(e.target.value)}
              className="create_admin_form_control"
            >
              <option>Select options</option>
              <option value="SUB-ADMIN">SUB-ADMIN</option>
              <option value="ADMIN">ADMIN</option>
            </Form.Select>
          </Form.Group>

         <div className="create_admin_button">
         <Button
            variant="primary"
            className="mx-3 submit_admin_button"
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
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
    </>
  );
};

export default CreateAdminUser;
