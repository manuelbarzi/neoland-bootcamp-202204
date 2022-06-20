import imagePan from '../images/pan.png'

function PanBlanco () {

    

    return <div>

        <header className="Header__Pan">
            <title className= "title__Pan">Pan Blanco</title>
        </header>
        <div>
            {/* <img className="Image" alt="" src="../images/pan.png" /> */}
            
            <img className="Image" src={imagePan} alt="logo" width="150" height="150"/>
            
            <button button__Pan PanBlanco> Pan Blanco </button>
            <button button__Pan> Baguette </button>
            <button button__Pan> Baguette </button>
            <button button__Pan> Baguette </button>
            <button button__Pan> Baguette </button>
            <button button__Pan> Baguette </button>
        </div>
            
</div>
            
        
}
export default PanBlanco
