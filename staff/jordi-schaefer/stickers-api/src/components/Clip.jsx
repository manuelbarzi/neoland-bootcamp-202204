
function Clip({onClipTimeout }) { // recivo el tipo de mensaje y el mensaje, y callback para avisar que ha terminado el timing
    
    setTimeout(onClipTimeout, 4000)  // 

    return <div className="Clip__div"> 
        <img className="Clip__image" src="styles/clippy.png"/>
    </div>
}


function ClipMessage() {
    return <div className="Clip__message__div">
        <p className="Clip__message">To create a note click the button ➕ from below</p>
    </div>
}