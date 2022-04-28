function searchNewspapers(query, callback) {
    const results = newspapers.filter(newspapers => newspapers.name.toLowerCase().includes(query.toLowerCase()))
    callback(null, results)
}