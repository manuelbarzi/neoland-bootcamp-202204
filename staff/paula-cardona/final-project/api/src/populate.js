require('dotenv').config()
const { connect, disconnect } = require('mongoose')
const { Product } = require('./models')

    ; (async () => {
        try {
            // await connect(process.env.TEST_MONGODB_URL)
            await connect(process.env.MONGODB_URL)

            await Product.deleteMany()

            await Promise.all([
                Product.create({ title: 'Baguette', type: Product.BLANCO }),
                Product.create({ title: 'Pan de agua', type: Product.BLANCO }),
                Product.create({ title: 'Pan gallego', type: Product.BLANCO }),
                Product.create({ title: 'Redondo de quilo', type: Product.BLANCO }),
                Product.create({ title: 'Redondo de cuarto', type: Product.BLANCO }),
                Product.create({ title: 'Redondo de medio', type: Product.BLANCO }),
                Product.create({ title: 'Pan de viena', type: Product.BLANCO }),
                Product.create({ title: 'Pan de molde', type: Product.BLANCO }),
                Product.create({ title: 'Chapata', type: Product.BLANCO }),
                Product.create({ title: 'Panecillos pequeños', type: Product.BLANCO}),
                Product.create({ title: 'Pan bretón', type: Product.BLANCO }),
    
                Product.create({ title: 'Pan integral', type: Product.INTEGRAL }),
                Product.create({ title: 'Pan medio integral', type: Product.INTEGRAL }),
                Product.create({ title: 'Pan molde integral', type: Product.INTEGRAL }),
    
                Product.create({ title: 'Pan de nueces', type: Product.VARIADADES}),
                Product.create({ title: 'Pan de espelta', type: Product.VARIADADES }),
                Product.create({ title: 'Pan de centeno', type: Product.VARIADADES }),
                Product.create({ title: 'Pan semillas de amapola', type: Product.VARIADADES }),
                Product.create({ title: 'Pan de olivas', type: Product.VARIADADES }),
                Product.create({ title: 'Pan de pasas', type: Product.VARIADADES }),
    
                Product.create({ title: 'Donut de chocolate', type: Product.BOLLERIA }),
                Product.create({ title: 'Donut', type: Product.BOLLERIA }),
                Product.create({ title: 'Magdalena', type: Product.BOLLERIA }),
                Product.create({ title: 'Ensaimada de chocolate', type: Product.BOLLERIA }),
                Product.create({ title: 'Ensaimada de crema', type: Product.BOLLERIA }),
                Product.create({ title: 'Croissant', type: Product.BOLLERIA }),
                Product.create({ title: 'Croissant de Chocolate', type: Product.BOLLERIA }),
    
                Product.create({ title: 'Barra de pan sin gluten', type: Product.SIN_GLUTEN }),
                Product.create({ title: 'Barra de medio sin gluten', type: Product.SIN_GLUTEN })
            ])

            await disconnect()
        } catch (error) {
            console.error(error)
        }
    })()
   /* de pan blanco:
    - baguette, pan de agua, pan gallego, redondo de kilo, 
    redondo de cuarto y redondo de medio (solo con que dibujes uno ya esta), 
    pan de viena, pan de molde, chapata, 
    panecillos pequeños, pan bretón
    
    integral
    -barra integral, redondo de medio integral, pan de molde integral

    de semilla
- pan de nueces, pan espelta, centero, semillas de amapola, olivas, pasas

donut xocolate y normal, madalena, ensaimada normal y crema, croissant normal i xoxo
sin gluten: barra de pan normal i barra de medio normal(asi q no hace falta q las dibujes porque las cojo del pan blanco)
    
    
    
    
    */
    