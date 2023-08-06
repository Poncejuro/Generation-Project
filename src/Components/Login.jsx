import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/login.css';

export const Login = () =>{
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
            <h1>My App</h1>
                <div>
                    <input className='input-login'
                        placeholder='Correo@ejemplo.com'
                        type="email"
                        name="correo"
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <input className='input-login'
                        placeholder='Password'
                        type="password"
                        name='password'
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <Link to='/Register' >
                        <h4 className="advise">Don't have an account? <br />sign up!</h4>
                    </Link>
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