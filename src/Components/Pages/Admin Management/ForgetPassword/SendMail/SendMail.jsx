import React,{ useState } from "react";
import "./SendMail.css";
import LockTwoToneIcon from "@mui/icons-material/LockTwoTone";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import EastTwoToneIcon from "@mui/icons-material/EastTwoTone";
import { forgetPassword } from "../../../../Services/API/API";


const SendMail = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);

    const response = await forgetPassword(formData);
    console.log(response);
    if (response) {
      navigate("/forget-password");
    }
  };

  return (
    <div className="sendMail_card">
      <div className="logo">
        <img
          src="https://www.clutch.com/wp-content/uploads/2018/05/CRM-Mag-Logo.png"
          className="sendMail_logo"
        ></img>
        <h3 className="heading">Forgot Your Password?</h3>
      </div>

      <div className="email_card">
        <div
          className="text"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <LockTwoToneIcon sx={{ mr: "10px", mt: "8px", fontSize: "80" }} />
          <p className="message">
            Enter your Email Address and Reset Your Password <br />
          </p>
        </div>

        <div className="sendmail_email_div">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="form_label">Email Address:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email Id here"
              />
            </Form.Group>

            <div style={{ marginBottom: "20px", marginTop: "10px" }}>
              <Button
                variant="primary"
                className="request_otp_button"
                type="submit"
              >
                Submit
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

