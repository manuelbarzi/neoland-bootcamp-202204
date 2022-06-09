import Logger from '../vendor/Loggy'

function AboutUs () {

    const logger = new Logger('AboutUs')
    logger.info('call')

    const handleNextArrow = (props)=>{
        props.onNextArrow()
    }

    logger.info('render')
    return <div className= "AboutUs">
        <div>
            <h1> Título </h1>
        </div>
        <div>
            <h2 className= "h2 AboutUs__one"> 1 </h2>
                <textarea> lkausbfuilsndf </textarea>
            <h2 className= "h2 AboutUs__two"> 2 </h2>
                <textarea> fsdaliugb </textarea>
            <h2 className= "h2 AboutUs__three"> 3 </h2>
                <textarea> aisuhfgwe </textarea>
        </div>
        <div>
            <a href="#" className="Arrow" onClick={handleNextArrow}>  ➡</a>
        </div>

    </div>

}

export default AboutUs
