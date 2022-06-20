import Logger from '../vendor/Loggy'
import { Link} from 'react-router-dom'

function AboutUs () {

    return <div className= "AboutUs">
        <div>
            <h1 className= "AboutUs__h1"> Título </h1>
        </div>
        <div >
            <h2 className= "AboutUs__numbers AboutUs__one"> 1 </h2>
                <p className= "AboutUs__text"> lkausbfuilsndf </p>
            <h2 className= "AboutUs__numbers AboutUs__two"> 2 </h2>
                <p className= "AboutUs__text"> fsdaliugb </p>
            <h2 className= "AboutUs__numbers AboutUs__three"> 3 </h2>
                <p className= "AboutUs__text"> aisuhfgwe </p>
        </div>
        <div>
            <Link className="Arrow" to="/login">  ➡</Link>
        </div>

    </div>

}

export default AboutUs
