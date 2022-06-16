const { connect, disconnect } = require('mongoose')
const { Product } = require('./models')

    ; (async () => {
        try {
            await connect(process.env.TEST_MONGODB_URL)

            await Product.deleteMany()

            const baguette = new Product({ title: 'Baguette', description: 'Baguette', type:0 })
            const panDeAgua = new Product({ title: 'Pan de agua', description: 'Pan de agua', type: 0 })
            const panGallego = new Product({ title: 'Pan gallego', description: 'Pan gallego', type: 0 })
            const redondoQuilo = new Product({ title: 'Redondo de quilo', description: 'Redondo de quilo', type: 0 })
            const rondoCuarto = new Product({ title: 'Redondo de cuarto', description: 'Redondo de cuarto', type: 0 })
            const redondoMedio = new Product({ title: 'Redondo de medio', description: 'Redondo de medio', type: 0 })
            const panViena= new Product({ title: 'Pan de viena', description: 'Pan de viena', type: 0 })
            const panMolde = new Product({ title: 'Pan de molde', description: 'Pan de molde', type: 0 })
            const chapata = new Product({ title: 'Chapata', description: 'Chapata', type: 0 })
            const panecillosPequeños = new Product({ title: 'Panecillos pequeños', description: 'Panecillos pequeños', type: 0 })
            const panBretón = new Product({ title: 'Pan bretón', description: 'Pan bretón', type: 0 })

            const panIntegral = new Product({ title: 'Pan integral', description: 'Pan integral', type: 1 })
            const panMedioIntegral = new Product({ title: 'Pan medio integral', description: 'Pan medio integral', type: 1 })
            const panMoldeIntegral = new Product({ title: 'Pan molde integral', description: 'Pan molde integral', type: 1 })

            const panDeNueces = new Product({ title: 'Pan de nueces', description: 'Pan de nueces', type: 2 })
            const panEspelta = new Product({ title: 'Pan de espelta', description: 'Pan de espelta', type: 2 })
            const panCenteno = new Product({ title: 'Pan de centeno', description: 'Pan de centeno', type: 2 })
            const panSemillasAmapola= new Product({ title: 'Pan semillas de amapola', description: 'Pan semillas de amapola', type: 2 })
            const panOlivas= new Product({ title: 'Pan de olivas', description: 'Pan de olivas', type: 2 })
            const panPasas= new Product({ title: 'Pan de pasas', description: 'Pan de pasas', type: 2 })

            const donutXoco= new Product({ title: 'Donut de chocolate', description: 'Donut de chocolate', type: 3 })
            const donut= new Product({ title: 'Donut', description: 'Donut', type: 3 })
            const madalena= new Product({ title: 'Magdalena', description: 'Magdalena', type: 3 })
            const EnsaimadaXoco= new Product({ title: 'Ensaimada de chocolate', description: 'Ensaimada chocolate', type: 3 })
            const EnsaimadaCrema= new Product({ title: 'Ensaimada de crema', description: 'Ensaimada de crema', type: 3 })
            const croissant= new Product({ title: 'Croissant', description: 'Croissant', type: 3 })
            const croissantXoco= new Product({ title: 'Croissant de Chocolate', description: 'Croissant de Chocolate', type: 3 })

            const panSinGluten= new Product({ title: 'Barra de pan sin gluten', description: 'Pan sin gluten', type: 4 })
            const panSinGlutenMedio= new Product({ title: 'Barra de medio sin gluten', description: 'Pan sin gluten', type: 4 })

            /*FALTA GUARDAAAAAAAR*/

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
    