/**
 * constructs instaces of User
 * 
 * @param {string} name The name of the user
 * @param {string} username the user username
 * @param {string} password the user password
 */
function User(name, username, password){
    this.name = name
    this.username = username
    this.password = password
}
/**
 * Factory method to create a copy from a given user
 * 
 * @param {User} user The user to copy
 * 
 * @returns {User} The copy of the user
 */
 User.copyFrom = function (user) {
    const copy = new User

    for (const key in user)
        copy[key] = user[key]

    return copy
}