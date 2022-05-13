function updateUserPassword(token, password, newPassword, newPasswordRepeat, callback) {
    validateJwt(token)
    validatePassword(password)
    validatePassword(newPassword, 'new password')
    validatePassword(newPasswordRepeat, 'new password repeat')


    if (newPassword !== newPasswordRepeat)
        throw new Error('new password and new password repeat are not the same')

}
