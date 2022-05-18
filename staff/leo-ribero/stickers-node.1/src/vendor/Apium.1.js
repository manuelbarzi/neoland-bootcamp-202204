console.log('%cApium v1.0', 'font-size: 36px; background: linear-gradient(to right, #30CFD0 0%, #330867 100%); color: white;')

class Apium {
    /**
     * Performs an HTTP call to a server
     * 
     * @param {string} method The HTTP method (GET, POST, PATCH, PUT, DELETE, ...)
     * @param {string} url The address of the server to connect to
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
     * @param {function} callback  The callback function that attends the response's result
     */
    call(method, url, options, callback) {
        const xhr = new XMLHttpRequest

        xhr.addEventListener('load', event => {
            const { status, responseText: payload } = event.target

            callback(null, { status, payload })
        })

        xhr.addEventListener('error', () => {
            callback(new Error('API call fail'))
        })

        xhr.open(method, url)

        const { headers, body } = options

        if (headers)
            for (const key in headers)
                xhr.setRequestHeader(key, headers[key])

        xhr.send(body)
    }
}