import Row from "react-bootstrap/Row";
// import Card from "react-bootstrap/Card";

// import Stack from "react-bootstrap/Stack";
import React, { useState,useEffect } from "react";
import { NavBar } from "../Navbar";
//from MUI React

// import initialData from "../../utils/feedPosts.json";
import "./Profile.css";
//nuevos
import ProfileDescription from "./ProfileDescription";
import ProfilePosts from "./ProfilePosts";

import axios from "axios";


export const Profile = () => {
  // const firstData = initialData;

  const [form, setForm] = useState({});

  const setField = (field) => {
    setForm({
      ...form,
      [field.target.name]: field.target.value,
    });

  };

  const [posts, setPosts] = useState([]);

  const saveFeed = () => {
    //if que valida que no haya errores o vacios
    if (
      form.Title &&
      form.imgFooter &&
      form.text 
    ) {
      // const updatedPosts = [...posts, form, ...firstData];
      const updatedPosts = [...posts, form];
      setPosts(updatedPosts);
      localStorage.setItem("feedData", JSON.stringify(updatedPosts));
      updateData();
    }
    postProfilePublication();
  };

  
  //API SECTION//////////////////////////////////////////////////
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);
  const userPublicationLocalStorage = JSON.parse(
    localStorage.getItem("userDataLogin")
  );
  const postProfilePublication = () => {
    const postData = {
      title: form.Title,
      footer: form.imgFooter,
      eventDetails: form.text,
      img: "concert.jpg",
      profile: {
        profileId: userPublicationLocalStorage[0]
      }
    };
  
    axios
      .post('http://localhost:5000/api/v1/publications', postData) //form
      .then((response) => {
        setResponseData(response.data);
        setError(null);
      })
      .catch((error) => {
        setResponseData(null);
        setError(error.message);
      });

  }

  //API SECTION//////////////////////////////////////////////////
  
  ///////////////////////////////API EXAMPLE//////////////////////
  

  const [myProfilesPublications, setMyProfilesPublications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Realiza una solicitud GET a la API
    axios.get('http://localhost:5000/api/v1/publications')
      .then(response => {
        setMyProfilesPublications(response.data);
        setLoading(false);
        //console.log('response data');
        console.log(response.data);
        //console.log('hook back');
        //console.log(dataBack);
      })
      .catch(error => {
        console.error('Error al obtener datos:', error);
        setLoading(false);
      });
  }, []);
  
  ///////////////////////////////////////////////////////////////




  const [feddData, setObjectData] = useState([]);
  const updateData = () => {
    // const jsonData = localStorage.getItem("feedData");
    // const objectData = JSON.parse(jsonData);
    //console.log(objectData);
    setObjectData(myProfilesPublications);
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
        <Row style={{ width: "100%" }}>
          {/*======================================== Start left Section ========================================*/}
          <ProfileDescription
            profileButton={profileButton}
            handleProfileButton={handleProfileButton}
          />
          {/*======================================== Start right Section ========================================*/}
          <ProfilePosts
            setField={setField}
            // titleError={titleError}
            // imgFooterError={imgFooterError}
            // textError={textError}

            saveFeed={saveFeed}
            feddData={feddData}
            deletePost={deletePost}
          />
        </Row>
      </div>
    </>
  );
};
