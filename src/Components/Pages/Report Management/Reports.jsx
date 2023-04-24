import React, { useEffect, useState } from "react";
import Header from "../../Header";
import { Box } from "@mui/material";
import { Card, Row, Col } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import "./Report.css";
import ArrowCircleRightTwoToneIcon from "@mui/icons-material/ArrowCircleRightTwoTone";
import { useNavigate } from "react-router-dom";

const Reports = () => {
  const navigate = useNavigate();
  const [mentorCount, setMentorCount] = useState(0);
  const [menteeCount, setMenteeCount] = useState(0);
  const [paymentCount, setPaymentCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (mentorCount < 1000) {
        setMentorCount(mentorCount + 10);
      } else {
        clearInterval(intervalId);
      }
    }, 10);
    return () => clearInterval(intervalId);
  }, [mentorCount]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (menteeCount < 2000) {
        setMenteeCount(menteeCount + 10);
      } else {
        clearInterval(intervalId);
      }
    }, 10);
    return () => clearInterval(intervalId);
  }, [menteeCount]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (paymentCount < 3000) {
        setPaymentCount(paymentCount + 10);
      } else {
        clearInterval(intervalId);
      }
    }, 10);
    return () => clearInterval(intervalId);
  }, [paymentCount]);

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const navigateToMentorReport = () => {
    navigate("/mentorReport");
  };

  const navigateToMenteeReport = () => {
    navigate("/menteeReport");
  };

  const navigateToPaymentReport = () => {
    navigate("/paymentReport");
  };

  const navigateToTranscriptReport = () => {
    navigate("/callTranscript");
  };
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="REPORT MANAGEMENT" subtitle="View All Reports Here!" />
      </Box>
      <div className="row">
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card tale-bg">
            <Line data={data} />
          </div>
        </div>
        <div className="col-md-6 grid-margin transparent">
          <div className="cards_report">
            <Row style={{ marginBottom: "30px" }}>
              <Col>
                <Card className="card_1">
                  <Card.Body>
                    <div className="card_body_1">
                      <Card.Title>TOTAL MENTORS</Card.Title>
                      <ArrowCircleRightTwoToneIcon
                        onClick={() => navigateToMentorReport()}
                        className="report_arrow_icon"
                        sx={{
                          transform: "scale(1.8)",
                        }}
                      />
                    </div>
                    <div className="mentorCount">
                      <h1>{mentorCount}
                      <sub className="counter_subscript">+ mentor</sub>
                      </h1>
                    </div>
                  </Card.Body>
                  <Card.Footer className="report_card_footer_1"></Card.Footer>
                </Card>
              </Col>
              <Col>
                <Card className="card_2">
                  <Card.Body>
                    <div className="card_body_2">
                      <Card.Title>TOTAL MENTEES</Card.Title>
                      <ArrowCircleRightTwoToneIcon
                        onClick={() => navigateToMenteeReport()}
                        className="report_arrow_icon"
                        sx={{
                          transform: "scale(1.8)",
                        }}
                      />
                    </div>
                    <div className="menteeCount">
                      <h1>
                        {menteeCount}
                        <sub className="counter_subscript">+ mentee</sub>
                      </h1>
                    </div>
                  </Card.Body>
                  <Card.Footer className="report_card_footer_2"></Card.Footer>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="card_3">
                  <Card.Body>
                    <div className="card_body_3">
                      <Card.Title>PAYMENT INVOICES</Card.Title>
                      <ArrowCircleRightTwoToneIcon
                        onClick={() => navigateToPaymentReport()}
                        className="report_arrow_icon"
                        sx={{
                          transform: "scale(1.8)",
                        }}
                      />
                    </div>
                    <div className="paymentCount">
                      <h1>
                        {paymentCount}
                        <sub className="counter_subscript">+ invoices</sub>
                      </h1>
                    </div>
                  </Card.Body>
                  <Card.Footer className="report_card_footer_3"></Card.Footer>
                </Card>
              </Col>
              <Col>
                <Card className="card_4">
                  <Card.Body>
                  <div className="card_body_3">
                    <Card.Title>VIDEO TRANSCRIPT</Card.Title>
                    <ArrowCircleRightTwoToneIcon
                        onClick={() => navigateToTranscriptReport()}
                        className="report_arrow_icon"
                        sx={{
                          transform: "scale(1.8)",
                        }}
                      />
                   
                    </div>
                    <Card.Text>
                      View detailed report of all the calls and transcript.
                    </Card.Text>
                  </Card.Body>
                 
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div></div>
    </Box>
  );
};

export default Reports;
