import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useState } from "react";

export const Login = () => {
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
    const jsonData = localStorage.getItem("userData");
    const data = JSON.parse(jsonData);
    if (
      data.user_email === datos.user_email &&
      data.password === datos.user_password
    ) {
      navigate("/Events", {
        replace: "true",
        state: {
          logged: true,
        },
      });
    }
    if (
      data.password !== datos.user_password ||
      data.user_email !== datos.user_email
    ) {
      setErrorMessage(true);
      console.log("Correo o contraseña no validos");
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
