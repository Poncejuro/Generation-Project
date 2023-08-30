import { NavBar } from "../Components/Navbar";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

export const Testeo = () => {
    
    const [form, setForm] = useState({});

    const setField = (field) => {
        setForm({
          ...form,
          [field.target.name]: field.target.value,
       
        });

       //console.log('funciona')
        //console.log(form); //testing
        //console.log(typeof(form))//testing
    };

    const saveFriend = () => {
      const form2 = []
      form2.push(form);
        console.log("funciona asd" + form.usuario); //testing
        localStorage.setItem("nakamasData", JSON.stringify(form));
    };

  return (
    <>
      <NavBar />
      <Form.Control type="text" name="usuario" placeholder="Nombre de usuario" onChange={setField} />
      <br />
      <Form.Control type="text" name="Rol" placeholder="Rol" onChange={setField} />
      <br />
      <Form.Control type="text" name="Bibliografia" placeholder="Bibliografia" onChange={setField} />
      <br />
      <Button variant="primary" onClick={saveFriend}>Guardar</Button>{' '}
     
    </>
  );
};