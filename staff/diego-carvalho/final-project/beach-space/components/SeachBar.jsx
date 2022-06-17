const SearchBar = () => {
    const handleFormSubmit = event => {
       
        event.preventDefault()

    }

    return <div>
        <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Search here" name="input" />
        <select name='select'>
            <option value="category1"></option>
            <option value="category2"></option>
            <option value="category3"></option>
        </select>
        <button type='submit'>send</button>
    </form>

    </div>

  


}

export default SearchBar

//TODO debugger event.target.select y event.target.input