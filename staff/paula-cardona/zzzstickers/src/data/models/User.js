/**
 * constructs instaces of User
 * 
 * @param {string} name The name of the user
 * @param {string} username the user username
 * @param {string} password the user password
 */
function User(name, username, password){   //función constructora tienes un metodo que crea instancias de esa función constructora. users de users
    this.name = name
    this.username = username
    this.password = password
}
/**
 * Factory method to create a copy from a given user. crea un usuario a partir de otro, instancia de ella misma.
 * 
 * @param {User} user The user to copy
 * 
 * @returns {User} The copy of the user
 */
 User.copyFrom = function (user) {  //es un método estático no necesita instancia(objeto). metódo que permite copiar una instancia y hacer otra nueva 
    const copy = new User

    for (const key in user)
        copy[key] = user[key]

    return copy
}