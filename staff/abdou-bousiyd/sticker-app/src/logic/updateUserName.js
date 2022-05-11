function updateUserName(token, name, callback) {

    const xhr = new XMLHttpRequest()
    const url = 'https://b00tc4mp.herokuapp.com/api/v2/users'


    xhr.addEventListener('load', event => {
        const status = event.target.status
        if(status === 204) {
            // const json = event.target.responseText
            // const data = JSON.parse(json)
            callback(null)
        }else if (status >= 400 && status < 500) {
            const json = event.target.responseText

            const data = JSON.parse(json)

            callback(new Error(data.error))
        } else callback(new Error('server error'))
    })



    xhr.open('PATCH', url)

    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    const data = { name}
    
    const json = JSON.stringify(data)
        
    xhr.send(json)
    
}