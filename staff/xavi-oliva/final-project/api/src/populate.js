const { connect, disconnect } = require('mongoose')
const { User, Flat } = require('./models')

    ; (async () => {
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
                    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/243414181.jpg?k=e9419006455df6dfb18938a0fefa9823128a2d10614f744182fd82728280464a&o=&hp=1',
                    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/243413325.jpg?k=d1b59790cf3a09c4f6e44cbddfc659c988a289b52451fcceb6cd60af74cdbee5&o=&hp=1'
                ],
                title: 'Lujoso ático con vistas',
                description: 'Se encuentra a 2,5 km de Nova Icaria y ofrece alojamiento con aire acondicionado, balcón y WiFi gratuita. Dispone de cocina con lavavajillas y microondas, TV de pantalla plana vía satélite, utensilios de planchado, escritorio y zona de estar con sofá. El baño incluye bidet, secador de pelo y artículos de aseo gratuitos. La playa de Somorrostro y Bogatell se encuentran a 2,6 km del apartamento.'
            })
            const flat2 = new Flat({
                user: admin.id,
                address: 'Carrer de Sants, Sants-Montjuïc, Barcelona',
                images: [
                    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/14259657.jpg?k=61c5e390b817cd25f760b32d37d6da20994973d1795d9a555ba04abcb3a4ceac&o=&hp=1',
                    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/15686789.jpg?k=7448a02d4d90e1e873fc735f8249a71d26565003be85fb26413e6cae194333ab&o=&hp=1'
                ],
                title: 'Agradable entresuelo',
                description: 'Alojamiento elegante con aire acondicionado, situado a solo 5 minutos a pie del estadio Camp Nou del FC Barcelona. Dispone de WiFi gratuita de alta velocidad. Luminoso e incluye zona de cocina bien equipada y TV de pantalla plana con canales vía satélite. Presenta una decoración moderna y funcional y ofrece vistas a la calle. La zona de cocina dispone de nevera, microondas y lavavajillas. Hay caja fuerte disponible por un suplemento.'
            })
            const flat3 = new Flat({
                user: admin.id,
                address: 'Sarrià-Sant Gervasi, Barcelona',
                images: [
                    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/151191009.jpg?k=32d7f7c514266e6c179efc7c48cdc5b6a7cafd72142d08ff9c38743ec1eb2695&o=&hp=1',
                    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/151362300.jpg?k=1d36a3a8031f1752fc1e84fa090f1e94a5db5918d488654b48ad4e26b5145daf&o=&hp=1'
                ],
                title: 'Confortable piso en Sants',
                description: 'Moderno establecimiento para estudiantes y personal académico en estancia de trabajo ofrece una terraza en la azotea y vistas fantásticas a Barcelona. Las habitaciones están equipadas con aire acondicionado, WiFi gratuita, nevera pequeña y baño privado.'
            })
            const flat4 = new Flat({
                user: admin.id,
                address: 'Sants-Hostafrancs, Barcelona',
                images: [
                    'https://a0.muscache.com/im/pictures/miso/Hosting-650435235719387712/original/dadf5722-bef7-4eb0-8438-02ab588b1ed8.jpeg?im_w=720',
                    'https://a0.muscache.com/im/pictures/miso/Hosting-650435235719387712/original/a9df547f-c112-4045-bcb4-ece03152ad54.jpeg?im_w=720'
                ],
                title: 'Magnifico apartamento para 4 personas',
                description: 'Dispone de dos dormitorios dobles, una cocina totalmente equipada con lavadora, nevera, horno, microondas, tostadora, hervidor de agua y una amplia gama de utensilios de cocina. El salón tiene un sofá, un televisor de pantalla plana y una conexión Wi-Fi gratuita.'
            })

            await Promise.all([flat1.save(), flat2.save(), flat3.save(), flat4.save()])

            await disconnect()
        } catch (error) {
            console.error(error)
        }
    })()