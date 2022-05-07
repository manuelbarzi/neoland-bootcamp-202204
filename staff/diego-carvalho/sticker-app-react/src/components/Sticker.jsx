const { Component } = React

class Sticker extends Component {

    
    render() {
        return <div className="Sticker">
            <button className="Button">x</button>
            <form className="Sticker__form">
                <textarea className="Sticker__text" name="text"></textarea>
                <p className="Sticker__id"></p>
                <button className="Button">Save</button>
            </form>
        </div>

    }

}