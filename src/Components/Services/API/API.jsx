import axios from "axios";
import { BASE_URL } from "../host";
import FormData from "form-data";


//admin login
export const Signin = async (data) => {
  let config = {
    email: data.email,
    password: data.password,
  };
  return await axios.post(BASE_URL + "auth/signin", config);
};
// signup
export const SignUp = async (data) => {
  let config = {
    email: data.email,
    password: data.password,
    userType: data.userType
  };
  return await axios.post(BASE_URL + "auth/signup", config);
};

//Get User
export const GetUser = async (token) => {
  const res = await axios.get(`${BASE_URL}users`,{
  headers:{
    "x-access-token": token,
    "Content-Type": "multipart/form-data",
  }
  });
  
  console.log("res",res);
  return res;
};

//get user by Id
export const GetUserById = async (id) => {
  return await axios.get(BASE_URL + "users/" + id,
  {
    headers: {
      "x-access-token": `${localStorage.getItem("adminToken")}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

//edit user
export const EditUser = async (formData) => {
  return await axios.post(BASE_URL + "users", formData, {
    headers: {
      "x-access-token": `${localStorage.getItem("adminToken")}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

//create user
export const CreateUser = async (formData) => {
  try {
    const response = await axios.post(BASE_URL + "users/create", formData, {
      headers: {
        "x-access-token": `${localStorage.getItem("adminToken")}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating user: ", error);
    throw error;
  }
};


//delete mentor
export const DeleteUser = async (id) => {
  return await axios.post(BASE_URL + "user/delete" + id);
};


//Get leads
export const GetLeads = async () => {
  const res = await axios.get(BASE_URL + "leads");
  return res;
};

// Create Leads
export const CreateLeads = async ({name,email,phone,status}) => {
  try {
    const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("status", status);
    const response = await axios.post(BASE_URL + "leads/create", formData, {
      headers: {
        "x-access-token": `${localStorage.getItem("adminToken")}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating user: ", error);
    throw error;
  }
};

//get leads by Id
export const GetLeadsById = async (id) => {
  return await axios.get(BASE_URL + "lead/" + id);
};




//edit mentee
export const EditMentee = async (formData) => {
  return await axios.post(BASE_URL + "admin/editMentee", formData, {
    headers: {
      "x-access-token": `${localStorage.getItem("adminToken")}`,
      "Content-Type": "multipart/form-data",
    },
  });
};



//delete mentee
export const DeleteMentee = async (id) => {
  return await axios.post(BASE_URL + "admin/deleteMentee?id=" + id);
};

//change mentor password
export const ChangeMentorPassord = async (value1) => {
  const formData = new FormData();
  formData.append("email_id", value1);
  return axios.post(BASE_URL + "admin/changeMentorPassword", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      "x-access-token": localStorage.getItem("adminToken"),
    },
  });
};

//change mentee password
export const ChangeMenteePassord = async (value1) => {
  const formData = new FormData();
  formData.append("email_id", value1);
  return axios.post(BASE_URL + "admin/changeMenteePassword", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      "x-access-token": localStorage.getItem("adminToken"),
    },
  });
};

//add mentor/mentee
export const AddUser = async ({ user_type, email_id, name }) => {
  const formData = new FormData();
  formData.append("user_type", user_type);
  formData.append("email_id", email_id);
  formData.append("name", name);

  return await axios.post(BASE_URL + "admin/createUser", formData, {
    headers: {
      "x-access-token": `${localStorage.getItem("adminToken")}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

//Chnage mentor/mentee status
export const ChangeUserStatus = async ({
  user_type,
  email_id,
  message,
  status,
}) => {
  const formData = new FormData();
  formData.append("user_type", user_type);
  formData.append("email_id", email_id);
  formData.append("status", status);
  formData.append("message", message);

  return await axios.post(BASE_URL + "admin/changeUserStatus", formData, {
    headers: {
      "x-access-token": `${localStorage.getItem("adminToken")}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

//Get Admin user
export const GetAdminUser = async () => {
  const res = await axios.get(BASE_URL + "admin/getAllAdminUser");
  return res;
};

//add admin users
export const AddAdminUsers = async ({ admin_type, email, name }) => {
  const formData = new FormData();
  formData.append("admin_type", admin_type);
  formData.append("email", email);
  formData.append("name", name);

  return await axios.post(BASE_URL + "admin/createAdmin", formData, {
    headers: {
      "x-access-token": `${localStorage.getItem("adminToken")}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

//Get category
export const GetAllCategory = async () => {
  const res = await axios.get(BASE_URL + "admin/getallcategory");
  return res;
};

//get category by ID
export const GetCategoryById = async (id) => {
  return await axios.get(BASE_URL + "admin/getCategoryById?id=" + id);
};

//create category
export const CreateCategory = async (formData) => {
  return await axios.post(BASE_URL + "admin/createCategory", formData, {
    headers: {
      "x-access-token": `${localStorage.getItem("adminToken")}`,
      "Content-Type": "multipart/form-data",
    },
  });
};


//update category
export const UpdateCategory = async (formData) => {
  return await axios.post(BASE_URL + "admin/editCategory", formData, {
    headers: {
      "x-access-token": `${localStorage.getItem("adminToken")}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

export const DeleteCategory = async (id) => {
  return await axios.post(BASE_URL + "admin/deleteMentor" + id);
};

//Get Mentor
export const GetAllSpecialist = async () => {
  const res = await axios.get(BASE_URL + "admin/getAllSpecialist");
  return res;
};
