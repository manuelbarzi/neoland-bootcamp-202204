import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Landing.css'
import Home from './pages/Home'



const Landing = () => { 
    return(
            <div>
                <div>
                    <Navbar />
                </div>
                <div>
                    <Home />
                </div>
            </div>
    )
}


export default Landing