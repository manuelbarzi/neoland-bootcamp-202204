function searchNewspapers(query, callback) {
    const results = newspapers.filter(newspaper => newspaper.name.toLowerCase().includes(query.toLowerCase()))
    // guardo dentro de esta variable, todos los elementos que contienen el query

    callback(null, results)
}