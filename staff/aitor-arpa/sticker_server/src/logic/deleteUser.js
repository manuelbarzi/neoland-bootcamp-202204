function deleteUser (token, callback)  {
    
    xhr.addEventListener('load', event => {

        const status = event.target.status
        
    })
    
    xhr.open('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth')
    
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

  
   
    xhr.send(json)
}