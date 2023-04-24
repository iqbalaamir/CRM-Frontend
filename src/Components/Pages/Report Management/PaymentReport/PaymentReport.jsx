import { Box,Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Header from "../../../Header";
import "./PaymentReport.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import PaymentIcon from "@mui/icons-material/Payment";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { Bubble, Doughnut } from "react-chartjs-2";
import DataTable from "react-data-table-component";
import SortIcon from "@material-ui/icons/ArrowDownward";
import { useNavigate } from "react-router-dom";

const PaymentReport = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < 1500) {
        setCount(count + 100);
      } else {
        clearInterval(intervalId);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, [count]);

  const [data, setData] = useState({
    labels: [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Mentor details",
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
        data: [65, 59, 80, 81, 56, 55, 40, 90, 50, 87, 63, 99],
      },
    ],
  });

  const BubbleChartData = {
    datasets: [
      {
        label: "First Dataset",
        data: [
          {
            x: 200,
            y: 400,
            r: 50,
          },
          {
            x: 110,
            y: 250,
            r: 50,
          },
        ],
        backgroundColor: "#F1416C",
      },
      {
        label: "Green Dataset",
        data: [
          {
            x: 40,
            y: 200,
            r: 50,
          },
          {
            x: 140,
            y: 200,
            r: 50,
          },
        ],
        backgroundColor: "#50CD89",
      },
      {
        label: "Yellow Dataset",
        data: [
          {
            x: 60,
            y: 250,
            r: 50,
          },
        ],
        backgroundColor: "#FFC700",
      },
      {
        label: "Purple Dataset",
        data: [
          {
            x: 80,
            y: 300,
            r: 50,
          },
        ],
        backgroundColor: "#7239EA",
      },

      {
        label: "Blue dataset",
        data: Array.from({ length: 1 }, () => ({
          x: 10,
          y: 140,
          r: 45,
        })),
        backgroundColor: "#009EF7",
      },
    ],
  };

  const doughnutData = {
    labels: ["Approved", "Rejected", "Pending"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const columns = [
    {
      id: 1,
      name: "Mentor's Name",
      selector: (row) => row.name,
      sortable: true,
      reorder: true,
      width: 100,
      cell: (row) => (
        <>
          <div className="mentors">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUz5EWKDu-QHOR3ym0eWBSQenc69_kODInRA&usqp=CAU"
              alt=""
            />
            <p>Anshita</p>
          </div>
        </>
      ),
    },
    {
      id: 2,
      name: "Start Date",
      selector: (row) => row.date,
      sortable: true,
      reorder: true,
      width: 100,
    },
    {
      id: 3,
      name: "Total Meetings",
      selector: (row) => row.meetings,
      sortable: true,
      // right: true,
      reorder: true,
      width: 150,
    },

    {
      id: 4,
      name: "Total Payment Recieved",
      selector: (row) => row.amount,
      sortable: true,
      // right: true,
      reorder: true,
      width: 100,
    },
    {
      id: 5,
      name: "Action",
      selector: (row) => row.action,
      sortable: true,
      // right: true,
      reorder: true,
      width: 100,
      cell: (row) => (
        <>
          
          <Button
          className="payment_invoices_button"
           onClick={navigateToPaymentIvoices}
           sx={{
            fontSize: "12px",
            borderRadius: "4px",
            border: "1px solid",
            paddingLeft: "13px",
            paddingRight: "13px",
           
          }}
           >
            View Invoices
           </Button>
        </>
      ),
    },
  ];

  const paginationComponentOptions = {
    selectAllRowsItem: true,
    selectAllRowsItemText: "ALL",
  };
  const records = [
    {
      id: 1,
      name: "Anshita",
      date: "25 December",
      meetings: "192",
      status: "Online",
      amount: "$56",
      action: "View Invoices",
    },
    {
      id: 2,
      name: "Anshita",
      date: "30 august",
      meetings: "192",
      status: "",
      amount: "$85",
      action: "View Invoices",
    },
    {
      id: 3,
      name: "Anshita",
      date: "14 june",
      meetings: "192",
      status: "",
      amount: "$445",
      action: "View Invoices",
    },
    {
      id: 4,
      name: "Bhavya",
      date: "12 nov",
      meetings: "192",
      status: "",
      amount: "$56",
      action: "View Invoices",
    },
    {
      id: 5,
      name: "Aamir",
      date: "15 july",
      meetings: "192",
      status: "",
      amount: "$52",
      action: "View Invoices",
    },
    {
      id: 6,
      name: "Sparsh",
      date: "22 feb",
      meetings: "192",
      status: "",
      amount: "$852",
      action: "View Invoices",
    },
  ];
  const navigateToPaymentIvoices = () => {
    navigate("/paymentInvoices");
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="PAYMENT REPORT" subtitle="View Invoices" />
      </Box>
      <div className="payment-cards">
        <Row>
          <Col>
            <Card className="payment_card_1">
              <Card.Body>
                <Card.Title className="payment_card_title_1">
                  <PaymentIcon
                    sx={{ marginRight: "15px", transform: "scale(1.8)" }}
                  />
                  TOTAL INVOICES
                </Card.Title>
                <div className="count">
                  <h1>
                    {count}
                    <sub className="counter_subscript">+invoices</sub>
                  </h1>
                </div>

                <div className="progress-bar">
                  <ProgressBar
                    className="payment_progress_bar"
                    animated
                    now={45}
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="payment_card_2">
              <Card.Body>
                <Card.Title className="payment_card_title_2">
                  <ReceiptIcon
                    sx={{ marginRight: "15px", transform: "scale(1.8)" }}
                  />
                  PAID INVOICES
                </Card.Title>
                <div className="count">
                  <h1>
                    750
                    <sub className="counter_subscript">+ paid invoices</sub>
                  </h1>
                </div>

                <div className="progress-bar">
                  <ProgressBar
                    className="payment_progress_bar"
                    animated
                    now={65}
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="payment_card_3">
              <Card.Body>
                <Card.Title className="payment_card_title_3">
                  <ReceiptIcon
                    sx={{ marginRight: "15px", transform: "scale(1.8)" }}
                  />
                  UNPAID INVOICES
                </Card.Title>
                <div className="count">
                  <h1>
                    250
                    <sub className="counter_subscript">+ unpaid invoices</sub>
                  </h1>
                </div>

                <div className="progress-bar">
                  <ProgressBar
                    className="payment_progress_bar"
                    animated
                    now={35}
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="payment_card_4">
              <Card.Body>
                <Card.Title className="payment_card_title_4">
                  <ReceiptIcon
                    sx={{ marginRight: "15px", transform: "scale(1.8)" }}
                  />
                  PENDING INVOICES
                </Card.Title>
                <div className="count">
                  <h1>
                    150
                    <sub className="counter_subscript">+ pending invoices</sub>
                  </h1>
                </div>

                <div className="progress-bar">
                  <ProgressBar
                    className="payment_progress_bar"
                    animated
                    now={15}
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      {/* CHARTS */}
      <div className="charts">
        {/* BUBBLE CHART */}
        <div className="buuble_chart">
          <Bubble data={BubbleChartData} />
        </div>
        {/* DONUT CHART */}
        <div className="doughnut_chart">
          <Doughnut data={doughnutData}></Doughnut>
        </div>
      </div>
      {/* PAYMENT TABLE */}
      <Card className="payment_table_card">
      <DataTable
          title="PAYMENTS"
          columns={columns}
          data={records}
          pagination
          paginationComponentOptions={paginationComponentOptions}
          subHeader
          selectableRows
          persistTableHead
        />
      </Card>
    </Box>
  );
};

export default PaymentReport;
