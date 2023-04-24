import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Logo from "../../../../../assets/chirp logo.png";
import { useNavigate } from "react-router-dom";
import "./ForgetPassword.css";
import EastTwoToneIcon from "@mui/icons-material/EastTwoTone";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };

 
  return (
    <div className="forgetPassword_card">
      <div className="logo">
        <img src={Logo} className="sendMail_logo"></img>
        <h3 className="heading">Reset Your Password</h3>
      </div>

      <div className="email_card">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter OTP:</Form.Label>
            <Form.Control type="password" placeholder=" Enter your OTP here" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control type="password" placeholder=" New Password" />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>

          <div style={{marginBottom:"20px",marginTop:"10px"}}>
           <Button
              variant="primary"
              className="reset_password_button"
              type="submit"
              // onClick={navigateToResetPasword}
            >
              Reset Password
            </Button>
           </div>

            <Button onClick={navigateToLogin} className="back_to_login_button">
              Back To Login
              <EastTwoToneIcon />
            </Button>
        </Form>
      </div>
    </div>
  );
};

export default ForgetPassword;
