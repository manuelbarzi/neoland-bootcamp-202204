console.log('%cApium v1.0', 'font-size: 36px; background: linear-gradient(to right, #30CFD0 0%, #330867 100%); color: white;')

class Apium {
    call(method, url, options, callback) {
        const xhr = new XMLHttpRequest

        xhr.addEventListener('load', event => {
            const { status , responseText: payload } = event.target

            callback(null, { status, payload })
        })

        xhr.addEventListener('error', () => {
            callback(new Error('API call fail'))
        })
        xhr.open(method, url)

         /* 
        options:

        {
            headers: {
                Authorization: ..., //es una key value
                'Content-Type': ... //es key value
            },

            body: ...
        }
        */

        const { headers, body } = options

        if (headers) 
        for ( const key in headers) //Por cada header colocale el key con su value
        xhr.setRequestHeader(key, headers[key])

        xhr.send(body)
    }
}
