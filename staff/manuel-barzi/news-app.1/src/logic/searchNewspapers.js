function searchNewspapers(query, callback) {
    const results = newspapers.filter(newspaper => newspaper.name.toLowerCase().includes(query.toLowerCase()))

    callback(null, results)
}