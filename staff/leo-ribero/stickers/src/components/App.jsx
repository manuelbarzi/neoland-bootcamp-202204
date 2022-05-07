const { Component } = React

// class App extends Component {
//     constructor() {
//         super(`<div class="App"></div>`)
//     }
// }

class App extends Component {
    render() {
        return <div className="App">
            <Register />
        </div>
    }
}