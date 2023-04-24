import React, { useState } from "react";
import {
  Box,
  List,
  Typography,
  ListItem,
  ListItemText,
  useTheme,
} from "@mui/material";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import Header from "../../../Header";
import EventIcon from "@mui/icons-material/Event";
import { Modal, Button, Form } from "react-bootstrap";
import "./Calendar.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { formatDate } from "@fullcalendar/core";
import { tokens } from "../../../../theme";
import Dropdown from "react-bootstrap/Dropdown";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [details, setDetails] = useState({
    name: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  const [show, setShow] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [currentEvents, setCurrentEvents] = useState([]);
  const { name, startDate, endDate, description } = details;
  const onHandleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
    console.log(details, "details");
  };

  const onSubmit = () => {
    setCurrentEvents(details);
    console.log(currentEvents, " currentEvents ");
  };

  const onHandleCut = () => {
    setHidden(false);
    setShow(false);
    setDetails("");
  };

  const handleDateClick = (selected) => {
    setShow(true);
    setDetails({
      ...details,
      startDate: selected?.startStr,
      endDate: selected?.startStr,
    });
    // setDetails({ ...details,  });
    const calendarApi = selected.view.calendar;
    const data = {
      id: `${currentEvents.name}-${selected?.startStr}`,
      name: details.name,
      start: selected.startStr,
      end: selected.endStr,
      allDay: selected.allDay,
    };
    console.log(details.name, "currentEvents.name");
    calendarApi.addEvent(data);
  };

  // console.log(currentEvents.EventImpl, "data")
  const handleEventClick = (selected) => {
    setHidden(true);
    // if (
    //   window.confirm(
    //     `Are you sure you want to delete the event ${selected.event.title}`
    //   )
    // ) {
    //   selected.event.remove();
    // }
  };

  const onHandleHidden = () => {
    setHidden(false);
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Calendar Management"
          subtitle="Mentor's Slots  & Event list"
        />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Dropdown>
            <Dropdown.Toggle
              variant="primary"
              id="dropdown-basic"
              style={{
                margin: "4px",
                padding: "10px 20px",
                fontSize: "18px",
                fontWeight: "bold",
                backgroundColor: "var(--primary)",
                color: "var(--secondary)",
                // backgroundImage:"linear-gradient(to right, #2D3A96 ,#FED604)"
              }}
            >
              Select Mentee
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Mentee 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Mentee 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Mentee 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button
            onClick={handleShow}
            variant="primary"
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              padding: "10px 20px",
              margin: "4px",
              backgroundColor: "var(--secondary)",
              color: "var(--primary)",
            }}
          >
            <EventIcon sx={{ mr: "10px" }} />
            Create New Event
          </Button>
        </Box>
      </Box>

      <Modal
        show={show}
        onHide={onHandleCut}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a New Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="title">Event Name</Form.Label>
              <Form.Control
                className="form_lable"
                type="text"
                name="name"
                value={name}
                required
                onChange={(e) => {
                  onHandleChange(e);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Event Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                name="description"
                value={description}
                onChange={(e) => {
                  onHandleChange(e);
                }}
              />
            </Form.Group>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Form.Group className="form_group mb-3">
                <Form.Label>Event Start Date</Form.Label>
                <Form.Control
                  type="date"
                  required
                  name="startDate"
                  value={startDate}
                  onChange={(e) => {
                    onHandleChange(e);
                  }}
                />
                {/* {Date} */}
              </Form.Group>
              <Form.Group className=" form_group mb-3 ">
                <Form.Label>Event Start Time</Form.Label>
                <Form.Control type="time" />
              </Form.Group>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Form.Group className=" form_group mb-3">
                <Form.Label>Event End Date</Form.Label>
                {/* type="date"
                required
                */}
                <Form.Control
                  type="date"
                  name="endtDate"
                  value={endDate}
                  onChange={(e) => {
                    onHandleChange(e);
                  }}
                />
              </Form.Group>
              <Form.Group className=" form_group mb-3">
                <Form.Label>Event End Time</Form.Label>
                <Form.Control type="time" format="24h" />
              </Form.Group>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            // onClick={{onSubmit()}{handleClose()}}
            onClick={() => {
              onSubmit();
              handleClose();
            }}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={hidden}
        onHide={onHandleCut}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <div className="top">
            <Modal.Title>Event details</Modal.Title>
            <div className="editModalIcons">
              <DeleteTwoToneIcon />
              <EditTwoToneIcon />
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className=" parent row ">
            <div className="contnt">
              <h5>Name</h5>
              <p>{details.name}</p>
            </div>
            <hr />
            <div className="contnt">
              <h5>Description</h5>
              <p>{details.description}</p>
            </div>
            <hr />
            <div className="contnt">
              <h5>Start date</h5>
              <p>{details.startDate}</p>
            </div>
            <hr />
            <div className="contnt">
              <h5>End date</h5>
              <p>{details.endDate}</p>
            </div>
            <hr />
          </div>
        </Modal.Body>
      </Modal>

      <Box display="flex" justifyContent="space-between">
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            <ListItem
              sx={{
                borderRadius: "2px",
                padding: "0%",
              }}
            >
              {!name ? null : (
                <ListItemText
                  sx={{
                    backgroundColor: colors.greenAccent[500],
                    borderRadius: "2px",
                    height: "100%",
                    padding: "10px 10px 10px 10px",
                  }}
                  primary={name}
                  secondary={
                    <Typography>
                      {formatDate(startDate, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              )}
            </ListItem>
            {/* <ListItem
              sx={{
                // backgroundColor: colors.greenAccent[500],
                margin: "10px 0",
                borderRadius: "2px",
              }}
            >
              <ListItemText
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px",
                 paddingLeft:""
                }}
                secondary={
                  <Typography>
                    {formatDate(currentEvents.start, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </Typography>
                }
              >
                <li>{name}</li>
                <li>{startDate}</li>
              </ListItemText>
            </ListItem> */}
          </List>
        </Box>
        {/* fullcalendar */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
