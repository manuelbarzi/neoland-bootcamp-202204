import '../styles/Feedback.sass'

function Feedback({ type, message, callback }) { // recivo el tipo de mensaje y el mensaje, y callback para avisar que ha terminado el timing

    setTimeout(callback, 3500)  // 3500
    
    return <div className={`Feedback Feedback--${type}`}>    {/* cambio la clase en funcion del tipode mensaje */}
        { type==='error' && <span className="Icon material-symbols-outlined">warning</span>}
        { type==='success' && <span className="Icon material-symbols-outlined">done</span>}
        <p className="Feedback__font">{message}</p>
    </div>
}

export default Feedback