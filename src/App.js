import "./App.css";
import { React, useState } from "react";
import { Routes, Route, useLocation, useParams } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Login from "./Components/Pages/Login/Login";
import Sidebar from "./Components/Constants/Sidebar/Sidebar";
import Navbar from "./Components/Constants/Navbar/Navbar";
import Mentor from "./Components/Pages/UserManagemet/Mentor/Mentor";
import Mentee from "./Components/Pages/UserManagemet/Mentee/Mentee";
import ProtectedRoutes from "./Components/Protected/ProtectedRoutes";
import NewFormMentor from "./Components/Pages/UserManagemet/Mentor/Form/NewForm/NewFormMentor";
import EditFormMentor from "./Components/Pages/UserManagemet/Mentor/Form/EditForm/EditFormMentor";
import NewFormMentee from "./Components/Pages/UserManagemet/Mentee/Form/NewForm/NewFormMentee";
import EditFormMentee from "./Components/Pages/UserManagemet/Mentee/Form/EditForm/EditFormMentee";
import ViewMentor from "./Components/Pages/UserManagemet/Mentor/View/ViewMentor";
import ViewMentee from "./Components/Pages/UserManagemet/Mentee/View/ViewMentee";
import ChangePassword from "./Components/Pages/Admin Management/Change Password/changePassword";
import AdminProfile from "./Components/Pages/Admin Management/Admins Profile/AdminProfile";
import AdminUser from "./Components/Pages/Admin Management/Admin Add User/AdminUser";
import EditAdminProfile from "./Components/Pages/Admin Management/Admins Profile/EditAdminProfile";
import EditAdminUser from "./Components/Pages/Admin Management/Admin Add User/EditAdminUser";
import CreateAdminUser from "./Components/Pages/Admin Management/Admin Add User/CreateAdminUser";
import Category from "./Components/Pages/UserManagemet/Category/Category";
import Specialist from "./Components/Pages/UserManagemet/Specialist/Specialist";
import AddSpeciality from "./Components/Pages/UserManagemet/Specialist/AddSpeciality";
import EditSpeciality from "./Components/Pages/UserManagemet/Specialist/EditSpeciality";
import SendMail from "./Components/Pages/Admin Management/ForgetPassword/SendMail/SendMail";
import ForgetPassword from "./Components/Pages/Admin Management/ForgetPassword/ForgetPassword/ForgetPassword";
import AddCategory from "./Components/Pages/UserManagemet/Category/AddCategory";
import EditCategory from "./Components/Pages/UserManagemet/Category/EditCategory";
import AddPermissions from "./Components/Pages/Admin Management/Admin Add User/AddPermissions";
import User from "./Components/Pages/User/User";
import EditUser from "./Components/Pages/User/EditUser/EditUser";
import AddUser from "./Components/Pages/User/AddUser/AddUser";
import Lead from "./Components/Pages/Lead/Lead";
import EditLead from "./Components/Pages/Lead/EditLead/EditLead";
import AddLead from "./Components/Pages/Lead/AddLead/AddLead";

