import React,{useState} from "react";
import { Form, Button, Alert } from 'react-bootstrap';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import "./ForgetPassword.css";

const ForgetPassword = () => {
  const location = useLocation();
  // const history = useHistory();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get('email');
    const token = searchParams.get('token');

    if (!password || !confirmPassword) {
      setErrorMsg('Please enter a password and confirm it');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg('The passwords do not match');
      return;
    }

    try {
      await axios.post('/api/reset-password', { email, token, password });
      setSuccessMsg('Your password has been reset successfully');
    } catch (error) {
      setErrorMsg('An error occurred while resetting your password');
    }
  };

 
  return (
    <div className="reset-password">
      <h2>Reset Password</h2>
      {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
      {successMsg && <Alert variant="success">{successMsg}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="password">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Reset Password
        </Button>
      </Form>
    </div>
    );
};

export default ForgetPassword;
