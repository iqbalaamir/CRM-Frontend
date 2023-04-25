import { Box } from "@mui/material";
import React, { useLayoutEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Header from "../../../Header";
import { useParams, useNavigate } from "react-router-dom";
// import "./Category.css";
import { GetUserById, UpdateCategory } from "../../../Services/API/API";

const EditUser = () => {
  const { id } = useParams();
  const [idData, setIdData] = React.useState({});

  //get category By ID

  useLayoutEffect(() => {
    GetUserById(id)
      .then((res) => {
        setIdData(res.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, [id]);

  console.log("3333333333333333",idData);

  //update category api implementation

  const onChange = (e) => {
    setIdData({ ...idData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userId", id);
    formData.append("name", idData?.name ? idData?.name : "");
    formData.append("email", idData?.email ? idData?.email : "");
    formData.append("userStatus", idData?.userStatus ? idData?.userStatus : "");

    UpdateCategory(formData)
      .then((res) => {
        console.log(res.data, "res");
      })
      .catch((err) => {});
  };

  const navigate = useNavigate();
  const navigateToUser = () => {
    navigate("/users");
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="EDIT USER" />
      </Box>
      <div className="form">
        <Form method="post">
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              defaultValue={idData?.name}
              name="name"
              onChange={(e) => onChange(e)}
              placeholder="Enter name"
              className="category_form_control"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email Id</Form.Label>
            <Form.Control
              type="text"
              defaultValue={idData?.email}
              name="email"
              onChange={(e) => onChange(e)}
              placeholder="Enter email"
              className="category_form_control"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Status</Form.Label>
            <Form.Select
              aria-label="Default select example"
              defaultValue={idData?.userStatus}
              onChange={(e) => onChange(e)}
              className="create_admin_form_control"
            >
              <option>Select options</option>
              <option value="APPROVED">APPROVED</option>
              <option value="REJETED">REJETED</option>
              <option value="PENDING">PENDING</option>
            </Form.Select>
          </Form.Group>
        </Form>
        <div className="button">
          <Button
            className="speciality_edit_button"
            variant="primary"
            type="submit"
            onClick={handleSubmit}
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
