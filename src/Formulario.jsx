import React, {Fragment, useState} from "react";

export const Formulario = () =>{

    const [datos, setDatos] = useState({
        usuario:'',
        correo:'',

    })

    const handleInputChange = (event) => {
        //console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const sendData = (event) =>{
        event.preventDefault();
        //console.log(datos.usuario + ' ' +datos.correo )
    }

    return(
        <>
            <form className="auth-form-container" onSubmit={sendData}>
            <h1>Login</h1>
                <div>
                    <input
                        placeholder='Usuario'
                        type="text"
                        name='usuario'
                        onChange={handleInputChange}
                    ></input>
                </div>
                <div>
                    <input
                        placeholder='Correo@ejemplo.com'
                        type="email"
                        name="correo"
                        onChange={handleInputChange}
                    ></input>
                </div>
                <div>
                    <button type="submit">
                        Entrar
                    </button>
                </div> 
            </form>
        </>
    )
}