class Sticker extends React.Component {
    render() {
        return <div class="Sticker">
            <button class="Button">x</button>
            <form class="Sticker__form">
                <textarea class="Sticker__text" name="text">{this.props.text}</textarea>
                <p class="Sticker__id"></p>
                <button class="Button">Save</button>
            </form>
        </div>
    }
}