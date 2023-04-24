import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Header from "../../../Header";
import { useParams, useNavigate } from "react-router-dom";
import { GetMentorById, ChangeMentorPassord } from "../../../Services/API/API";
import { toast } from "react-toastify";
import { Button, Form } from "react-bootstrap";
import "./Mentor.css";

const ChangeMentorPassword = () => {
  let { id } = useParams();

  const navigate = useNavigate();
  const navigateToMentor = () => {
    navigate("/mentor");
  };

  //implementation of getMentorById
  const [idData, setIdData] = React.useState([]);
  const getData = async () => {
    try {
      let result = await GetMentorById(id);
      setIdData(result.data.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  //change password api implementation
  const changeMentorPassword = async (email_id) => {
    try {
      let result = await ChangeMentorPassord(email_id);
      if (result.status === 200) {
        toast.success(" Email Sent !", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (e) {
      if (e.response.status == 401) {
        toast.error("Token expired", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      localStorage.removeItem("adminToken");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="CHANGE PASSWORD" subtitle="Change Mentor's Password" />
      </Box>
      <div className="form">
        <Form>
          <Form.Group>
            <Form.Label className="form_lable">
              {" "}
              Enter your Email address:
            </Form.Label>
            <Form.Control
              // onChange={(e) => onChange(e)}
              defaultValue={idData?.email_id}
              name="email"
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
        </Form>
        <div className="button">
          <Button
            className="change_password_button"
            variant="dark"
            onClick={() => navigateToMentor()}
          >
            Go Back
          </Button>
          <Button
            className="change_password_button"
            variant="primary"
            // onClick={(e) => changeMentorPassword(e)}
            onClick={() => changeMentorPassword(idData.email_id)}
          >
            Send Mail
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default ChangeMentorPassword;
