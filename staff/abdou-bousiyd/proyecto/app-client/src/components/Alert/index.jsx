import './index.sass'

function Alert (props){

    const {message, error} = props;

    return <div className="alert ">
            { error && <span className="material-icons"  >warning</span>}
            {/* { error && <span className="material-icons">favorite_border</span> } */}
            <span className="alert-text">{message}</span>
        </div>
}

export default Alert;