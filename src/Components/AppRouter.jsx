import{Route,Routes} from 'react-router-dom'
import { Login } from './Login';
import { Register } from './Register'
import { HomePage } from './HomePage'
import { PrivateRoute } from './PrivateRoute';
import {About} from './About';

export const AppRouter = () =>{
    return <>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='AboutUs' element={<About/>}/>
            <Route path='Register' element={<Register/>}/>
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