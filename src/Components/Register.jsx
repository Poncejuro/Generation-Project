import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/login.css'

export const Register = () =>{
    const [datos, setDatos] = useState({
        usuario:'',
        correo:'',
        password:'',
    })

    const navigate = useNavigate()

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const sendData = (event) =>{
        event.preventDefault();
        navigate('/Homepage',{
            replace: 'true',
            state:{
                logged: true,
            }
        }) 
    }

    return(
        <>
            <form className="auth-form-container" onSubmit={sendData}>
            <h1>New User</h1>
                <div>
                    <input className='input-login'
                        placeholder='Nombre de Usuario'
                        type="text"
                        name='usuario'
                        onChange={handleInputChange}
                    ></input>
                </div>
                <div>
                    <input className='input-login'
                        placeholder='Correo@ejemplo.com'
                        type="email"
                        name="correo"
                        onChange={handleInputChange}
                    ></input>
                </div>
                <div>
                    <input className='input-login'
                        placeholder='Password'
                        type="password"
                        name="password"
                        onChange={handleInputChange}
                    ></input>
                </div>
                <div>
                    <button type="submit" className='input-button'>
                        Log in
                    </button>
                </div> 
                <></>
            </form>
        </>
    )
}