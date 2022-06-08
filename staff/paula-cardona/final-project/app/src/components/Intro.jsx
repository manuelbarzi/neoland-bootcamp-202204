function Intro (props) {
    
    const handleSiguienteClick = () => {
        props.onSiguienteClicked()
    }
    

    return <div className= "Intro Container"> 
        <h1 className="h1"> EXPLICACIóooon </h1>
        <p className="Intro__text" name="text">Hola holita vecinillos </p>
        <a href="#"onClick={handleSiguienteClick}>Siguiente</a>
    </div>
}

export default Intro

