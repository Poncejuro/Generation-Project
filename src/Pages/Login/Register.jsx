import "./login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Register = () => {
  const [datos, setDatos] = useState({});
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordConfirmInput, setPasswordConfirmInput] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value.trim(),
    });
  };

  const equal = passwordInput !== passwordConfirmInput;

  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
  };
  const handlePasswordConfirmChange = (event) => {
    setPasswordConfirmInput(event.target.value);
  };

  const sendData = (event) => {
    if (equal) {
      event.preventDefault();
      console.log("contraseñas diferentes");
    } else {
      event.preventDefault();
      navigate("/Events", {
        replace: "true",
        state: {
          logged: true,
        },
      });
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
                  <h2 className="title-box">Crea tu cuenta</h2>
                  <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                      type="text"
                      className="form-control control-aux"
                      name="user_name"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
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
                    <label className="form-label">Numero telefonico</label>
                    <input
                      type="tel"
                      className="form-control control-aux"
                      name="user_tel"
                      pattern="[0-9]{10}"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Ingresa una nueva contraseña
                    </label>
                    <input
                      type="password"
                      className="form-control control-aux"
                      name="user_password"
                      required
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Confirmar Contraseña</label>
                    <input
                      type="password"
                      className="form-control control-aux"
                      name="user_confirmPassword"
                      required
                      onChange={handlePasswordConfirmChange}
                    />
                    {equal ? (
                      <div
                        className="alert alert-danger text-center"
                        role="alert"
                      >
                        Contraseñas no coinciden
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>

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
