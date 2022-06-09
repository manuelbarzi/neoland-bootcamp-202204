const { model } = require('mongoose')
const { user, event, participant, category} = require('./schemas') 

const User = model('User', user)
const Event = model('Event', event)
const Participant = model('Participant', participant)
const Category = model('Category', category)

Category.actividadesDeportivas = 0
Category.actividadesSociales = 1
Category.medioAmbiente = 2


module.exports = {
    User,
    Event,
    Participant,
    Category
}