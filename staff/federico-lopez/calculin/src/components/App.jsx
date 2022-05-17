class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {result: null, a: null, b: null}
    }
        handlerA = event => {
            this.setState({a: Number(event.target.value) })
        }

        handlerB = event => {
            this.setState({b: Number(event.target.value) })
        }

        handlerAdd = () => {
            const {a, b} = this.state
            const res = a + b
            
            this.setState({result: res})
        }

        handlerSub = () => {
            const {a, b} = this.state
            const res = a - b
            
            this.setState({result: res})
        }

        handlerMultiply = () => {
            const {a, b} = this.state
            const res = a * b
            
            this.setState({result: res})
        }

        handlerSplit = () => {
            const {a, b} = this.state
            const res = a / b
            
            this.setState({result: res})
        }

        render() {
            return <div className="App">
                <h1>{'Calculator ' + this.props.value}</h1>
                <input type="number" name="a" onChange={this.handlerA} />
                <button className="addButton" onClick={this.handlerAdd}>+</button>
                <button className="subButton" onClick={this.handlerSub}>-</button>
                <button className="multiplyButton" onClick={this.handlerMultiply}>*</button>
                <button className="splitButton" onClick={this.handlerSplit}>/</button>
                <input type="number" name="b" onChange={this.handlerB} />
                {this.state.result !== null && <Result value={this.state.result} />}
            </div>
        }
}