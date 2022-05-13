const {Component} = React

class StickerItem extends Component {
    constructor(){
        super()
        this.logger = new Logger('StickerItem')

        this.logger.info('constructor')
    }
    render() {
        this.logger.info('render')
        return<li></li>

    }

}