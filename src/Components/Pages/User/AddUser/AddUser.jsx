import { Box } from "@mui/material";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Header from "../../../Header";
import { useNavigate } from "react-router-dom";
import FormData from "form-data";
import { CreateUser } from "../../../Services/API/API";
import { toast } from "react-toastify";

const AddUser = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userStatus, setUserStatus] = useState("");
  const [userType, setUserType] = useState("");
  const [editLeads, setEditLeads] = useState(false);
  const [viewLeads, setViewLeads] = useState(false);
  const [searchLeads, setSearchLeads] = useState(false);
  const [deleteLeads, setDeleteLeads] = useState(false);
  const [editService, setEditService] = useState(false);
  const [viewService, setViewService] = useState(false);
  const [searchService, setSearchService] = useState(false);
  const [deleteService, setDeleteService] = useState(false);
  const [editContact, setEditContact] = useState(false);
  const [viewContact, setViewContact] = useState(false);
  const [searchContact, setSearchContact] = useState(false);
  const [deleteContact, setDeleteContact] = useState(false);
  const handleChange = (name, setValue) => {
    setValue((prevState) => !prevState);
  };

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
      formData.append("password",password);
      formData.append("userType", userType);
      formData.append("userStatus", userStatus);
      formData.append("editLeads", editLeads);
      formData.append("viewLeads", viewLeads);
      formData.append("searchLeads", searchLeads);
      formData.append("deleteLeads", deleteLeads);
      formData.append("editService", editService);
      formData.append("viewService", viewService);
      formData.append("searchService", searchService);
      formData.append("deleteService", deleteService);
      formData.append("editContact", editContact);
      formData.append("viewContact", viewContact);
      formData.append("searchContact", searchContact);
      formData.append("deleteContact", deleteContact);
      const response = await CreateUser(formData);

      if (response) {
        toast.success("User added successfully");
        navigate("/users")
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
            <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              required
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}

            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Status</Form.Label>
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
            <Form.Label className="permission_form_lable">Add Permissions:</Form.Label><br />
            <Form.Check
              inline
              name="editLeads"
              type="checkbox"
              label="Edit Leads"
              checked={editLeads}
              onChange={() => handleChange('editLeads', setEditLeads)}
            />
            <Form.Check
              inline
              name="viewLeads"
              type="checkbox"
              label="View Leads"
              checked={viewLeads}
              onChange={() => handleChange('viewLeads', setViewLeads)}
            />
            <Form.Check
              inline
              name="searchLeads"
              type="checkbox"
              label="Search Leads"
              checked={searchLeads}
              onChange={() => handleChange('searchLeads', setSearchLeads)}
            />
            <Form.Check
              inline
              name="deleteLeads"
              type="checkbox"
              label="Delete Leads"
              checked={deleteLeads}
              onChange={() => handleChange('deleteLeads', setDeleteLeads)}
            />
            <Form.Check
              inline
              name="editService"
              type="checkbox"
              label="Edit Service"
              checked={editService}
              onChange={() => handleChange('editService', setEditService)}
            />
            <Form.Check
              inline
              name="viewService"
              type="checkbox"
              label="View Service"
              checked={viewService}
              onChange={() => handleChange('viewService',setViewService)}
            />
            <Form.Check
              inline
              name="searchService"
              type="checkbox"
              label="Search Service"
              checked={searchService}
              onChange={() => handleChange('searchService',setSearchService)}
            />
            <Form.Check
              inline
              name="deleteService"
              type="checkbox"
              label="Delete Service"
              checked={deleteService}
              onChange={() => handleChange('deleteService',setDeleteService)}
            />
            <Form.Check
              inline
              name="editContact"
              type="checkbox"
              label="Edit Contact"
              checked={editContact}
              onChange={() => handleChange('editContact',setEditContact)}
            />
            <Form.Check
              inline
              name="viewContact"
              type="checkbox"
              label="View Contact"
              checked={viewContact}
              onChange={() => handleChange('viewContact',setViewContact)}
            />
            <Form.Check
              inline
              name="searchContact"
              type="checkbox"
              label="Search Contact"
              checked={searchContact}
              onChange={() => handleChange('searchContact',setSearchContact)}
            />
            <Form.Check
              inline
              name="deleteContact"
              type="checkbox"
              label="Delete Contact"
              checked={deleteContact}
              onChange={() => handleChange('deleteContact',setDeleteContact)}
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
            onClick={() => {
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
