import React, { useState, useContext, useEffect } from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Signin } from "../../Services/API/API";
import { AuthContext } from "../../Context/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "react-bootstrap";
import LoginPageImage from "../../../assets/LoginPageImage.png";
import logo from "../../../assets/chirp logo.png";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";

const Login = () => {
  // const navigate = useNavigate();
  const navigateToSendMail = () => {
    navigate("/SendMail");
  };
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const { LoadUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function onSubmit(e) {
    try {
      e.preventDefault();

      let result = await Signin(formData);
      console.log(result.data, "11111111111111111");
      // localStorage.setItem("adminToken", result.data.accessToken);
      if (
        result.data.accessToken != null &&
        result.data.accessToken !== undefined
      ) {
        localStorage.setItem("adminToken", result.data.accessToken);

        setTimeout(() => {
          navigate("/users");
        }, 3000);
      }
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      // alert();
    }
  }
  useEffect(() => {
    if (!LoadUser()) {
      navigate("/login");
    } else {
      navigate("/users");
    }
  }, []);

  return (
    <MDBContainer className="login_form_container">
      <MDBCard className="login_form_card">
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src={LoginPageImage}
              alt="login form"
              className="rounded-start w-100 h-100"
            />
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <MDBIcon
                  fas
                  icon="cubes fa-3x me-3"
                  style={{ color: "#ff6219" }}
                />
                <span className="h1 fw-bold mb-0">
                  <h1
                    style={{
                      alignItems: "center",
                      marginLeft: "100px",
                      fontWeight: "bold",
                    }}
                  >
                    CRM
                  </h1>
                  {/* <img src={logo} className="login_logo"></img> */}
                </span>
              </div>

              <h5
                className="fw-normal my-4 pb-3 login_form_heading"
                style={{ letterSpacing: "1px" }}
              >
                ADMIN LOGIN
              </h5>

              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="formControlLg"
                type="email"
                required
                size="lg"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
              />

              <button
                className="login_form_button mb-4"
                onClick={(e) => {
                  onSubmit(e);
                  // handleClick({ vertical: "top", horizontal: "right" });
                }}
              >
                Login
              </button>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />

              {/* <Link to="/SendMail">Forgot password?</Link> */}
              <Button
                onClick={navigateToSendMail}
                className="admiin_forgetpwd_button"
              >
                Forget Password?
              </Button>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
};

export default Login;
