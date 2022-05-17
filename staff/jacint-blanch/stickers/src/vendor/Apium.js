console.log('%cApium v1.0', 'font-size: 36px; background: linear-gradient(to right, #30CFD0 0%, #330867 100%); color: white;')

class Apium {

    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }

    call(method, urlOrPath, options, callback) {
        const xhr = new XMLHttpRequest

        xhr.addEventListener('load', event => {
            const { status, responseText: payload } = event.target

            callback(null, { status, payload })
        })

        xhr.addEventListener('error', () => {
            callback(new Error('API call fail'))
        })

        const url = urlOrPath.toLowerCase().startsWith('http://') || urlOrPath.toLowerCase().startsWith('https://') ? urlOrPath : `${this.baseUrl}/${urlOrPath}`

        xhr.open(method, url)

        if (options) {
            const { headers, body } = options

            if (headers)
                for (const key in headers)
                    xhr.setRequestHeader(key, headers[key])

            xhr.send(body)
        } else xhr.send()
    }

    get(urlOrPath, options, callback) {
        this.call('GET', urlOrPath, options, callback)
    }

    post(urlOrPath, options, callback) {
        this.call('POST', urlOrPath, options, callback)
    }

    patch(urlOrPath, options, callback) {
        this.call('PATCH', urlOrPath, options, callback)
    }

    put(urlOrPath, options, callback) {
        this.call('PUT', urlOrPath, options, callback)
    }

    delete(urlOrPath, options, callback) {
        this.call('DELETE', urlOrPath, options, callback)
    }

    options(urlOrPath, options, callback) {
        this.call('OPTIONS', urlOrPath, options, callback)
    }
}

