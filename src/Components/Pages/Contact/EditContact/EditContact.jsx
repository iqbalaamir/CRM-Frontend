import { Box } from "@mui/material";
import React, { useLayoutEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Header from "../../../Header";
import { useParams, useNavigate } from "react-router-dom";
// import "./Category.css";
import { GetContactById, UpdateContact } from "../../../Services/API/API";

const EditContact = () => {
  const { id } = useParams();
  const [idData, setIdData] = React.useState({});

  //get category By ID

  useLayoutEffect(() => {
    GetContactById(id)
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
    formData.append("name", idData?.name ? idData?.name : "");
    formData.append("email", idData?.email ? idData?.email : "");
    formData.append("userStatus", idData?.userStatus ? idData?.userStatus : "");

    UpdateContact(idData?._id,formData)
      .then((res) => {
        console.log(res.data, "res");
        navigate(-1)
      })
      .catch((err) => {});
  };

  const navigate = useNavigate();


  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="EDIT CONTACT" />
      </Box>
      <div className="form">
        <Form method="post">
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              defaultValue={idData?.firstName}
              name="firstName"
              onChange={(e) => onChange(e)}
              placeholder="Enter first name"
              className="category_form_control"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              defaultValue={idData?.lastName}
              name="lastName"
              onChange={(e) => onChange(e)}
              placeholder="Enter last name"
              className="category_form_control"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              defaultValue={idData?.email}
              name="email"
              onChange={(e) => onChange(e)}
              placeholder="Enter email"
              className="category_form_control"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              defaultValue={idData?.address}
              name="address"
              onChange={(e) => onChange(e)}
              placeholder="Enter Address"
              className="category_form_control"
            />
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
              navigate(-1);
            }}
          >
            Go Back
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default EditContact;
