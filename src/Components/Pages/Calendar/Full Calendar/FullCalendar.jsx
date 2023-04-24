import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import DatePicker from "react-horizontal-datepicker";
import Header from "../../../Header";
import "./FullCalendar.css";
import Table from "react-bootstrap/Table";
import { Badge, Button, Modal } from "react-bootstrap";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EventAvailableTwoToneIcon from "@mui/icons-material/EventAvailableTwoTone";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

// import { NavLink } from "react-router-dom";

const list = [
  {
    date: "2023-2-23",
    name: "Anshita",
  },
];

const FullCalendar = () => {
  const [show, setShow] = useState(false);
  const [showModal, setModalShow] = useState(false);
  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedDate, setSelectedDate] = useState();
  const [listData, setListData] = useState([]);
  const selectedDay = (val) => {
    var date = new Date(val);
    var year_value = date.getFullYear();
    var month_value = date.getMonth();
    var date_value = date.getDate();
    setSelectedDate(year_value + "-" + (month_value + 1) + "-" + date_value);
  };

  useEffect(() => {
    setListData(list);
  }, [list]);

  console.log(show, "show");

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Slots & Events"
          subtitle=" View All Mentor's Slots  & Event list"
        />
      </Box>
      {/*  react horizontal datepicker */}
      <div className="date_picker ">
        <DatePicker
          getSelectedDay={selectedDay}
          shouldScroll={true}
          endDate={366}
          // selectDate={Date.now()}
        />
      </div>
      {/* <div className="details">
        {listData.map((item, index) => {
          return (
            <div key={index}>
              {selectedDate === item.date ? item.name : "no data"} */}

      <div>
        <Modal show={showModal} onHide={handleModalClose} centered>
          <Modal.Header closeButton className="modal_header">
            {/* <Modal.Title>Event Details</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>
            <div className="modal-body pt-0 pb-20 px-lg-17">
              <div className="d-flex">
                <span className="svg-icon svg-icon-1 svg-icon-muted me-3 ">
                  <EventAvailableTwoToneIcon
                    sx={{
                      height: "100px",
                    }}
                  />
                </span>
                <div className="mb-9">
                  <div className="d-flex align-items-center mb-2">
                    <span className="fs-3 fw-bold me-3">EVENT NAME</span>
                  </div>
                  <div className="fs-6 mb-4">Event description</div>
                </div>
              </div>
              <div className="d-flex align-items-center mb-2">
                <span className="svg-icon svg-icon-1 svg-icon-success me-4">
                  <AccessTimeOutlinedIcon />
                </span>
                <div className="fs-6">
                  <span className="fw-bold">Starts:</span>
                  <span className="event_start_date"> 24th Jan 10:00 AM</span>
                </div>
              </div>
              <div className="d-flex align-items-center mb-2">
                <span className="svg-icon svg-icon-1 svg-icon-success me-4">
                  <AccessTimeOutlinedIcon />
                </span>
                <div className="fs-6">
                  <span className="fw-bold">Ends:</span>
                  <span className="event_start_date"> 24th Jan 10:20 AM</span>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      <div className="mentor_event_table">
        <Table bordered hover className="table_mentor">
          <thead className="table_header">
            <tr>
              <th>S.No.</th>
              <th>Profile</th>
              <th>Name</th>
              <th>Email Address</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <img
                  src="https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993__340.png"
                  width="30px"
                ></img>
              </td>
              <td>Anshita</td>
              <td>anshitavaryani@gmail.com</td>
              <td>
                <Badge pill bg="success">
                  Booked
                </Badge>
              </td>
              <td>
                {show === true ? (
                  <button show={show} onClick={handleClose} className="button">
                    Hide Details
                    <ArrowDropUpIcon />
                  </button>
                ) : (
                  <button onClick={handleShow} className="show_details_button">
                    Show Details
                    <ArrowDropDownIcon />
                  </button>
                )}
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlS2lknbANhKNPZMFUnnLlaNTdvyUSmTNyaIcR6wLx899rtpr_o710AX_q5ij9PilWhwg&usqp=CAU"
                  width="30px"
                ></img>
              </td>
              <td>Bhavya</td>
              <td>bahvya@gmail.com</td>
              <td>
                <Badge pill bg="warning" text="dark">
                  Available
                </Badge>
              </td>
              <td>
                {show === true ? (
                  <button show={show} onClick={handleClose} className="button">
                    Hide Details
                    <ArrowDropUpIcon />
                  </button>
                ) : (
                  <button onClick={handleShow} className="show_details_button">
                    Show Details
                    <ArrowDropDownIcon />
                  </button>
                )}
              </td>
            </tr>
            {show === true ? (
              <>
                <td colSpan="6">
                  {/* <div class="col-md-6 mb-2 stretch-card transparent"> */}
                  <div className="row mb-3 mt-3">
                    <div className="col-md-3">
                      <div
                        className="card card-tale"
                        style={{
                          backgroundColor: "#2196F3",
                        }}
                      >
                        <div className="card-body">
                          <div class="widget-49">
                            <div class="widget-49-title-wrapper">
                              <div class="widget-49-date-primary">
                                <span class="widget-49-date-day">26</span>
                                <span class="widget-49-date-month">JAN</span>
                              </div>
                              <div class="widget-49-meeting-info">
                                <span class="widget-49-pro-title">
                                  ANUSHKA(Mentee's Name)
                                </span>
                                <span class="widget-49-meeting-time">
                                  11:00 to 12.30 Hrs
                                </span>
                              </div>
                            </div>
                            <ul class="widget-49-meeting-points">
                              <li class="widget-49-meeting-item">
                                <span>Event Name</span>
                              </li>
                              <li class="widget-49-meeting-item">
                                <span>Description of meeting</span>
                              </li>
                            </ul>
                            <div class="widget-49-meeting-action">
                              {/* <NavLink
                                className="navbar-item card_view_details"
                                activeClassName="is-active"
                                onClick={handleModalShow}
                                exact
                              >
                                View Details
                              </NavLink> */}
                              <Button onClick={handleModalShow} sx={{}}>
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div
                        className="card card-tale"
                        style={{
                          backgroundColor: "#009688",
                        }}
                      >
                        <div className="card-body">
                          <div class="widget-49">
                            <div class="widget-49-title-wrapper">
                              <div class="widget-49-date-primary">
                                <span class="widget-49-date-day">26</span>
                                <span class="widget-49-date-month">JAN</span>
                              </div>
                              <div class="widget-49-meeting-info">
                                <span class="widget-49-pro-title">
                                  RAHUL(mentee's name)
                                </span>
                                <span class="widget-49-meeting-time">
                                  12:00 to 13.30 Hrs
                                </span>
                              </div>
                            </div>
                            <ul class="widget-49-meeting-points">
                              <li class="widget-49-meeting-item">
                                <span>Event Name</span>
                              </li>
                              <li class="widget-49-meeting-item">
                                <span>Description of meeting</span>
                              </li>
                            </ul>
                            <div class="widget-49-meeting-action">
                              <Button onClick={handleModalShow} sx={{}}>
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div
                        className="card card-tale"
                        style={{
                          backgroundColor: "#E91E63",
                        }}
                      >
                        <div className="card-body">
                          <div class="widget-49">
                            <div class="widget-49-title-wrapper">
                              <div class="widget-49-date-primary">
                                <span class="widget-49-date-day">26</span>
                                <span class="widget-49-date-month">JAN</span>
                              </div>
                              <div class="widget-49-meeting-info">
                                <span class="widget-49-pro-title">
                                  RAHUL(mentee's name)
                                </span>
                                <span class="widget-49-meeting-time">
                                  12:00 to 13.30 Hrs
                                </span>
                              </div>
                            </div>
                            <ul class="widget-49-meeting-points">
                              <li class="widget-49-meeting-item">
                                <span>Event Name</span>
                              </li>
                              <li class="widget-49-meeting-item">
                                <span>Description of meeting</span>
                              </li>
                            </ul>
                            <div class="widget-49-meeting-action">
                              <Button onClick={handleModalShow} sx={{}}>
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3 mt-3">
                      <div className="col-md-3">
                        <div
                          className="card card-tale"
                          style={{
                            backgroundColor: "#FF9800",
                          }}
                        >
                          <div className="card-body">
                            <div class="widget-49">
                              <div class="widget-49-title-wrapper">
                                <div class="widget-49-date-primary">
                                  <span class="widget-49-date-day">26</span>
                                  <span class="widget-49-date-month">JAN</span>
                                </div>
                                <div class="widget-49-meeting-info">
                                  <span class="widget-49-pro-title">
                                    RAHUL(mentee's name)
                                  </span>
                                  <span class="widget-49-meeting-time">
                                    12:00 to 13.30 Hrs
                                  </span>
                                </div>
                              </div>
                              <ul class="widget-49-meeting-points">
                                <li class="widget-49-meeting-item">
                                  <span>Event Name</span>
                                </li>
                                <li class="widget-49-meeting-item">
                                  <span>Description of meeting</span>
                                </li>
                              </ul>
                              <div class="widget-49-meeting-action">
                                {/* <NavLink
                                  className="navbar-item card_view_details"
                                  activeClassName="is-active"
                                  onClick={handleModalShow}
                                  exact
                                >
                                  View Details
                                </NavLink> */}
                                 <Button onClick={handleModalShow} sx={{}}>
                                View Details
                              </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </>
            ) : null}
            <tr>
              <td>3</td>
              <td>
                <img
                  src="data:image/jpeg;base64,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"
                  width="30px"
                ></img>
              </td>
              <td>Sparsh</td>
              <td>sparsh@gmail.com</td>
              <td>
                <Badge pill bg="warning" text="dark">
                  Available
                </Badge>
              </td>
              <td>
                {show === true ? (
                  <button show={show} onClick={handleClose} className="button">
                    Hide Details
                    <ArrowDropDownIcon />
                  </button>
                ) : (
                  <button onClick={handleShow} className="show_details_button">
                    Show Details
                    <ArrowDropDownIcon />
                  </button>
                )}
              </td>
            </tr>
            {show === true ? <tr></tr> : null}
          </tbody>
        </Table>
      </div>

      {/* </div>
          );
        })}
      </div> */}
    </Box>
  );
};

export default FullCalendar;
