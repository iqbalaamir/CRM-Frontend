import React from "react";
import "./SendMail.css";
import Logo from "../../../../../assets/chirp logo.png";
import LockTwoToneIcon from "@mui/icons-material/LockTwoTone";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import EastTwoToneIcon from "@mui/icons-material/EastTwoTone";

const SendMail = () => {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };
  const navigateToResetPasword = () => {
    navigate("/forgetPassword");
  };
  return (
    <div className="sendMail_card">
      <div className="logo">
        <img src={Logo}  className="sendMail_logo"></img>
        <h3 className="heading">Forgot Your Password?</h3>
      </div>

      <div className="email_card">
        <div
          className="text"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <LockTwoToneIcon sx={{ mr: "10px", mt: "8px", fontSize: "80" }} />
          <p className="message">
            Enter your Email Address and we will send you an OTP to <br />
            Reset Your Password
          </p>
        </div>
        {/* <hr /> */}

        <div className="sendmail_email_div">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="form_label">Email Address:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter you Email Id here"
              />
            </Form.Group>

           <div style={{marginBottom:"20px",marginTop:"10px"}}>
           <Button
              variant="primary"
              className="request_otp_button"
              type="submit"
              onClick={navigateToResetPasword}
            >
              Request OTP
            </Button>
           </div>

            <Button onClick={navigateToLogin} className="back_to_login_button">
              Back To Login
              <EastTwoToneIcon />
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SendMail;
