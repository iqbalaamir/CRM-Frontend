import { React, useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "./Sidebar.css";
import logo from "../../../assets/chirp logo.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import FolderSpecialRoundedIcon from '@mui/icons-material/FolderSpecialRounded';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      {/* <Link to={"#"} /> */}
      <a href={to}></a>
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      className="sidebar_container"
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MoreVertIcon /> : undefined}
            style={{
              // margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {/* {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                // ml="15px"
              >
                <Typography variant="h4" color={colors.grey[100]}>
                  ADMIN DASHBOARD
                </Typography>

                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MoreVertIcon />
                </IconButton>
              </Box>
            )} */}
          </MenuItem>

          {!isCollapsed && (
            <Box
              mb="25px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {/* <Box display="flex" justifyContent="center" alignItems="center"> */}
              <img
                alt="profile-user"
                width="130px"
                height="100px"
                src={logo}
                // style={{ cursor: "pointer", borderRadius: "50%" }}
              />
              {/* </Box> */}

              {/* <IconButton
               onClick={() => setIsCollapsed(!isCollapsed)}
              style={{mt:"100px"}}
              > */}
              <div className="icon_theme">
                <BsThreeDotsVertical
                  className="icon"
                  onClick={() => setIsCollapsed(!isCollapsed)}
                />
              </div>
              {/* </IconButton> */}
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              User
            </Typography>
            <Item
              title="Manage Mentor"
              to="/mentor"
              icon={<Groups2RoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Manage Mentee"
              to="/mentee"
              icon={<Groups2RoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
              <Item
              title="Category"
              to="/category"
              icon={<CategoryRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
              <Item
              title="Specialist"
              to="/specialist"
              icon={<FolderSpecialRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Calender
            </Typography>
            <Item
              title="Calendar"
              to="/mentorAvailability"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* <Item
              title="Slots & Events"
              to="/fullcalendar"
              icon={<CalendarMonthTwoToneIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Payment
            </Typography>
            <Item
              title="Invoices"
              to="/paymentTable"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Report
            </Typography>
            <Item
              title="Reports"
              to="/reports"
              icon={<ImportContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Content
            </Typography>
            <Item
              title="About Us"
              to="/"
              icon={<InfoOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="T&C"
              to="/"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Privacy Policy"
              to="/"
              icon={<PrivacyTipOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contact Us"
              to="/"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
