
function Clip({onClipTimeout }) { // recivo el tipo de mensaje y el mensaje, y callback para avisar que ha terminado el timing
    
    setTimeout(onClipTimeout, 4000)  // 

    return <div className="Clip__div"> 
        <img className="Clip__image" src="styles/clippy.png"/>
    </div>
}


function ClipMessage() {
    const ram = Math.random()
    let message

    if (ram < 0.2)
        message = "Use the buttons from the header to change betwen the stickers views"
    else if (ram <0.4)
        message = "Click on your name to acces to your profile configuration"
    else if (ram <0.6)
        message = "Use the save button from the stickers to edit your notes"
    else if (ram <0.7)
        message = "Click on the ❌ button to permanetly remove a sticker"
    else if (ram <0.8)
        message = "New notes will be saved empty automatically"    
    else 
        message = "To create a note click the ➕ button from below"


    return <div className="Clip__message__div">
        <p className="Clip__message">{message}</p>
    </div>
}