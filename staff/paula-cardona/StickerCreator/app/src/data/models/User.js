function User(name, username) {
    if (typeof name !== 'string') throw new TypeError('name is not string')
    if (typeof username !== 'string') throw new TypeError('username is not string')

    this.name = name
    this.username = username
}
export default User