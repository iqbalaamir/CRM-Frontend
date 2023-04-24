import React from "react";
import Button from "react-bootstrap/Button";
import { Box } from "@mui/material";
import Header from "../../../Header";
import { useNavigate } from "react-router-dom";
import "./AdminProfile.css";
import Form from "react-bootstrap/Form";
import { Row, Col} from "react-bootstrap";

const AdminProfile = () => {
  const navigate = useNavigate();

  const navigateToAdminProfileEdit = () => {
    navigate("/editAdminProfile");
  };
  const navigateToDashboard = () => {
    navigate("/dashboard");
  };
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="ADMIN MANAGEMENT" subtitle="Admin's Profile" />
      </Box>
      
      <div className="admin_profile">
        <div className="card_header">USER DETAILS</div>
        <Form className="admin_details_form">
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control name="name" type="text" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Admin Type</Form.Label>
                <Form.Control name="name" type="text" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control name="name" type="text" />
            </Form.Group>
          </Row>
          <Row>
          <Col>
              <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label>
                <Form.Control name="name" type="text" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control name="name" type="text" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
          <Col>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control name="name" type="text" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Country</Form.Label>
                <Form.Control name="name" type="text" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
          <Col>
              <Form.Group className="mb-3">
                <Form.Label>Company</Form.Label>
                <Form.Control name="name" type="text" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Company Website</Form.Label>
                <Form.Control name="name" type="text" />
              </Form.Group>
            </Col>
          </Row>

          <div className="row mt-3 div_button">
            <Button
              className="admin_edit_button"
              variant="primary"
              type="submit"
              
              onClick={navigateToAdminProfileEdit}
            >
              Edit
            </Button>

            <Button
              className="admin_edit_button"
              variant="dark"
              onClick={(e) => {
                navigateToDashboard();
              }}
            >
              Go Back
            </Button>
          </div>
          
        </Form>
      </div>
    </Box>
  );
};

export default AdminProfile;
