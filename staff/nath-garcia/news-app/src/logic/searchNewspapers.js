function searchNewspapers(query, callback) {
    const results = newspapers.filter(newspaper => newspaper.name.toLowerCase().includes(query.toLowerCase()))
    // funcion filter, crea un nuevo array con todos los objetos que cumplen la funcion
    // funcion: condicion de que nombre incluya las letras del query

    callback(null, results)
}