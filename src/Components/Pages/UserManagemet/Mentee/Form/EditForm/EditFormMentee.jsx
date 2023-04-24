import { Box } from "@mui/material";
import React, { useEffect, useLayoutEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../../../../../Header";
import "./EditFormMentee.css";
import { GetMenteeById, EditMentee } from "../../../../../Services/API/API";
import { useParams, useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const EditFormMentee = () => {
  let { id } = useParams();
  const [idData, setIdData] = React.useState({});

  // const getData = async () => {
  //   try {
  //     let result = await GetMenteeById(id);
  //     setIdData(result.data.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // useLayoutEffect(() => {
  //   getData();
  // }, []);

  const onChange = (e) => {
    setIdData({ ...idData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", idData?.name ? idData?.name : "");
    formData.append("email_id", idData?.email_id ? idData?.email_id : "");
    formData.append("gender", idData?.gender ? idData?.gender : "");
    formData.append("dob", idData?.dob ? idData?.dob : "");
    formData.append("mobile", idData?.mobile ? idData?.mobile : "");
    formData.append("bio", idData?.bio ? idData?.bio : "");
    formData.append("experience", idData?.experience ? idData?.experience : "");
    formData.append(
      "profile_pic",
      idData?.profile_pic ? idData?.profile_pic : ""
    );
    formData.append("address", idData?.address ? idData?.address : "");
    formData.append(
      "animal_hospital",
      idData?.animal_hospital ? idData?.animal_hospital : ""
    );
    formData.append(
      "vet_school_attendent",
      idData?.vet_school_attendent ? idData?.vet_school_attendent : ""
    );
    formData.append(
      "graduation_year",
      idData?.graduation_year ? idData?.graduation_year : ""
    );
    console.log("formData", formData);
    EditMentee(formData)
      .then((res) => {
        console.log(res.data, "res");
      })
      .catch((err) => {});
  };

  const navigate = useNavigate();
  const navigateToMentee = () => {
    navigate("/mentee");
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="EDIT MENTEE" subtitle="Edit Mentee Profile" />
      </Box>
      <div className="Mentee_edit_form">
        <Form method="post">
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={idData?.name}
                  name="name"
                  onChange={(e) => onChange(e)}
                  placeholder="Enter name"
                  className="form_control"
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  defaultValue={idData?.email_id}
                  name="email_id"
                  onChange={(e) => onChange(e)}
                  placeholder="Enter email"
                  className="form_control"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Gender</Form.Label>
                <Form.Select
                  name="mentee_type"
                  onChange={(e) => onChange(e)}
                  aria-label={idData?.gender}
                >
                  <option value="FEMALE">FEMALE</option>
                  <option value="MALE">MALE</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={idData?.address}
                  name="address"
                  onChange={(e) => onChange(e)}
                  className="form_control"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Date of birth</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={idData?.dob}
                  name="dob"
                  onChange={(e) => onChange(e)}
                  placeholder="Enter dob"
                  className="form_control"
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="phone"
                  onChange={(e) => onChange(e)}
                  name="phone_number"
                  defaultValue={idData?.mobile}
                  placeholder="Enter phone number"
                  className="form_control"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control
                onChange={(e) => onChange(e)}
                defaultValue={idData?.profile_pic}
                name="profile_picture"
                type="text"
                className="form_control"
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Documents:</Form.Label>
              <br />
              <Form.Check
                inline
                type="checkbox"
                label="Pan Card"
                // checked={isChecked}
                // onChange={handleCheckboxChange}
              />
              <Form.Check
                inline
                type="checkbox"
                label="Aadhar card"
                // checked={isChecked}
                // onChange={handleCheckboxChange}
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                onChange={(e) => onChange(e)}
                defaultValue={idData?.bio}
                as="textarea"
                rows={4}
                name="bio"
                type="text"
                className="form_control"
              />
            </Form.Group>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Animal Hospital</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => onChange(e)}
                  name="animal_hospital"
                  defaultValue={idData?.animal_hospital}
                  placeholder="Enter Animal Hospital"
                  className="form_control"
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Vet School Attended</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => onChange(e)}
                  name="vet_school_attended"
                  defaultValue={idData?.vet_school_attendent}
                  placeholder="Enter vet school attended"
                  className="form_control"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Graduation Year</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => onChange(e)}
                  name="graduation_year"
                  defaultValue={idData?.graduation_year}
                  placeholder="Enter Graduation Year"
                  className="form_control"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Experince</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => onChange(e)}
                  name="experience"
                  defaultValue={idData?.experience}
                  placeholder="Enter Graduation Year"
                  className="form_control"
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="row mt-3">
            <Button
              className="edit_button"
              variant="primary"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>

            <Button
              variant="dark"
              className="edit_button"
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

export default EditFormMentee;
