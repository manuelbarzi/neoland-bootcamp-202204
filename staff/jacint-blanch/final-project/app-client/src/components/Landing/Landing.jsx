import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Landing.css'
import Navbar from './Navbar';
import './Navbar.css';


const Landing = () => { 
    return(
            <div>
                <Navbar />
            </div>
    )
}


export default Landing