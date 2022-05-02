
 function User(name, username, password) {
    this.name = name
    this.username = username
    this.password = password
}


User.copyFrom = function (user) {
    const copy = new User

    for (const key in user)
        copy[key] = user[key]

    return copy
}