import "./register.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CryptoJS from "crypto-js"
import axios from "axios";

export const Register = () => {
  const [datos, setDatos] = useState({});
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordConfirmInput, setPasswordConfirmInput] = useState("");
  const [telephoneInput, setTelephoneInput] = useState("");
  const [tooMuchNumbers, setTooMuchNumbers] = useState(false);
  const [userNameInput, setUsernameInput] = useState("");
  const [onlyAlphabetLetters, setOnlyAlphabetLetters] = useState(false);

  
  const cifrar = (texto) => {
    var textocifrado = CryptoJS.AES.encrypt(texto, '@borjascript').toString();
    return textocifrado
  }
  
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value.trim(),
      password: cifrar(passwordInput)
    });
  };

  const equal = passwordInput !== passwordConfirmInput;

  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
  };

  const handlePasswordConfirmChange = (event) => {
    setPasswordConfirmInput(event.target.value);
  };

  const handleTelephoneChange = (event) => {

    const inputValue = event.target.value;
    const hasNonNumericCharacters = /[^\d]/.test(inputValue);

    setTelephoneInput(inputValue);
    if (hasNonNumericCharacters || inputValue.length !== 10) {
      setTooMuchNumbers(true);
    } else {
      setTooMuchNumbers(false);
    }
    setTelephoneInput(event.target.value);
  };

  const handleInputUserName = (event) => {
    const inputValueUserName = event.target.value;

    setUsernameInput(inputValueUserName);

    // Verificar si inputValueUserName contiene solo letras del alfabeto
    const onlyAlphabetLettersRegex = /^[A-Za-z\s]+$/;
    const isOnlyAlphabetLetters = onlyAlphabetLettersRegex.test(inputValueUserName);

    setOnlyAlphabetLetters(!isOnlyAlphabetLetters);
  };

  const sendData = (event) => {
    if (equal || tooMuchNumbers || onlyAlphabetLetters) {
      event.preventDefault();
      console.log("contraseñas diferentes");
    } else {
      event.preventDefault();
      datos.password = cifrar(passwordInput);
      datos.user_tel = telephoneInput;
      datos.user_name = userNameInput;
      
      navigate("/", {
        replace: "true",
        state: {
          logged: true,
        },
      });
      postRegisterData();
    }

  };

  //API API API//
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  const postRegisterData = () => {

    const postData = {
      fullName: datos.user_name,
      email: datos.user_email,
      cellphone: datos.user_tel,
      password: datos.password,
      active: true,
      profile: null
    };

    axios
      .post('http://localhost:5000/api/v1/users', postData) //form
      .then((response) => {
        setResponseData(response.data);
        setError(null);
      })
      .catch((error) => {
        setResponseData(null);
        setError(error.message);
      });

  }



  //API API API//

  return (
    <>
      <div className="principal-losgin-register">
        <div className="custom-form-container">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <form className="form-contact-register" onSubmit={sendData}>
                  <h2 className="title-box-register">Crea tu cuenta</h2>
                  <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                      type="text"
                      className="form-control control-aux-register"
                      name="user_name"
                      placeholder="Nombre(s) Apellido(s): Solo caracteres: A-z"
                      required
                      onChange={handleInputUserName}
                    />
                    {onlyAlphabetLetters ? (
                      <div className="alert alert-danger text-center" role="alert">
                        Solo se permiten nombres escritos con caracteres alfabéticos
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Correo electrónico</label>
                    <input
                      type="email"
                      className="form-control control-aux"
                      name="user_email"
                      placeholder="Ej: correo@direccion.com"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Número telefónico</label>
                    <input
                      type="tel"
                      className="form-control control-aux"
                      name="user_tel"
                      pattern="[0-9]{10}"
                      placeholder="Ej: 9999990000"
                      required
                      onChange={handleTelephoneChange}
                    />
                    {tooMuchNumbers ? (
                      <div className="alert alert-danger text-center" role="alert">
                        Solo se permiten 10 caracteres número
                      </div>
                    ) : (
                      <div></div>
                    )}
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
                    Registrate
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
