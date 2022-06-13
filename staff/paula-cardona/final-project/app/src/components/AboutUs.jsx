import Logger from '../vendor/Loggy'

function AboutUs (props) {

    const logger = new Logger('AboutUs')
    logger.info('call')

    const handleNextArrow = event =>{
        event.preventDefault()
        props.onNextArrow()
    }

    logger.info('render')
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
            <a href="#" className="Arrow" onClick={handleNextArrow}>  ➡</a>
        </div>

    </div>

}

export default AboutUs
