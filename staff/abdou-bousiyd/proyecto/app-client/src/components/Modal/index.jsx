import Portal from '../../portal/index'
import './index.sass'

const Modal = ({ children, toggle, active }) => {

    return (
        <Portal>
            {active && (
                <div className='modale-wrapper'>
                    <div className='modale-window'>
                        <a href="#" className="modale-closebtn" onClick={toggle}>&times;</a>

                        <div>{children}</div>
                    </div>
                </div>
            )}
        </Portal>
    )
}

export default Modal