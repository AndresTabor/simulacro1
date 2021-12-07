import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import  RegistroCar  from '../components/RegistroCar';
//import { ListCars } from '../components/ListCars';
import  BarraNav  from '../components/BarraNav';
import App from '../container/App';

export const AppRouter = () => {
    

    return (
        <div>
            <Router>
            <BarraNav/>
                <Routes>
                    <Route exact path="/Home" element={<App/>}/>
                    <Route exact path="/Registro" element={<RegistroCar/>}/>                    
                </Routes>
            </Router>
        </div>
    )
}
