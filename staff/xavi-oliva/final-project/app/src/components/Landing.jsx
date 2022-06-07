import { useContext } from 'react'
import { isJwtValid } from '../validators'
import Logger from '../vendor/Loggy'
import Context from './Context'

function Landing(props) {
    const logger = new Logger('Landing')

    logger.info('call')

    logger.info('render')

    const handleLoginLinkClick = event => {
        event.preventDefault()

        props.onLoginLinkClicked()
    }

    return isJwtValid(sessionStorage.token) ? <></> : <div className="Signin">

        <section className="Landing Container">
            <h1>Brun's <span>Flats</span></h1>
            <h3>home sweet home</h3>
            <img src="../../myhouse.svg" alt="Bruns Logo" />
            <div className='Container'>
                <a href="#" className='Button Button--white' onClick={handleLoginLinkClick}>Guest</a>
                <a href="#" className='Button Button--white' onClick={handleLoginLinkClick}>Login</a>
            </div>
        </section>
    </div>
}

export default Landing