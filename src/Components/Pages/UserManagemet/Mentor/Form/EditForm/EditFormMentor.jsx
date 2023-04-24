import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../../../../../Header";
import "./EditFormMentor.css";
// import { EditMentor, GetMentorById } from "../../../../../Services/API/API";
import { useParams, useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";

const EditFormMentor = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [mentorData, setMentorData] = useState();

  //implementation of getMentorById
  // useEffect(() => {
  //   GetMentorById(id)
  //     .then((res) => {
  //       setMentorData(res.data.data);
  //     })
  //     .catch((e) => {});
  // }, []);

  
  const [formData, setFormData] = useState({
    name: mentorData?.name,
    email_id:mentorData?.email_id,
    gender: mentorData?.gender,
  });


  //edit mentor submit function
  // const handleSubmit = () => {
  //   alert(formData.name);
  //   EditMentor(formData.name)
  //     .then((response) => {
  //       console.log("notify", response);
  //       // navigate(pathname)
  //     })
  //     .catch((error) => {
  //       // console.log(error, "error");
  //     });
  // };

  const navigateToMentor = () => {
    navigate("/mentor");
  };
  console.log("name", formData.name);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="EDIT MENTOR" subtitle="Edit Mentor Profile" />
      </Box>
      <div className="Mentor_edit_form">
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  // onChange={(e) => updatedData(e)}
                  // defaultValue={mentorData.name}
                  // value={formData.name}
                  name="name"
                  type="text"
                  // placeholder={mentorData.name}
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                  }}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  // onChange={(e) => updatedData(e)}
                  // defaultValue={mentorData.email_id}
                  name="email"
                  type="email"
                  value={formData.email_id}
                  onChange={(e) => {
                    setFormData({ ...formData, email_id: e.target.value });
                  }}
                  // value={email_id}
                  // placeholder={mentorData.email_id}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  // onChange={(e) => onChange(e)}
                  // defaultValue={mentorData.address}
                  name="address"
                  type="text"
                  // placeholder={mentorData.address}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  // onChange={(e) => onChange(e)}
                  // defaultValue={mentorData.dob}
                  name="date_of_birth"
                  type="text"
                  placeholder="Enter dob"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  // onChange={(e) => onChange(e)}
                  name="phone_number"
                  // defaultValue={idData?.mobile}
                  type="phone"
                  placeholder="Enter phone number"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Gender:</Form.Label>
                <Form.Select
                  name="gender"
                  // onChange={(e) => onChange(e)}
                  // aria-label={idData?.gender}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control
                  // onChange={(e) => onChange(e)}
                  // defaultValue={idData?.profile_pic}
                  name="profile_picture"
                  type="text"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Documents</Form.Label>
                <Form.Control
                  // onChange={(e) => onImgInput(e)}
                  // defaultValue={idData?.proof}
                  name="profile_picture"
                  type="file"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Select2
                  multiple={true}
                  data={["Option 1", "Option 2", "Option 3"]}
                  options={{
                    placeholder: "Select an option",
                  }}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Speciality</Form.Label>
                <Form.Control
                  // onChange={(e) => onChange(e)}
                  // defaultValue={idData?.speciality}
                  type="text"
                  name="Speciality"
                  placeholder="Enter Speciality"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Experience</Form.Label>
                <Form.Control
                  // onChange={(e) => onChange(e)}
                  // defaultValue={idData?.experience}
                  name="experience"
                  type="text"
                  placeholder="Enter Your experince here"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Bio</Form.Label>
                <Form.Control
                  // onChange={(e) => onChange(e)}
                  // defaultValue={idData?.bio}
                  as="textarea"
                  rows={4}
                  name="bio"
                  placeholder="Enter Bio"
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="row mt-3">
            <Button
              className="edit_button"
              variant="primary"
              type="submit"
              // onClick={(e) => {
              //   onSubmit(e);
              // }}
              // onClick={handleSubmit}
            >
              Submit
            </Button>

            <Button
              className="edit_button"
              variant="dark"
              onClick={(e) => {
                navigateToMentor();
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

export default EditFormMentor;
