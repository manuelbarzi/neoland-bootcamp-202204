console.log('%cApium v1.2', 'font-size: 36px; background: linear-gradient(to right, #30CFD0 0%, #330867 100%); color: white;')

/**
 * API "Universal Messenger" (APIum)
 *
 * Processes HTTP requests/responses (http client)
 */
class Apium {
    /**
     * Constructs an instance of Apium
     * 
     * @param {string} baseUrl The base url to connect to
     */
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }

    /**
     * Performs an HTTP call to a server
     * 
     * @param {string} method The HTTP method (GET, POST, PATCH, PUT, DELETE, ...)
     * @param {string} urlOrPath The address of the server to connect to
     * @param {Object} options The required HTTP headers or body for the specific call
     *  
     * Example:
     * 
     * {
     *       headers: {
     *           Authorization: ...,
     *           'Content-Type': ...
     *       },
     *       body: ...
     *   }
     * @param {function} callback  The callback function that attends the response's result ({ status, payload})
     */
    call(method, urlOrPath, options, callback) {
        const url = urlOrPath.toLowerCase().startsWith('http://') || urlOrPath.toLowerCase().startsWith('https://') ? urlOrPath : `${this.baseUrl}/${urlOrPath}`
        
        let status

        return fetch(url, {
            method: 'GET',
            headers: options.headers,
            body: options.body
        })
            .then(response => {
                status = response.status

                return response.json()
            })
            .then(payload => {
                return ({ status, payload })
            })
            .catch(error => {
                return new Error(error)
            })
    }


    get(urlOrPath, options, callback) {
        return this.call('GET', urlOrPath, options, callback)
    }

    post(urlOrPath, options, callback) {
        return this.call('POST', urlOrPath, options, callback)
    }

    patch(urlOrPath, options, callback) {
        return this.call('PATCH', urlOrPath, options, callback)
    }

    put(urlOrPath, options, callback) {
        return this.call('PUT', urlOrPath, options, callback)
    }

    delete(urlOrPath, options, callback) {
        return this.call('DELETE', urlOrPath, options, callback)
    }

    options(urlOrPath, options, callback) {
        return this.call('OPTIONS', urlOrPath, options, callback)
    }
}

export default Apium