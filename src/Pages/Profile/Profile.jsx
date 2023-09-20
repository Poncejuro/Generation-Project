import Row from "react-bootstrap/Row";
// import Card from "react-bootstrap/Card";

// import Stack from "react-bootstrap/Stack";
import React, { useState } from "react";
import { NavBar } from "../Navbar";
//from MUI React

import initialData from "../../utils/feedPosts.json";
import "./Profile.css";
//nuevos
import ProfileDescription from "./ProfileDescription";
import ProfilePosts from "./ProfilePosts";

export const Profile = () => {
  const firstData = initialData;

  //setup de los errores
  const [titleError, setTitleError] = useState("");
  const [imgFooterError, setImgFooterError] = useState("");
  const [textError, setTextError] = useState("");

  const [form, setForm] = useState({});
  const setField = (field) => {
    setForm({
      ...form,
      [field.target.name]: field.target.value,
    });

    //crea las banderas de que estan vacios y los mensajes que aparecen en el dom

    if (field.target.name === "Title" && !field.target.value.trim()) {
      setTitleError("Agregue texto antes de publicar");
    } else {
      setTitleError("");
    }

    if (field.target.name === "imgFooter" && !field.target.value.trim()) {
      setImgFooterError("Agregue texto antes de publicar");
    } else {
      setImgFooterError("");
    }

    if (field.target.name === "text" && !field.target.value.trim()) {
      setTextError("Agregue texto antes de publicar");
    } else {
      setTextError("");
    }
  };

  const [posts, setPosts] = useState([]);
  const saveFeed = () => {
    //if que valida que no haya errores o vacios
    if (form.Title &&
      form.imgFooter &&
      form.text &&
      !titleError &&
      !imgFooterError &&
      !textError) {
      const updatedPosts = [...posts, form, ...firstData];
      setPosts(updatedPosts);
      localStorage.setItem("feedData", JSON.stringify(updatedPosts));
      updateData();
    }

  };

  const [feddData, setObjectData] = useState([]);
  const updateData = () => {
    const jsonData = localStorage.getItem("feedData");
    const objectData = JSON.parse(jsonData);
    console.log(objectData);
    setObjectData(objectData);
  };

  /*const deleteAllPosts = () => {
    localStorage.removeItem("feedData");
    localStorage.setItem("feedData", JSON.stringify([]));
    updateData();
  };
  */

  const deletePost = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
    localStorage.setItem("feedData", JSON.stringify(updatedPosts));
    updateData();
  };

  const [profileButton, setProfileButton] = useState(false);

  const handleProfileButton = (event) => {
    setProfileButton(!profileButton);
  };

  return (
    <>
      <NavBar />
      <div className="body-Profile">
        <Row style={{width: "100%"}}>
          {/*======================================== Start left Section ========================================*/}
          <ProfileDescription profileButton={profileButton} handleProfileButton={handleProfileButton} />
          {/*======================================== Start right Section ========================================*/}
          <ProfilePosts
            setField={setField}
            titleError={titleError}
            imgFooterError={imgFooterError}
            textError={textError}
            saveFeed={saveFeed}
            feddData={feddData}
            deletePost={deletePost}
          />
        </Row>
      </div>
    </>
  );
};
