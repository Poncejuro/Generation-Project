import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useState, useEffect } from "react";
import CryptoJS from "crypto-js";
import axios from "axios";

export const Login = () => {
  //API API API//

  const [loadingLogin, setLoadingLogin] = useState(true);

  const getLoginEmail = () => {
    const emailInputBox = datos.user_email;
    const emailModified = emailInputBox.replace(/@/g, "%40");

    return axios
      .get("http://localhost:5000/api/v1/users/" + emailModified)
      .then((response) => {
        return response.data;
        setLoadingLogin(false);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
        setLoadingLogin(false);
      });
  };
  //API API API//
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);

  const postProfileDataFunc = async () => {
    const loginBack = await getLoginEmail();
    console.log("Vientos");
    // console.log(loginBack.profile);
    // console.log(loginBack.profile.profileId);
    if (loginBack.profile === null) {
      const postProfileData = {
        role: "Edita tu rol",
        biography: "Cuentanos de ti.",
        photo: "TuGuapo.jpg",
        user: {
          // userId: 10
          userId: loginBack.userId,
        },
      };
      axios
        .post("http://localhost:5000/api/v1/profiles", postProfileData) //form
        .then((response) => {
          setProfileData(response.data);
          setError(null);
        })
        .catch((error) => {
          setProfileData(null);
          setError(error.message);
        });
    }
  };

  //API API API//

  const descifrar = (texto) => {
    var bytes = CryptoJS.AES.decrypt(texto, "@borjascript");
    var textodesifrado = bytes.toString(CryptoJS.enc.Utf8);
    return textodesifrado;
  };

  const [datos, setDatos] = useState({});

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const [errorMessage, setErrorMessage] = useState(false);

  const sendData = async (event) => {
    event.preventDefault();

    const loginBack = await getLoginEmail();
    // const responseProf = await postProfileDataFunc();
    await postProfileDataFunc();
    // if (responseProf) {
      if (
        loginBack?.email === datos.user_email &&
        descifrar(loginBack?.password) === datos.user_password
      ) {
        localStorage.setItem(
          "userDataLogin",
          JSON.stringify([loginBack.userId, loginBack.fullName])
        );

        navigate("/Profile", {
          replace: "true",
          state: {
            logged: true,
          },
        });
      }
      if (
        loginBack?.email !== datos.user_email ||
        descifrar(loginBack?.password) !== datos.user_password
      )
       {
        setErrorMessage(true);
      }
    // }
  };

  return (
    <>
      <div className="principal-losgin">
        <div className="custom-form-container">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <form className="form-contact" onSubmit={sendData}>
                  <h2 className="title-box">Inicia sesión</h2>
                  <div className="mb-3">
                    <label className="form-label">Correo electrónico</label>
                    <input
                      type="email"
                      className="form-control control-aux"
                      name="user_email"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input
                      type="password"
                      className="form-control control-aux"
                      name="user_password"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  {errorMessage ? (
                    <div
                      className="alert alert-danger text-center"
                      role="alert"
                    >
                      Correo o contraseña no validos
                    </div>
                  ) : (
                    <div></div>
                  )}
                  <Link to="Register" className="link-box">
                    {" "}
                    ¿Todavía no tienes cuenta?{" "}
                  </Link>
                  <button id="btn" type="submit" className="btn btn-primary">
                    Inicia sesión
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
