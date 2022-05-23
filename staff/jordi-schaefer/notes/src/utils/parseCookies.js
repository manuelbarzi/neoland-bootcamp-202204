function parseCookies(cookieString = '') {
    const cookies = {}
    
    const keyValues = cookieString.split('; ')

    keyValues.forEach(keyValue => {
        const separatorIndex = keyValue.indexOf('=')

        const key = keyValue.substring(0, separatorIndex)
        const value = keyValue.substring(separatorIndex + 1, keyValue.length)

        cookies[key] = value  // para guardar propiedades (y su valor) en un objeto
    })

    return cookies
}

module.exports = parseCookies