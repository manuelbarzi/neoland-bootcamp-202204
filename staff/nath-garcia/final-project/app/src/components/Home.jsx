import { useState, useContext, useEffect } from 'react'
import Context from '../components/Context'
import retrieveUser from '../logic/retrieveUser'
import retrieveMovements from '../logic/retrieveMovements'
import saveMovement from '../logic/saveMovement'
import Profile from '../components/Profile'
import Expenses from '../components/Expenses'
import Income from '../components/Income'
import AddMovement from './AddMovement'
import './Home.sass'
import { isJwtValid } from '../validators'
import { useNavigate } from 'react-router-dom'
import Logger from '../vendor/Loggy'

function Home(props) {
    const logger = new Logger('Home')

    logger.info('call')

    const navigate = useNavigate()
    const [view, setView] = useState(null)
    const [name, setName] = useState(null)
    const [movements, setMovements] = useState(null)
    const { handleFeedback } = useContext(Context)

    const handleLogoutClick = () => {
        onUserLoggedOut()
    }

    const onUserLoggedOut = () => {
        delete sessionStorage.token

        props.onUserLoggedOut()
    }

    const handleLogout = () => {
        delete sessionStorage.token
        navigate("/login")
    }

    const validateUser = async () => {
        try {
            const result = await retrieveUser(sessionStorage.token)

            setView('expenses')

            setName(result)
        } catch (error) {
            handleFeedback({ level: 'error', message: error.message })
        }
    }

    const handleBackClick = () => setView('expenses')
    const handleProfileClick = () => setView('profile')
    const handleClickExpenses = () => setView('expenses')
    const handleClickIncome = () => setView('income')


    useEffect(() => {
        logger.info('componentDidMount')

        if (isJwtValid(sessionStorage.token))
            validateUser()
    }, [])

    const handleAddClick = () => setView('addMovement')



    return isJwtValid(sessionStorage.token) ?

        <div className="Home Container">

            <header className="Home__header Container Container--row Container--spread-sides">
                <button className="Button Button--no-border Home__home Link Button--profile" onClick={handleProfileClick}>My profile </button>
            </header>

            {view === 'profile' && <Profile onBackClick={handleBackClick} />}
            {(view === 'expenses' || view === 'income') && <main>
                <div className="Home__body Container Container--justify-start">
                    <div className="Container--row Box--tag">
                        <button className="Tag--expenses" onClick={handleClickExpenses}>EXPENSES</button>
                        <button className="Tag--income" onClick={handleClickIncome}>INCOME</button>
                    </div>
                    <div className="Box">
                        {view === 'income' && <Income />}
                        {view === 'expenses' && <Expenses />}

                        <button className="Plus" onClick={handleAddClick}>+</button>
                    </div>
                </div>
            </main>}
            {view === 'addMovement' && <AddMovement onBackClick={handleClickExpenses} />}
            <footer className="Home__footer">
                <div> 
                <button className="Button Link Button--logout" onClick={handleLogout}>Logout</button>
                </div>
            </footer>
        </div > : <></>

}

export default Home