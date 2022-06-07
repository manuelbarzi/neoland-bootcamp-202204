const secretBox = (() => {
    let _secret

    return {
        keep(secret) {
            _secret = secret
        },

        retrieve(password) {
            if (password === '123123123')
                return _secret
        }
    }
})()

// demo

secretBox.keep('this is a secret')

console.log(secretBox.retrieve('123123123'))

console.log(secretBox.retrieve('123123123_'))