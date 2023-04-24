import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Header from "../../../../Header";
import "./ViewMentor.css";
import { Row, Col, Button } from "react-bootstrap";
// import { GetMentorById } from "../../../../Services/API/API";
import { useParams, useNavigate } from "react-router-dom";
import { BASE_URL_IMAGE } from "../../../../Services/host";

const ViewMentor = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  //implementation of getMentorById
  const [idData, setIdData] = React.useState([]);
  // const getData = async () => {
  //   try {
  //     let result = await GetMentorById(id);
  //     setIdData(result.data.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  const navigateToEditFormMentor = (event) => {
    navigate(`/editformMentor/${id}`);
  };

  const navigateToMentor = () => {
    navigate("/mentor");
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="View Profile" subtitle="View Mentor's Information" />
      </Box>
      <Row className="container profile_container ">
        <Col sm={3}>
          <div className="card profile_left ">
            <div className="card-body">
              <div className="account-settings">
                <div className="user-profile">
                  <div className="user-avatar d-flex flex-column align-items-center text-center">
                    <img
                      src={`${BASE_URL_IMAGE}${idData?.profile_pic}`}
                      alt="Mentor's image"
                      width="150"
                    />
                  </div>
                  <h5 className="user-name">{idData?.name}</h5>
                  <h6 className="user-email">{idData?.email_id}</h6>
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
                  <h6 className="mb-0">Status</h6>
                </div>
                <div className="col-sm-9 text-secondary">{idData?.status}</div>
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
                  <h6 className="mb-0">Address</h6>
                </div>
                <div className="col-sm-9 text-secondary">{idData?.address}</div>
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
                  <h6 className="mb-0">Speciality</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {idData?.speciality}
                </div>
              </div>
              <hr />

              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Category</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {idData?.category_list_id}
                </div>
              </div>
              <hr />

              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Documents</h6>
                </div>
                <div className="col-sm-9 text-secondary">{idData?.proof}</div>
              </div>
              <hr />

              <div className="row">
                <Button
                  className="profile_button"
                  variant="dark"
                  onClick={() => navigateToMentor()}
                >
                  Go Back
                </Button>
                <Button
                  className="profile_button"
                  variant="primary"
                  onClick={() => navigateToEditFormMentor()}
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

export default ViewMentor;
