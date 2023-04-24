import { Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../../../../../Header";
import "./NewFormMentor.css";
import { AddUser } from "../../../../../Services/API/API";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewFormMentor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email) {
      toast.error("Please enter name and email");
      return;
    }

    if (userType !== "MENTOR") {
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
        toast.success("Mentor added successfully");
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

  const navigateToMentor = () => {
    navigate("/mentor");
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="CREATE MENTOR" subtitle="Create a New Mentor Profile" />
      </Box>
      <div className="Mentor_new_form">
        <Form className="form">
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="new_form_control"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email_id"
              placeholder="Enter email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="new_form_control"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>USER TYPE</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="new_form_control"
            >
              <option>Select Role</option>
              <option value="MENTOR">MENTOR</option>
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
              onClick={() => navigateToMentor()}
            >
              Go Back
            </Button>
          </div>
        </Form>
      </div>
    </Box>
  );
};

export default NewFormMentor;
