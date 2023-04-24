import { Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../../../../../Header";
import "./NewFormMentee.css";
import { AddUser } from "../../../../../Services/API/API";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const NewFormMentee = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  // const [type, setType] = useState();
  const [userType, setUserType] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email) {
      toast.error("Please enter name and email");
      return;
    }

    if (userType !== "MENTEE") {
      toast.error("Please select mentor as user type");
      return;
    }

    try {
      const response = await AddUser({
        user_type: userType,
        email_id: email,
        name: name,
      });

      if (response.status === 200) {
        toast.success("Mentee added successfully");
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        toast.error("Email already exists");
      } else if (error.response.status == 401) {
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

  const navigateToMentee = () => {
    navigate("/mentee");
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="CREATE MENTEE" subtitle="Create a New Mentee Profile" />
      </Box>
      <div className="Mentor_edit_form">
        <Form className="form">
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          {/* <Form.Group className="mb-3">
            <Form.Label>Mentee's Type</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option>Select Mentee's Type</option>
              <option value="Individual">{menteeType[0]}</option>
              <option value="Corporate">{menteeType[1]}</option>
            </Form.Select>
          </Form.Group> */}
          <Form.Group className="mb-3">
            <Form.Label>User type</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option>Select User Type</option>
              <option value="MENTEE">MENTEE</option>
            </Form.Select>
          </Form.Group>

          <div className="row new_button">
            <Button
              className="add_new_button1"
              variant="primary"
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Submit
            </Button>

            <Button
              variant="dark"
              className="add_new_button"
              type="submit"
              onClick={() => navigateToMentee()}
            >
              Go Back
            </Button>
          </div>
        </Form>
      </div>
    </Box>
  );
};

export default NewFormMentee;
