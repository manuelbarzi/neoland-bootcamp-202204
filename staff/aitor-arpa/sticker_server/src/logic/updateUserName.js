
function updateUserName(token, newname, callback) {

  const xhr = new XMLHttpRequest


  xhr.addEventListener('load', event => {

    const status = event.target.status

    if (status === 204)
      callback(null)
    else if (status >= 400 && status < 500) {
      const json = event.target.responseText
      const data = JSON.parse(json)

      callback(new Error(data.error))
    } else {
      callback(new Error('server error'))
    }

    xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')
    // tipo de contenido y en que formato va
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    const data = { newname }
    const json = JSON.stringify(data) // Convierto el texto a json

    // envio la constante json al servidor
    xhr.send(json)
  })

}

