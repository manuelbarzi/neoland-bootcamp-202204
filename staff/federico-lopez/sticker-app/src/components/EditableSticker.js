class EditableSticker extends Component {
    constructor(text = '') {
        super(`<div class=Sticker__Edit>
    <a class="xButton">x</a>
    <form class="Sticker__form">
        <textarea class="textarea" name="text"></textarea>
        <button class="saveButton">Save</button>
    </form>
    </div>`)

        this.container.querySelector('.textarea').innerText = text
    }
}