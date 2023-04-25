import { Box } from "@mui/material";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Header from "../../../Header";
import { useNavigate } from "react-router-dom";

import { CreateLeads } from "../../../Services/API/API";
import { toast } from "react-toastify";

const AddLead = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [phone, setPhone] = useState("");
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
    if (!phone) {
      toast.error("Please insert phone");
      return;
    }
    if (!status) {
      toast.error("Please insert status");
      return;
    }
    try {
      
      const response = await CreateLeads({
        name: name,
        email: email,
        phone: phone,
        status:status
      });
      console.log(response)
      if (response) {
        toast.success("Leads added successfully");
        navigate("/lead")
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
            <Form.Label>Status</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="create_admin_form_control"
            >
              <option>Select options</option>
              <option value="NEW">NEW</option>
              <option value="LOST">LOST</option>
              <option value="CONTACTED">CONTACTED</option>
              <option value="QUALIFIED">QUALIFIED</option>
              <option value="CANCELED">CANCELED</option>
              <option value="CONFIRMED">CONFIRMED</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Enter Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}

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

export default AddLead;
