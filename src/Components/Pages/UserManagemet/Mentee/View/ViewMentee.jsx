import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Header from "../../../../Header";
import "./ViewMentee.css";
import { Row, Col, Button } from "react-bootstrap";
import { GetMenteeById } from "../../../../Services/API/API";
import { useParams, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../../Services/host";

const ViewMentee = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  //implementation of getMenteeById
  const [idData, setIdData] = React.useState([]);
  const getData = async () => {
    try {
      let result = await GetMenteeById(id);
      setIdData(result.data.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const navigateToEditFormMentee = (event) => {
    navigate(`/editformMentee/${id}`);
  };

  const navigateToMentee = () => {
    navigate("/mentee");
  };
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="View Profile" subtitle="View Mentee's Information" />
      </Box>
      <Row className="container profile_container ">
        <Col sm={3}>
          <div className="card profile_left ">
            <div className="card-body">
              <div className="account-settings">
                <div className="user-profile">
                  <div className="user-avatar d-flex flex-column align-items-center text-center">
                    <img
                      src={`${BASE_URL}${idData.profile_picture}`}
                      // alt="Mentee's image"
                      // class="rounded-circle"
                      width="150"
                    />
                  </div>
                  <h5 className="user-name">{idData?.name}</h5>
                  <h6 className="user-email">{idData?.email}</h6>
                </div>
                <div className="about">
                  <h5 className="mb-2 text-primary">Bio</h5>
                  <p>{idData?.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={9}>
          <div className="card profile_right ">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Full Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">{idData?.name}</div>
              </div>
              <hr />


              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {idData?.email_id}
                </div>
              </div>
              <hr />

              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Gender</h6>
                </div>
                <div className="col-sm-9 text-secondary">{idData?.gender}</div>
              </div>
              <hr />

              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Address</h6>
                </div>
                <div className="col-sm-9 text-secondary">{idData?.address}</div>
              </div>
              <hr />

              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Phone Number</h6>
                </div>
                <div className="col-sm-9 text-secondary">{idData?.mobile}</div>
              </div>
              <hr />

              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Date Of Birth</h6>
                </div>
                <div className="col-sm-9 text-secondary">{idData?.dob}</div>
              </div>
              <hr />

              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Animal Hospital</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {idData?.animal_hospital}
                </div>
              </div>
              <hr />

              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Vet School Attended</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {idData?.vet_school_attendent}
                </div>
              </div>
              <hr />

              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Graduation Year</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {idData?.graduation_year}
                </div>
              </div>
              <hr />

              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Experience</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {idData?.experience}
                </div>
              </div>
              <hr />

              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Documents</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {idData?.proof}
                </div>
              </div>
              <hr />

              <div className="row">
                <Button
                  className="profile_button"
                  variant="dark"
                  onClick={() => navigateToMentee()}
                >
                  Close
                </Button>
                <Button
                  className="profile_button"
                  variant="primary"
                  onClick={() => navigateToEditFormMentee()}
                >
                  Edit
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Box>
  );
};

export default ViewMentee;
