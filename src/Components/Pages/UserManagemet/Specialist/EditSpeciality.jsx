import { Box } from "@mui/material";
import React from "react";
import { Button, Form } from "react-bootstrap";
import Header from "../../../Header";
import { useParams, useNavigate } from "react-router-dom";
import "./Specialist.css"

const EditSpeciality = () => {
  const navigate = useNavigate();
  const navigateToSpeciality = () => {
    navigate("/specialist");
  };
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="USER MANAGEMENT" subtitle="Add Specialist" />
      </Box>
      <div className="form">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Speciality Name</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Enter name"
              //   value={name}
              //   onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
        </Form>
        <div className="button">
          <Button
            className="speciality_edit_button"
            variant="primary"
            type="submit"
            // onClick={(e) => {
            //   onSubmit(e);
            // }}
            //   onClick={handleSubmit}
          >
            Submit
          </Button>

          <Button
            className="speciality_edit_button"
            variant="dark"
              onClick={(e) => {
                navigateToSpeciality();
              }}
          >
            Go Back
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default EditSpeciality;
