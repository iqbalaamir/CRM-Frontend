import { Box } from "@mui/material";
import React, { useLayoutEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Header from "../../../Header";
import { useParams, useNavigate } from "react-router-dom";
import "./Category.css";
import { GetCategoryById, UpdateCategory } from "../../../Services/API/API";
import { BASE_URL_IMAGE } from "../../../Services/host";

const EditCategory = () => {
  const { id } = useParams();
  const [idData, setIdData] = React.useState({});
  const [checkImage, setCheckImage] = React.useState(null);
  const [image, setImage] = useState({ preview: "", raw: "" });

  //get category By ID

  useLayoutEffect(() => {
    GetCategoryById(id)
      .then((res) => {
        setIdData(res.data.data);
        setCheckImage(res.data.data.image);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, [id]);

  //update category api implementation
  console.log("image", checkImage);
  console.log("aaaaaaabcdd", idData);
  const onChange = (e) => {
    setIdData({ ...idData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
    setIdData({ ...idData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("category_id", id);
    formData.append(
      "category_name",
      idData?.category_name ? idData?.category_name : ""
    );
    if (idData.image) {
      formData.append("image", idData.image);
    }

    // formData.append("image", idData?.image ? idData?.image : "");
    console.log("11111111111111111111", formData);
    UpdateCategory(formData)
      .then((res) => {
        console.log(res.data, "res");
      })
      .catch((err) => {});
  };

  const navigate = useNavigate();
  const navigateToCategory = () => {
    navigate("/category");
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="USER MANAGEMENT" subtitle="Edit Category" />
      </Box>
      <div className="form">
        <Form method="post">
          <Form.Group className="mb-3">
            <Form.Label>Category Name</Form.Label>
            <Form.Control
              type="text"
              defaultValue={idData?.category_name}
              name="category_name"
              onChange={(e) => onChange(e)}
              placeholder="Enter name"
              className="category_form_control"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Icon</Form.Label>
            <Form.Control
              type="file"
              name="image"
              onChange={(e) => handleImageChange(e)}
              className="category_form_control"
            />
            {image.preview === "" ? (
              <img
                src={`${BASE_URL_IMAGE}${idData?.image}`}
                alt="Category Icon"
                className="category-icon-preview "
              />
            ) : (
              <img
                src={image.preview}
                alt="Preview"
                className="category-icon-preview  "
              />
            )}
          </Form.Group>
        </Form>
        <div className="button">
          <Button
            className="speciality_edit_button"
            variant="primary"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>

          <Button
            className="speciality_edit_button"
            variant="dark"
            onClick={() => {
              navigateToCategory();
            }}
          >
            Go Back
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default EditCategory;
