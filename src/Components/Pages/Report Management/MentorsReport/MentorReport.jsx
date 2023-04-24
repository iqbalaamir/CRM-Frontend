import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Badge from 'react-bootstrap/Badge';
import SortIcon from "@material-ui/icons/ArrowDownward";
// import {AvatarMale} from '../../../../assets/AvatarMale.jpg'
import { Line, Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Title,
    Tooltip,
    LineElement,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler,
} from "chart.js";
import "./MentorReport.css";
import Header from "../../../Header";
import { Card, Col, Row } from "react-bootstrap";
import { Box } from "@mui/material";
import Dropdown from "react-bootstrap/Dropdown";

ChartJS.register(
    Title,
    Tooltip,
    LineElement,
    Legend,
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler
);

const MentorReport = () => {
    const [count, setCount] = useState(0);
    const [meetingCount, setMeetingCount] = useState(0);
    const [menteeCount, setMenteeCount] = useState(0);

    function clickHandler() {
        console.log("hit")
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (count < 3250) {
                setCount(count + 10);
            } else {
                clearInterval(intervalId);
            }
        }, 10);
        return () => clearInterval(intervalId);
    }, [count]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (meetingCount < 2250) {
                setMeetingCount(meetingCount + 10);
            } else {
                clearInterval(intervalId);
            }
        }, 10);
        return () => clearInterval(intervalId);
    }, [meetingCount]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (menteeCount < 1150) {
                setMenteeCount(menteeCount + 10);
            } else {
                clearInterval(intervalId);
            }
        }, 10);
        return () => clearInterval(intervalId);
    }, [menteeCount]);

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
    // const [doughnutData, setDoughnutData] = useState({
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
    // })
    const columns = [
        {
            id: 1,
            name: "Mentors",
            selector: (row) => row.name,
            sortable: true,
            reorder: true,
            width: 100,
            cell: (row) =>
                <>
                <div className="mentors" >
                    <img src={require('../../../../assets/AvatarMale.jpg')} alt="" />
                    <p>Anshita</p>
                </div>
                </>
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
            name: "No. Of Meetings",
            selector: (row) => row.meetings,
            sortable: true,
            // right: true,
            reorder: true,
            width: 150,
        },
        {
            id: 4,
            name: "Status",
            selector: (row) => row.status,
            sortable: true,
            reorder: true,
            width: 100,
            cell: (row) =>
                <>
                    <Badge pill bg="success" onClick={clickHandler} id={row.ID}>
                        ONLINE
                    </Badge>
                    <Badge pill bg="warning" onClick={clickHandler} id={row.ID} text="dark">
                        OFFLINE
                    </Badge>
                </>
        },
        {
            id: 5,
            name: "Amount",
            selector: (row) => row.amount,
            sortable: true,
            // right: true,
            reorder: true,
            width: 100,
        },
        {
            id: 6,
            name: "Action",
            selector: (row) => row.action,
            sortable: true,
            // right: true,
            reorder: true,
            width: 100,
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
            action: "View Certificates"
        },
        {
            id: 2,
            name: "Anshita",
            date: "30 august",
            meetings: "192",
            status: "",
            amount: "$85",
            action: "View Certificates"
        },
        {
            id: 3,
            name: "Anshita",
            date: "14 june",
            meetings: "192",
            status: "",
            amount: "$445",
            action: "View Certificates"
        },
        {
            id: 4,
            name: "Bhavya",
            date: "12 nov",
            meetings: "192",
            status: "",
            amount: "$56",
            action: "View Certificates"
        },
        {
            id: 5,
            name: "Aamir",
            date: "15 july",
            meetings: "192",
            status: "",
            amount: "$52",
            action: "View Certificates"
        },
        {
            id: 6,
            name: "Sparsh",
            date: "22 feb",
            meetings: "192",
            status: "",
            amount: "$852",
            action: "View Certificates"
        },


    ];

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="MENTORS REPORT" subtitle="View All Mentor's Reports!" />
                {/* <Box > */}
                <Dropdown>
                    <Dropdown.Toggle
                        variant="primary"
                        id="dropdown-basic"
                        style={{
                            margin: "4px",
                            padding: "10px 20px",
                            fontSize: "18px",
                            fontWeight: "bold",
                            backgroundColor: "var(--secondary)",
                            color: "var(--primary)",
                            border: "none"
                            // backgroundImage:"linear-gradient(to right, #2D3A96 ,#FED604)"
                        }}
                    >
                        Select Records
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Today</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Weekly Records</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Monthly Records</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Yearly Records</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Box>
            <div className="mentor_cards">
                <Row>
                    <Col>
                        <Card className="mentor_card_1">
                            <Card.Body className="card_body">
                                <div className="card_detils">
                                    <Card.Title>Available Mentors</Card.Title>
                                    <Card.Text>
                                        <h5
                                            style={{ "font-size": "33px", "margin-bottom": " 32px" }}
                                        >
                                            {count}
                                        </h5>

                                    </Card.Text>
                                </div>
                                <div className="bg_img">
                                    <img
                                        src="https://themewagon.github.io/purple-react/static/media/circle.953c9ca0.svg"
                                        alt=""
                                    />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mentor_card_2">
                            <Card.Body className="card_body">
                                <div className="card_detils">
                                    <Card.Title>Number Of Meetings</Card.Title>
                                    <Card.Text>
                                        <h5
                                            style={{
                                                "font-size": "33px",
                                                "margin-bottom": " 32px",
                                            }}
                                        >
                                            {meetingCount}
                                        </h5>
                                        <p>Decreased by 10%</p>
                                    </Card.Text>
                                </div>
                                <div className="bg_img">
                                    <img
                                        src="https://themewagon.github.io/purple-react/static/media/circle.953c9ca0.svg"
                                        alt=""
                                    />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mentor_card_3">
                            <Card.Body className="card_body">
                                <div className="card_detils">
                                    <Card.Title>Number Of Mentee's Attended</Card.Title>
                                    <Card.Text>
                                        <h5
                                            style={{ "font-size": "33px", "margin-bottom": " 32px" }}
                                        >
                                            {menteeCount}
                                        </h5>
                                        <p>Increased by 5%</p>
                                    </Card.Text>
                                </div>
                                <div className="bg_img">
                                    <img
                                        src="https://themewagon.github.io/purple-react/static/media/circle.953c9ca0.svg"
                                        alt=""
                                    />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className="main">
                <div className="chart">
                    <div className="chart1">
                        <Line data={data}></Line>
                    </div>
                </div>
                <div className="chart2">
                    <Doughnut data={doughnutData}></Doughnut>
                </div>
            </div>
            <Card className="mentor_table_card">
                <DataTable
                    striped
                    title="Mentors"
                    columns={columns}
                    data={records}
                    defaultSortFieldId={1}
                    sortIcon={<SortIcon />}
                    pagination
                    paginationComponentOptions={paginationComponentOptions}
                    selectableRows
                />
            </Card>
        </Box>
    );
};

export default MentorReport;
