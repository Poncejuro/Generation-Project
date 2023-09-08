import { Link, useNavigate  } from 'react-router-dom';
import "./login.css";
import { useState } from 'react';

export const Login = () => {

    const [datos, setDatos] = useState({
        password:'',
        correo:'',
    })

    const navigate = useNavigate()

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange = (event) => {
      setPasswordInput(event.target.value);
    };

    const sendData = (event) =>{
        event.preventDefault();
        if ( passwordInput === localStorage ) { 
        navigate('/Events',{
            replace: 'true',
            state:{
                logged: true,
            }
        }) 
      }
    }


  return (
    <>
      
      <div className="principal-losgin">
        <div className="custom-form-container">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <form   className="form-contact" onSubmit={sendData}>
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
                      name="user_tel"
                      required
                      onChange={handlePasswordChange}
                    />
                  </div>
                  
                  <Link to="Register" className="link-box"> ¿Todavía no tienes cuenta? </Link>
                  <button id="btn" type="submit" className="btn btn-primary" >
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