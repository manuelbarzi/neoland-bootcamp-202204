function searchNewspapers(query, callback) {
    const results = newspapers.filte(newspaper => newspaper.name.toLowerCase().includes(query.toLowerCase()))

    callback(null, results)
}