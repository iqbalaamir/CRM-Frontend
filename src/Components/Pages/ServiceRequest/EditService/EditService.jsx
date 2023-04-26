import { Box } from "@mui/material";
import React, { useLayoutEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Header from "../../../Header";
import { useParams, useNavigate } from "react-router-dom";
// import "./Category.css";
import { GetServiceById, UpdateService } from "../../../Services/API/API";

const EditService = () => {
  const { id } = useParams();
  const [idData, setIdData] = React.useState({});

  //get category By ID

  useLayoutEffect(() => {
    GetServiceById(id)
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
    formData.append("description", idData?.description ? idData?.description : "");
    formData.append("status", idData?.status ? idData?.status : "");

    UpdateService(idData._id,formData)
      .then((res) => {
        console.log(res.data, "res");
      })
      .catch((err) => {});
  };

  const navigate = useNavigate();
  const navigateToServiecRequest = () => {
    navigate("/service");
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="EDIT SERVICE REQUEST" />
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
            <Form.Label>description</Form.Label>
            <Form.Control
              type="text"
              defaultValue={idData?.description}
              name="description"
              onChange={(e) => onChange(e)}
              placeholder="Enter description"
              className="category_form_control"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicdescription">
  <Form.Label>Status</Form.Label>
  <Form.Select
    aria-label="Select status"
    value={idData?.status} // Use the "value" prop to set the selected option
    onChange={(e) => onChange(e.target.value)} // Pass the selected value to the onChange function
    className="create_admin_form_control"
  >
    <option value="">Select an option</option> {/* Add a default option with no value */}
    <option value="CREATED">CREATED</option>
    <option value="RELEASED">RELEASED</option>
    <option value="OPEN">OPEN</option>
    <option value="CANCELED">CANCELED</option>
    <option value="IN PROCESS">IN PROCESS</option>
    <option value="COMPLETED">COMPLETED</option>
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
              navigateToServiecRequest();
            }}
          >
            Go Back
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default EditService;
