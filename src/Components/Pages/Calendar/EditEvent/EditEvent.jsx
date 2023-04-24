import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./EditEvent.css";
import { Box } from "@mui/material";
import Header from "../../../Header";

const EditEvent = () => {
    const [currentEvents, setCurrentEvents] = useState([]);
    const [details, setDetails] = useState({
        name: "",
        startDate: "",
        endDate: "",
        description: ""
    });
    const { name, startDate, endDate, description } = details;
    const onHandleChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
        console.log(details, "details")
    }
    const onSubmit = (e) => {
        e.prevent.default()
        setCurrentEvents(details)
        console.log(currentEvents, " currentEvents ");
      };
    console.log(details +"details")
    console.log(currentEvents +"currentEvents")
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="EDIT EVENT" />
            </Box>
            <Form className="form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={name}
                        required
                        onChange={(e) => {
                            onHandleChange(e)
                        }}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => {
                            onHandleChange(e)
                        }}
                    />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Start date</Form.Label>
                    <Form.Label>Event Start Date</Form.Label>
                    <Form.Control
                        type="date"
                        required
                        name="startDate"
                        value={startDate}
                        onChange={(e) => {
                            onHandleChange(e)
                        }}
                    />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>End date</Form.Label>
                    <Form.Control
                        type="date"
                        name="endtDate"
                        value={endDate}
                        onChange={(e) => {
                            onHandleChange(e)
                        }}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={(e)=>onSubmit(e)}>
                    Update details
                </Button>
            </Form>
        </Box>

    )
}

export default EditEvent