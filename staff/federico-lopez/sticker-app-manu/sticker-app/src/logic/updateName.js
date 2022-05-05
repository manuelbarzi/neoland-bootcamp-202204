function updateName(username, name, newName, callback) {
    const user = db.users.find(user => user.username === username)
    
    if(!user) {
        const error = new Error('user does not exist')

        callback(error)
        return
    }

    if(name === newName) {
        const error = new Error('new name and previous name are equals')
        
        callback(error)
        return
    }
    user.name = newName

    callback(null)
}