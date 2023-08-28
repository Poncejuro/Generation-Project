import "./login.css";
import { useNavigate  } from 'react-router-dom';
import { useState } from 'react';

export const Register = () => {
  const [datos, setDatos] = useState({
    password: "",
    correo: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = (event) => {
    event.preventDefault();
    navigate("/Homepage", {
      replace: "true",
      state: {
        logged: true,
      },
    });
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
                    <label className="form-label">Crea tu cuenta</label>
                    <input
                      type="password"
                      className="form-control control-aux"
                      name="user_tel"
                      required
                      onChange={handleInputChange}
                    />
                    <label className="form-label">Confirmar Contraseña</label>
                    <input
                      type="password"
                      className="form-control control-aux"
                      name="user_tel"
                      required
                      onChange={handleInputChange}
                    />
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