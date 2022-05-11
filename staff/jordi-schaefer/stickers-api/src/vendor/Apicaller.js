console.log("Apicaller program loaded!")

class Apicaller {
    
    call(method, url, options, callback) {

        const xhr = new XMLHttpRequest


        xhr.addEventListener('load', event => {
            const { status, responseText: payload } = event.target
            callback(null, {status, payload})
        })

        xhr.addEventListener('error', () => {
            callback(new Error('API call fail'))
        })



        xhr.open(method, url)

        const { headers, body } = options

        if (headers)
            for (const element in headers)
                xhr.setRequestHeader(element, headers[element])
        
        if (body)
            xhr.send(body)
        else xhr.send()

    }
}

/* 
options:

{
    headers: {
        Authorization: ...,
        'Content-Type': ...
    },

    body: ...
}
*/