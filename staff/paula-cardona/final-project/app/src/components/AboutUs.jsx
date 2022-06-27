import { Link} from 'react-router-dom'
import './AboutUs.sass'
import logo from './logo.png'

function AboutUs () {

    return <div className= "AboutUs ">
        <div>
        <img className= "img" alt="" src={logo}/>            
        </div>
        <div className= "AboutUs Modelo">
            <h2 className= "AboutUs__numbers"> 1 </h2>
                <p className= "AboutUs__text"> Servicio de entrega de pan y pastas artesanales recién hechas a la puerta de tu casa </p>
            <h2 className= "AboutUs__numbers"> 2 </h2>
                <p className= "AboutUs__text"> Nuestros clientes recibirán cada día de la semana durante la mañana, el pan y las pastas que hayan decidido</p>
            <h2 className= "AboutUs__numbers"> 3 </h2>
                <p className= "AboutUs__text"> Solamente debe suscribirse por 20€ mensuales. Nuestro equipo instalará un buzón en su vivienda y recibirá nuestros productos </p>
            <Link className="About__arrow__link" to="/login"> → </Link>
            
            

            
        </div>
    </div>

}

export default AboutUs
