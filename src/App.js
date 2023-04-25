import "./App.css";
import { React, useState } from "react";
import { Routes, Route, useLocation, useParams } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Login from "./Components/Pages/Login/Login";
import Sidebar from "./Components/Constants/Sidebar/Sidebar";
import Navbar from "./Components/Constants/Navbar/Navbar";
import ProtectedRoutes from "./Components/Protected/ProtectedRoutes";
import ChangePassword from "./Components/Pages/Admin Management/Change Password/changePassword";
import AdminProfile from "./Components/Pages/Admin Management/Admins Profile/AdminProfile";
import AdminUser from "./Components/Pages/Admin Management/Admin Add User/AdminUser";
import EditAdminProfile from "./Components/Pages/Admin Management/Admins Profile/EditAdminProfile";
import EditAdminUser from "./Components/Pages/Admin Management/Admin Add User/EditAdminUser";
import CreateAdminUser from "./Components/Pages/Admin Management/Admin Add User/CreateAdminUser";
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
import Contact from "./Components/Pages/Contact/Contact";
import Service from "./Components/Pages/ServiceRequest/Service";
import AddService from "./Components/Pages/ServiceRequest/AddService/AddService";
import EditService from "./Components/Pages/ServiceRequest/EditService/EditService";
import AddContact from "./Components/Pages/Contact/AddContact/AddContact";
import EditContact from "./Components/Pages/Contact/EditContact/EditContact"

function App() {
  let { userId } = useParams();
  const allPaths = [
    "/",
    "/login",
    "/dashboard",
    "/navbar",
    "/users",
    "/EditUsers",
    "/addUser",
    "/lead",
    "/EditLead",
    "/AddLead",
    "/service",
    "/EditService",
    "/AddService",
    "/contact",
    "/AddContact",
    "/EditContact"
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
                path="/service"
                element={
                  <ProtectedRoutes Component={Service}>
                    <Service />
                  </ProtectedRoutes>
                }
              />

              <Route
                exact
                path="/AddService"
                element={
                  <ProtectedRoutes Component={AddService}>
                    <AddService />
                  </ProtectedRoutes>
                }
              />
              <Route
                exact
                path="/EditService/:id"
                element={
                  <ProtectedRoutes Component={EditService}>
                    <EditService />
                  </ProtectedRoutes>
                }
              />
              <Route
                exact
                path="/contact"
                element={
                  <ProtectedRoutes Component={Contact}>
                    <Contact />
                  </ProtectedRoutes>
                }
              />

              <Route
                exact
                path="/AddContact"
                element={
                  <ProtectedRoutes Component={AddContact}>
                    <AddContact />
                  </ProtectedRoutes>
                }
              />

              <Route
                exact
                path="/EditContact"
                element={
                  <ProtectedRoutes Component={EditContact}>
                    <EditContact />
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
