function App() {
    const h1 = React.createElement('h1', { className: 'App__title' }, 'hola mundo')

    const fruits = ['banana', 'orange', 'lemon', 'apple', 'cherry']

    const lis = fruits.map(fruit => React.createElement('li', null, fruit))

    const ul = React.createElement('ul', null, lis)

    const container = React.createElement('div', { className: 'App'} , h1, ul)

    return container
}