import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { NavBar } from "../../Components/Navbar";
import "../ContactForm/Contact.css";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qulhdg4",
        "template_vjgzmdu",
        form.current,
        "aNsr8PVLj5pQYRcSE"
      )
      .then((response) => {
        console.log("Correo enviado exitosamente", response);
        mostrarAlerta(true);
        form.current.reset();
      })
      .catch((error) => {
        console.error("Error al enviar el correo", error);
        mostrarAlerta(false);
      });
  };

  const mostrarAlerta = (exito) => {
    Swal.fire({
      title: exito ? "Éxito" : "Error",
      text: exito
        ? "El correo ha sido enviado correctamente."
        : "Hubo un error al enviar el correo.",
      icon: exito ? "success" : "error",
      confirmButtonText: "Aceptar",
    });
  };

  return (
    <>
      <NavBar />
      <div className="principal">
        <div className="custom-form-container">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <form ref={form} onSubmit={sendEmail} className="form-contact">
                  <h2 className="title-box">Contáctanos</h2>
                  <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                      type="text"
                      className="form-control control-aux"
                      name="user_name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Teléfono</label>
                    <input
                      type="text"
                      className="form-control control-aux"
                      name="user_tel"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Correo electrónico</label>
                    <input
                      type="email"
                      className="form-control control-aux"
                      name="user_email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Mensaje</label>
                    <textarea
                      className="form-control"
                      name="message"
                      required
                    />
                  </div>
                  <button id="btn" type="submit" className="btn btn-primary">
                    Enviar
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
