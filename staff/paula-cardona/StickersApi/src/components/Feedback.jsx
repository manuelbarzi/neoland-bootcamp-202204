// //para que la toast se muestre con diferentes colores segun el grado message que envie 
// function Feedback ({ level, message, onTimeout}) { //le pasamos con {} para poder ponerlo segun el level i message que necesitemos ya que son propiedades
//     setTimeout(onTimeout, 1000)
    
//     return <div className={`Feedback Feedback--${level}`}> {/*// crea dos tipos de clase porque le asigna colores segun el level de feedback*/}
//         <p>{message}</p>
//     </div>
// }

function Feedback(props) {
    const { level, message, onTimeout } = props

    setTimeout(onTimeout, 1000)

    return <div className={`Feedback Feedback--${level}`} >
        <p>{message}</p>
    </div>
}