function App() {
  let { userId } = useParams();
  const allPaths = [
    "/",
    "/login",
    "/dashboard",
    "/navbar",
    "/mentorAvailability",
    "/fullcalendar",
    "/myprofile",
    "/changepassword",
    "/adminAddUser",
    "/reports",
    "/editAdminProfile",
    "/editAdminUser",
    "/createAdminUser",
    "/changeMentorPassword",
    "/changeMenteePassword",
    "/specialist",
    "/addSpeciality",
    "/category",
    "/editSpeciality",
    "/editCategory",
    "/addCategory",
    "/addPermissions",
    "/users",
    "/EditUsers",
    "/addUser",
    "/lead",
    "/EditLead",
    "/AddLead"
  ];
  const { pathname } = useLocation();
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {pathname === "/login" ? null : allPaths.includes(
              "/" + pathname.split("/")[1]
            ) === true ? (
            <Sidebar isSidebar={isSidebar} />
          ) : null}

          <main className="content">
            {pathname === "/login" ? null : allPaths.includes(
                "/" + pathname.split("/")[1]
              ) === true ? (
              <Navbar setIsSidebar={setIsSidebar} />
            ) : null}

            {/*  */}

            <Routes>
              <Route exact path="/login" element={<Login />} />
              <Route
                exact
                path="/forgetPassword"
                element={<ForgetPassword />}
              />
              <Route
                exact
                path="/navbar"
                element={
                  <ProtectedRoutes Component={Navbar}>
                    <Navbar />
                  </ProtectedRoutes>
                }
              />
              <Route
                exact
                path="/users"
                element={
                  <ProtectedRoutes Component={User}>
                    <User />
                  </ProtectedRoutes>
                }
              />
              <Route
                exact
                path="/EditUsers/:id"
                element={
                  <ProtectedRoutes Component={EditUser}>
                    <EditUser />
                  </ProtectedRoutes>
                }
              />
              <Route
                exact
                path="/addUser"
                element={
                  <ProtectedRoutes Component={AddUser}>
                    <AddUser />
                  </ProtectedRoutes>
                }
              />
              <Route
                exact
                path="/lead"
                element={
                  <ProtectedRoutes Component={Lead}>
                    <Lead />
                  </ProtectedRoutes>
                }
              />

              <Route
                exact
                path="/EditLead"
                element={
                  <ProtectedRoutes Component={EditLead}>
                    <EditLead />
                  </ProtectedRoutes>
                }
              />
                <Route
                exact
                path="/AddLead"
                element={
                  <ProtectedRoutes Component={AddLead}>
                    <AddLead />
                  </ProtectedRoutes>
                }
              />

              <Route
                exact
                path="/mentor"
                element={
                  <ProtectedRoutes Component={Mentor}>
                    <Mentor />
                  </ProtectedRoutes>
                }
              />
              <Route
                exact
                path="/mentee"
                element={
                  <ProtectedRoutes Component={Mentee}>
                    <Mentee />
                  </ProtectedRoutes>
                }
              />
              <Route
                exact
                path="/newformMentor"
                element={
                  <ProtectedRoutes Component={NewFormMentor}>
                    <NewFormMentor />
                  </ProtectedRoutes>
                }
              />
              <Route
                exact
                path="/editformMentor/:id"
                element={
                  <ProtectedRoutes Component={EditFormMentor}>
                    <EditFormMentor />
                  </ProtectedRoutes>
                }
              />
              <Route
                exact
                path="/viewMentor/:id"
                element={
                  <ProtectedRoutes Component={ViewMentor}>
                    <ViewMentor />
                  </ProtectedRoutes>
                }
              />

              <Route
                exact
                path="/newformMentee"
                element={
                  <ProtectedRoutes Component={NewFormMentee}>
                    <NewFormMentee />
                  </ProtectedRoutes>
                }
              />
              <Route
                exact
                path="/editformMentee/:id"
                element={
                  <ProtectedRoutes Component={EditFormMentee}>
                    <EditFormMentee />
                  </ProtectedRoutes>
                }
              />
              <Route
                exact
                path="/viewMentee/:id"
                element={
                  <ProtectedRoutes Component={ViewMentee}>
                    <ViewMentee />
                  </ProtectedRoutes>
                }
              />
              <Route
                exact
                path="/category"
                element={
                  <ProtectedRoutes Component={Category}>
                    <Category />
                  </ProtectedRoutes>
                }
              />
              <Route
                exact
                path="/addCategory"
                element={
                  <ProtectedRoutes Component={AddCategory}>
                    <AddCategory />
                  </ProtectedRoutes>
                }
              />
              <Route
                exact
                path="/editCategory/:id"
                element={
                  <ProtectedRoutes Component={EditCategory}>
                    <EditCategory />
                  </ProtectedRoutes>
                }
              />

              <Route
                exact
                path="/specialist"
                element={
                  <ProtectedRoutes Component={Specialist}>
                    <Specialist />
                  </ProtectedRoutes>
                }
              />
              <Route
                exact
                path="/addSpeciality"
                element={
                  <ProtectedRoutes Component={AddSpeciality}>
                    <AddSpeciality />
                  </ProtectedRoutes>
                }
              />
              <Route
                exact
                path="/editSpeciality"
                element={
                  <ProtectedRoutes Component={EditSpeciality}>
                    <EditSpeciality />
                  </ProtectedRoutes>
                }
              />

              <Route
                exact
                path="/myprofile"
                element={
                  <ProtectedRoutes Component={AdminProfile}>
                    <AdminProfile />
                  </ProtectedRoutes>
                }
              />
              <Route
                exact
                path="/editAdminProfile"
                element={
                  <ProtectedRoutes Component={EditAdminProfile}>
                    <EditAdminProfile />
                  </ProtectedRoutes>
                }
              />
              <Route
                exact
                path="/changepassword"
                element={
                  <ProtectedRoutes Component={ChangePassword}>
                    <ChangePassword />
                  </ProtectedRoutes>
                }
              />
              <Route
                exact
                path="/adminAddUser"
                element={
                  <ProtectedRoutes Component={AdminUser}>
                    <AdminUser />
                  </ProtectedRoutes>
                }
              />
              <Route
                exact
                path="/editAdminUser"
                element={
                  <ProtectedRoutes Component={EditAdminUser}>
                    <EditAdminUser />
                  </ProtectedRoutes>
                }
              />
              <Route
                exact
                path="/createAdminUser"
                element={
                  <ProtectedRoutes Component={CreateAdminUser}>
                    <CreateAdminUser />
                  </ProtectedRoutes>
                }
              />

              <Route
                exact
                path="/addPermissions"
                element={
                  <ProtectedRoutes Component={AddPermissions}>
                    <AddPermissions />
                  </ProtectedRoutes>
                }
              />

              <Route
                exact
                path="/ForgetPassword"
                element={
                  <ProtectedRoutes Component={ForgetPassword}>
                    <ForgetPassword />
                  </ProtectedRoutes>
                }
              />
              <Route
                exact
                path="/forgetPassword"
                element={
                  <ProtectedRoutes Component={ForgetPassword}>
                    <ForgetPassword />
                  </ProtectedRoutes>
                }
              />
              <Route
                exact
                path="/SendMail"
                element={
                  <ProtectedRoutes Component={SendMail}>
                    <SendMail />
                  </ProtectedRoutes>
                }
              />

              {/* <Route
                exact
                path="*"
                element={
                  <ProtectedRoutes Component={Temp}>
                    <Temp />
                  </ProtectedRoutes>
                }
              /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
