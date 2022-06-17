const { connect, disconnect } = require('mongoose')
const { User, Apartment } = require('./models')

    ; (async () => {
        try {
            await connect('mongodb://localhost:27017/flats-db')

            await Promise.all([User.deleteMany(), Apartment.deleteMany()])

            const admin = new User({ name: 'Admin', email: 'admin@flats.com', password: '123123123' })
            const admin2 = new User({ name: 'Admin 2', email: 'admin2@flats.com', password: '123123123' })

            await Promise.all([admin.save(), admin2.save()])

            // const apartment = new Apartment({ 
            //     user: admin.id, 
            //     address: 'Sants, Barcelona',
            //     images:[],
            //     title: 'My apartment',
            //     descrption:'apartment in the heart of Sants'
            // })

            // await apartment.save()

            await disconnect()
        } catch (error) {
            console.error(error)
        }
    })()