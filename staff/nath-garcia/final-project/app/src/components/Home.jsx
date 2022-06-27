import { useState, useContext, useEffect } from 'react'
import Context from '../components/Context'
import retrieveUser from '../logic/retrieveUser'
import retrieveMovements from '../logic/retrieveMovements'
import Profile from '../components/Profile'
import Expenses from '../components/Expenses'
import Income from '../components/Income'
import './Home.sass'
import { isJwtValid } from '../validators'
import { useNavigate } from 'react-router-dom'
import Logger from '../vendor/Loggy'

function Home({ onUserLogout }) {
    const logger = new Logger('Home')

    logger.info('call')

    const navigate = useNavigate()
    const [view, setView] = useState('home')
    const [name, setName] = useState(null)
    const [movements, setMovements] = useState(null)
    const { handleFeedback } = useContext(Context)

    const handleLogoutClick = () => {
        handleLogout()
    }

    const handleLogout = () => {
       onUserLogout
    }



    //const handleProfileClick = () => setView('profile')
   // const handleClickExpenses = () => setView('expenses')
   // const handleClickIncome = () => setView('income')

    useEffect(() => {
        logger.info('componentDidMount')

        if (isJwtValid(sessionStorage.token))
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {
                    handleFeedback({ level: 'error', message: error.message })

                    handleLogout()

                    return
                }

                setName(user.name)
                setView('expenses')
            })
        else navigate("/login")
    }, [])

    const handleAddClick = () => {
        saveMovement(sessionStorage.token, null, )
    }

    useEffect(() => {
        getMovements()
    }, [view])

    const getMovements = async () => {
        try {
            const result = await retrieveMovements(sessionStorage.token)

            setMovements(result)
        } catch (error) {
            handleFeedback({ level: 'error', message: error.message })
        }
    }

    return isJwtValid(sessionStorage.token) ?

        <div className="Home Container">

            <header className="Home__header Container Container--row Container--spread-sides">
                <button className="Button Button--no-border Home__home Link Button--profile" onClick={handleProfileClick}>My profile </button>
            </header>

            <main>
                <div className="Home__body Container Container--justify-start">
                    <div className="Box">

                        <div className="expenses" onClick={handleClickExpenses}>EXPENSES</div>
                        <div className="income" onClick={handleClickIncome}>INCOME</div>
                        <button className="Plus">+</button>
                    </div>
                </div>

                {view === 'profile' && <Profile />}
                
            </main>

            <footer className="Home__footer">
                <div>
                    <button className="Button Link Button--logout" onClick={handleLogoutClick}>Logout</button>
                </div>
            </footer>
        </div > : <></>

    /*return isJwtValid(sessionStorage.token) ?

        <div className="Home Container">

            {view === 'home' && <header className="Home__header Container Container--row Container--spread-sides">
                <button className="Button Button--no-border Home__home Link Button--profile" onClick={handleProfileClick}>My profile </button>
            </header>}

            <main>
                {view === 'home' && <div className="Home__body Container Container--justify-start">
                    <div className="Box">

                        <div className="expenses" onClick={handleClickExpenses}>EXPENSES</div>
                        <div className="income" onClick={handleClickIncome}>INCOME</div>
                        <button className="Plus">+</button>
                    </div>
                </div>}

                {view === 'profile' && <Profile />}
                {view === 'expenses' && <Expenses />}
                {view === 'income' && <Income />}
            </main>

            <footer className="Home__footer">
                <div>
                    <button className="Button Link Button--logout" onClick={handleLogoutClick}>Logout</button>
                </div>
            </footer>

        </div > : <></>*/
}

export default Home