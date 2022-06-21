import { Link} from 'react-router-dom'

function AboutUs () {

    return <div className= "AboutUs Modelo">
        <div>
            <h1 className= "AboutUs__h1"> Título </h1>
        </div>
        <div >
            <h2 className= "AboutUs__numbers"> 1 </h2>
                <p className= "AboutUs__text"> Servicio de entrega de pan y pastas artesanales recién hechas a la puerta de tu casa </p>
            <h2 className= "AboutUs__numbers"> 2 </h2>
                <p className= "AboutUs__text"> Nuestros clientes recibirán cada día de la semana durante la mañana, el pan y las pastas que hayan decidido</p>
            <h2 className= "AboutUs__numbers"> 3 </h2>
                <p className= "AboutUs__text"> Solamente debe suscribirse por 20€ mensuales. Nuestro equipo instalará un buzón en su vivienda y recibirá nuestros productos </p>
        </div>
        <div>
            <Link className="About__arrow__link" to="/login"> → </Link>
        </div>

    </div>

}

export default AboutUs
