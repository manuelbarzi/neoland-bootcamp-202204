import { useState } from 'react'
import Login from './Login'
import Register from './Register'
import Home from './Home'

// import {BrowserRouter as Router, Route} from "react-router-dom";



function App() {

    const [view, setView] = useState(sessionStorage.token ? 'home' : 'login')

    const handleUserLoggedIn = () => setView('home')
    const handleUserLoggedOut = () => setView('login')
    const handleRegisterNavigation = () => setView('register')
    const handleProfileNavigation = () => setView('profile')

    return <div className="App">
        {view === 'login' && <Login onUserLoggedIn={handleUserLoggedIn} onRegisterNavigation={handleRegisterNavigation} />}
        {view === 'home' && <Home onUserLoggedOut={handleUserLoggedOut} onProfileNavigation={handleProfileNavigation}/>}
        {view === 'register' && <Register onUserLoggedOut={handleUserLoggedOut} />}
    </div>

    // return (
    //     <Router>
    //         <Route path='/login' component={Login}></Route>
    //         <Route path='/home' component={Home}></Route>
    //         <Route path='/register' exact component={Register}></Route>
    //     </Router>
    // )

}

export default App;