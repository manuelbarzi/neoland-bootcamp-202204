class ViewSticker extends Component {
    constructor(text = '') {
        super(`<div class=Sticker__View>
        <div class="noteButtons">
            <a class="editButton">Edit</a>
            <a class="removeButton">Remove</a>
        </div>
        <p class="noteText"></p>
    </div>`)

        this.container.querySelector('.noteText').innerText = text
    }

    onEdit(callback) {
        const editButton = this.container.querySelector('.editButton')

        editButton.addEventListener('click', () => {
            callback()
        })
    }
}