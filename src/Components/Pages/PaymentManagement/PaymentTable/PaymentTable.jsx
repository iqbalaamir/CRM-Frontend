import { Box, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Header from "../../../Header";
import DataTable from "react-data-table-component";
import "./PaymentTable.css";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useNavigate } from "react-router-dom";

const PaymentTable = () => {
  const navigate = useNavigate();
  const [balanceCount, setBalanceCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (balanceCount < 1500) {
        setBalanceCount(balanceCount + 100);
      } else {
        clearInterval(intervalId);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, [balanceCount]);

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
        <Header title="PAYMENT MANAGEMENT" subtitle="View Payement Details" />
      </Box>
      <Row className="row_1">
        <div className="col-md-5 grid-margin stretch-card">
          <Col>
            <Card className="payment_invoice_card_1">
              <Card.Body>
                <Card.Title className="balance_title">Main Balance </Card.Title>
                <div className="balance_count">
                  <AttachMoneyIcon />
                  <h1>
                    {balanceCount}
                    <sub className="counter_subscript">+invoices</sub>
                  </h1>
                </div>
                <div className="card_1_background_img">
                  <img
                    src="https://mophy.dexignzone.com/xhtml/images/dual-dot.png"
                    alt=""
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </div>
        <div className="col-md-7 grid-margin stretch-card">
          <Row className="row_2">
            <Col className="payment_cards_row_2">
              <Card className="payment_invoice_card_2">
                <Card.Body>
                  <Card.Title>Income </Card.Title>
                  <div className="balance_count">
                    <AttachMoneyIcon />
                    <h1>
                      {balanceCount}
                      <sub className="counter_subscript">+invoices</sub>
                    </h1>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="payment_invoice_card_3">
                <Card.Body>
                  <Card.Title>Outcome</Card.Title>
                  <div className="balance_count">
                    <AttachMoneyIcon />
                    <h1>
                      {balanceCount}
                      <sub className="counter_subscript">+invoices</sub>
                    </h1>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className="payment_invoice_card_4">
                <Card.Body>
                  <Card.Title>Weekly Wallet Usage</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Row>
      {/* data table */}
      <Card className="payment_invoice_table">
        <DataTable
          title="Contact List"
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

export default PaymentTable;
