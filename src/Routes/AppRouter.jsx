import{Route,Routes} from 'react-router-dom'
import { Login } from '../Pages/Login';
import { Register } from '../Pages/Register'
import { HomePage } from '../Pages/HomePage'
import { PrivateRoute } from './PrivateRoute';
import {About} from '../Pages/About';
import { Contact} from '../Pages/Contact';

export const AppRouter = () =>{
    return <>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='AboutUs' element={<About/>}/>
            <Route path='Register' element={<Register/>}/>
            <Route path='Contact' element={<Contact/>}/>
            
            <Route 
                path='HomePage' 
                element={
                    <PrivateRoute>
                        <HomePage/>
                    </PrivateRoute>
            }
            />
        </Routes>
    </>
}