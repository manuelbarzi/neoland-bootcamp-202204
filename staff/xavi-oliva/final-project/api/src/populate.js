const { connect, disconnect } = require('mongoose')
const { User, Flat, Booking } = require('./models')

    ; const { user } = require('./models/schemas');
(async () => {
    try {
        await connect('mongodb://localhost:27017/flats-db')

        await Promise.all([User.deleteMany(), Flat.deleteMany()])

        const admin = new User({ name: 'Admin', email: 'admin@flats.com', password: '123123123' })
        const admin2 = new User({ name: 'Admin 2', email: 'admin2@flats.com', password: '123123123' })

        await Promise.all([admin.save(), admin2.save()])

        const flat1 = new Flat({
            user: admin.id,
            address: 'Carrer de València, Eixample, Barcelona',
            images: [
                'https://i.imgur.com/pkgCtei.jpg'
            ],
            title: 'Lujoso ático con vistas',
            description: 'Se encuentra a 2,5 km de Nova Icaria y ofrece alojamiento con aire acondicionado, balcón y WiFi gratuita. Dispone de cocina con lavavajillas y microondas, TV de pantalla plana vía satélite, utensilios de planchado, escritorio y zona de estar con sofá. El baño incluye bidet, secador de pelo y artículos de aseo gratuitos. La playa de Somorrostro y Bogatell se encuentran a 2,6 km del apartamento.'
        })
        const flat2 = new Flat({
            user: admin.id,
            address: 'Carrer de Sants, Sants-Montjuïc, Barcelona',
            images: [
                'https://i.imgur.com/YmiKZfN.jpg'
            ],
            title: 'Agradable entresuelo',
            description: 'Alojamiento elegante con aire acondicionado, situado a solo 5 minutos a pie del estadio Camp Nou del FC Barcelona. Dispone de WiFi gratuita de alta velocidad. Luminoso e incluye zona de cocina bien equipada y TV de pantalla plana con canales vía satélite. Presenta una decoración moderna y funcional y ofrece vistas a la calle. La zona de cocina dispone de nevera, microondas y lavavajillas. Hay caja fuerte disponible por un suplemento.'
        })
        const flat3 = new Flat({
            user: admin.id,
            address: 'Sarrià-Sant Gervasi, Barcelona',
            images: [
                'https://i.imgur.com/UD2bYaS.jpg'
            ],
            title: 'Confortable piso en Sants',
            description: 'Moderno establecimiento para estudiantes y personal académico en estancia de trabajo ofrece una terraza en la azotea y vistas fantásticas a Barcelona. Las habitaciones están equipadas con aire acondicionado, WiFi gratuita, nevera pequeña y baño privado.'
        })
        const flat4 = new Flat({
            user: admin.id,
            address: 'Sants-Hostafrancs, Barcelona',
            images: [
                'https://i.imgur.com/EoVLToQ.jpg'
            ],
            title: 'Magnifico apartamento para 4 personas',
            description: 'Dispone de dos dormitorios dobles, una cocina totalmente equipada con lavadora, nevera, horno, microondas, tostadora, hervidor de agua y una amplia gama de utensilios de cocina. El salón tiene un sofá, un televisor de pantalla plana y una conexión Wi-Fi gratuita.'
        })

        await Promise.all([flat1.save(), flat2.save(), flat3.save(), flat4.save()])

        const booking1 = new Booking({
            user: admin.id,
            flat: flat1.id,
            name: 'Pedro',
            phone: '+34675421869',
            email: 'pedro@email.com',
            text: 'Familia con dos hijos',
            from: '01/07/2022',
            to: '10/07/2022'
        })
        const booking2 = new Booking({
            user: admin.id,
            flat: flat1.id,
            name: 'María',
            phone: '+34614258369',
            email: 'maria@email.com',
            text: 'Reparar persiana salón',
            from: '16/07/2022',
            to: '18/07/2022'
        })

        await Promise.all([booking1.save(), booking2.save()])

        await disconnect()
    } catch (error) {
        console.error(error)
    }
})()