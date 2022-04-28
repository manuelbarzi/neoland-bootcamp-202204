function retrieveUser(username, callback) {
    const user = users.find(user => user.username === username)

    if (!user) {
        callback(new Error(`user with username ${username} not found`))

        return
    }

    const copy = User.copyFrom(user)

    delete copy.password
    

    callback(null, copy)
}

    /* OTRAS MANERAS DE CREAR LA COPIA DE USER SIN LA PROPIEDAD PASSWORD: */

    //delete user.password        - ERROR! MAL! NO!! (así eliminaríamos el password del user original)

    /*
    const copy = {
        name: user.name,
        username: user.username
    }
    */

    /*
    const copy = { ...user }

    delete copy.password
    */

    /*
    // const name = user.name
    // const username = user.username
    const { name, username: _username } = user

    const copy = { name, username: _username }
    */

    /*
    const copy = {}

    const keys = Object.keys(user) // ['name', 'username', 'password']

    for(let i = 0; i < keys.length; i++) {
        const key = keys[i]

        if (key !== 'password')
            copy[key] = user[key]
    }
    */