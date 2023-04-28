import { Box } from "@mui/material";
import React, { useLayoutEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Header from "../../../Header";
import { useNavigate, useParams } from "react-router-dom";
import FormData from "form-data";
import { UpdateUser, GetUserById } from "../../../Services/API/API";
import { toast } from "react-toastify";

const EditUser = () => {
  const { id } = useParams();
  const [idData, setIdData] = React.useState({});
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userStatus, setUserStatus] = useState("");
  const [userType, setUserType] = useState("");
  const [editLeads, setEditLeads] = useState(false);
  const [viewLeads, setViewLeads] = useState(!!idData?.viewLeads);
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
  console.log(viewLeads,idData.viewLeads)
  const handleChange = (name, setValue) => {
    setValue((prevState) => !prevState);
  };
  //getUser By ID
  useLayoutEffect(() => {
    GetUserById(id)
      .then((res) => {
        setIdData(res.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, [id]);

  const onChange = (e) => {
    setIdData({ ...idData, [e.target.name]: e.target.value });
  };

  //create user api implementation
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", idData?.name ? idData?.name : "");
    formData.append("email", idData?.email ? idData?.email : "");
    formData.append("password", idData?.password ? idData?.password : "");
    formData.append("userType", idData?.userType ? idData?.userType : "");
    formData.append("userStatus", idData?.userStatus ? idData?.userStatus : "");
    formData.append("editLeads", idData?.editLeads ? idData?.editLeads : false);
    formData.append("viewLeads", idData?.viewLeads ? idData?.viewLeads : false);
    formData.append(
      "searchLeads",
      idData?.searchLeads ? idData?.searchLeads : false
    );
    formData.append(
      "deleteLeads",
      idData?.deleteLeads ? idData?.deleteLeads : false
    );
    formData.append(
      "editService",
      idData?.editService ? idData?.editService : false
    );
    formData.append(
      "viewService",
      idData?.viewService ? idData?.viewService : false
    );
    formData.append(
      "searchService",
      idData?.searchService ? idData?.searchService : false
    );
    formData.append(
      "deleteService",
      idData?.deleteService ? idData?.deleteService : false
    );
    formData.append(
      "editContact",
      idData?.editContact ? idData?.editContact : false
    );
    formData.append(
      "viewContact",
      idData?.viewContact ? idData?.viewContact : false
    );
    formData.append(
      "searchContact",
      idData?.searchContact ? idData?.searchContact : false
    );
    formData.append(
      "deleteContact",
      idData?.deleteContact ? idData?.deleteContact : false
    );
    console.log("333333333333", formData, formData.userId);
    // const response = await UpdateUser(formData);

    UpdateUser(idData._id, formData)
      .then((res) => {
        console.log(res.data, "res");
        navigate(-1)
      })
      .catch((err) => {});
  };

  const navigateToUser = () => {
    navigate("/users");
  };
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="EDIT USER" />
      </Box>
      <div className="form">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Enter name"
              defaultValue={idData?.name}
              // value={name}
              onChange={(e) => onChange(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Enter Email"
              defaultValue={idData?.email}
              // value={email}
              onChange={(e) => onChange(e)}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              required
              placeholder="Enter Password"
              // value={password}
              defaultValue={idData?.password}
              onChange={(e) => onChange(e)}
              // onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Status</Form.Label>
            <Form.Select
              value={idData?.userStatus}
              aria-label="Default select example"
              // onChange={(e) => setUserStatus(e.target.value)}
              onChange={(e) => onChange(e)}
              className="create_admin_form_control"
            >
              <option>Select options</option>
              <option value="APPROVED" >
                APPROVED
              </option>
              <option value="REJECTED" >
                REJECTED
              </option>
              <option value="PENDING" >
                PENDING
              </option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Type</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={idData?.userType}
              onChange={(e) => onChange(e)}
              className="create_admin_form_control"
            >
              <option>Select options</option>
              <option value="ADMIN">
                ADMIN
              </option>
              <option value="MANAGER">
                MANAGER
              </option>
              <option value="EMPLOYEE">
                EMPLOYEE
              </option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="permission_form_lable">
              Add Permissions:
            </Form.Label>
            <br />
            <Form.Check
              inline
              name="editLeads"
              type="checkbox"
              label="Edit Leads"
              checked={idData?.editLeads}
              onChange={() => handleChange("editLeads", setEditLeads)}
              // onChange={(e) => handleChange(e)}
            />
            <Form.Check
              inline
              name="viewLeads"
              type="checkbox"
              label="View Leads"
              checked={viewLeads}
              onChange={() => handleChange("viewLeads", setViewLeads)}
            />
            <Form.Check
              inline
              name="searchLeads"
              type="checkbox"
              label="Search Leads"
              checked={idData?.searchLeads}
              // onChange={(e) => onChange(e)}
              onChange={() => handleChange("searchLeads", setSearchLeads)}
            />
            <Form.Check
              inline
              name="deleteLeads"
              type="checkbox"
              label="Delete Leads"
              checked={idData?.deleteLeads}
              // onChange={(e) => onChange(e)}
              onChange={() => handleChange("deleteLeads", setDeleteLeads)}
            />
            <Form.Check
              inline
              name="editService"
              type="checkbox"
              label="Edit Service"
              checked={idData?.editService}
              // onChange={(e) => onChange(e)}
              onChange={() => handleChange("editService", setEditService)}
            />
            <Form.Check
              inline
              name="viewService"
              type="checkbox"
              label="View Service"
              checked={idData?.viewService}
              // onChange={(e) => onChange(e)}
              onChange={() => handleChange("viewService", setViewService)}
            />
            <Form.Check
              inline
              name="searchService"
              type="checkbox"
              label="Search Service"
              checked={idData?.searchService}
              // onChange={(e) => onChange(e)}
              onChange={() => handleChange("searchService", setSearchService)}
            />
            <Form.Check
              inline
              name="deleteService"
              type="checkbox"
              label="Delete Service"
              checked={idData?.deleteService}
              // onChange={(e) => onChange(e)}
              onChange={() => handleChange("deleteService", setDeleteService)}
            />
            <Form.Check
              inline
              name="editContact"
              type="checkbox"
              label="Edit Contact"
              checked={idData?.editContact}
              // onChange={(e) => onChange(e)}
              onChange={() => handleChange("editContact", setEditContact)}
            />
            <Form.Check
              inline
              name="viewContact"
              type="checkbox"
              label="View Contact"
              checked={idData?.viewContact}
              // onChange={(e) => onChange(e)}
              onChange={() => handleChange("viewContact", setViewContact)}
            />
            <Form.Check
              inline
              name="searchContact"
              type="checkbox"
              label="Search Contact"
              checked={idData?.searchContact}
              // onChange={(e) => onChange(e)}
              onChange={() => handleChange("searchContact", setSearchContact)}
            />
            <Form.Check
              inline
              name="deleteContact"
              type="checkbox"
              label="Delete Contact"
              checked={idData?.deleteContact}
              onChange={(e) => onChange(e)}
              // onChange={() => handleChange("deleteContact", setDeleteContact)}
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

export default EditUser;
