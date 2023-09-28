import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useState } from "react";
import CryptoJS from "crypto-js"
import axios from "axios";

export const Login = () => {

  //API API API//

  // Realiza una solicitud GET a la API
  const [loginBack, setLoginBack] = useState([]);
  const [loadingLogin, setLoadingLogin] = useState(true);

  const getLoginEmail = () => {
    const emailInputBox = datos.user_email;
    const emailModified = emailInputBox.replace(/@/g,'%40');

    axios.get('http://localhost:5000/api/v1/users/'+emailModified)
      .then(response => {
        setLoginBack(response.data);
        setLoadingLogin(false);
        console.log(response.data);
        //setDataLoginBack(response);
        //console.log(response);
        //console.log('hook back');
        console.log(loginBack);
      })
      .catch(error => {
        console.error('Error al obtener datos:', error);
        setLoadingLogin(false);
      });

  }


  //API API API//



  const descifrar = (texto) => {
    var bytes = CryptoJS.AES.decrypt(texto, '@borjascript');
    var textodesifrado = bytes.toString(CryptoJS.enc.Utf8);
    return textodesifrado
  }

  const [datos, setDatos] = useState({});

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const [errorMessage, setErrorMessage] = useState(false);

  const sendData = (event) => {
    event.preventDefault();
    //const jsonData = localStorage.getItem("userData");
    //const data = JSON.parse(jsonData);
    getLoginEmail();
    //console.log(dataLoginBack);
    console.log(loginBack.email+" "+datos.user_email);
    console.log(loginBack.password+" "+datos.user_password);
 

    if (
      loginBack.email === datos.user_email &&
      loginBack.password === datos.user_password
      //descifrar(data.password) === datos.user_password
    ) {
      navigate("/Events", {
        replace: "true",
        state: {
          logged: true,
        },
      });
    }
    if (
      //descifrar(data.password) !== datos.user_password ||
      //data.user_email !== datos.user_email
      loginBack.email !== datos.user_email ||
      loginBack.password !== datos.user_password
    ) {
      setErrorMessage(true);
    }
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
