function App() {
    return <div className="App">
        <h1 className="App__title">hola mundo</h1>
        <form onSubmit={event => {
            event.preventDefault()

            const a = Number(event.target.a.value)
            const b = Number(event.target.b.value)

            const res = a + b

            debugger
        }}>
            <input type="number" name="a"/>
            <input type="number" name="b"/>
            <button>Add</button>
        </form>
    </div>
}