class NoteLi extends Component {
    constructor(text)  {
        super (`<li class="note"><h2></h2></li>`)

    const h = this.container.querySelector('h2')
    h.innerText = text
    }
}