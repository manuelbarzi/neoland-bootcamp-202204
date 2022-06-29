require('dotenv').config()

const { connect } = require('mongoose')

const { User, Clock, Job } = require('../models')


    ; (async () => {
        try {

            await connect(process.env.MONGO_URL)

            await Promise.all([User.deleteMany(), Schedule.deleteMany(), Product.deleteMany()])

            const user = await User.create({ name: 'Pepito Grillo', username: 'pepigri', email: 'pepigri@gmail.com', password: '123123123' })

            const job = await Job.create({ title: "Recoger coche", description: "Recoger a Marina", address: "C/ Escopenta nº Pum", workers: [{ id: user.id }], }),

            const data = await Promise.all([



                User.create({ role: "admin", name: "admin", password: "admin", username: "admin" }),
                User.create({ role: "worker", name: "Aitor arpa mendez", username: "zepe", password: "admin", nid: "12345678-T", email: "lile@gmail.com" }),
                User.create({ role: "worker", name: "Luz Cuesta Mogollón", username: "cuesta", password: "mogollon", nid: "099877654-T", email: "lia@gmail.com" }),


                Job.create({ title: "Taller", description: "Llevar el Coche de Marina al taller", address: "C/Me falta un tornillo Nº Rosca", workers: [{ id: user.id }], }),
                Job.create({ title: "Pepita todo lo quiere", description: "Reparar ventana entra agua", address: "C/ Salsipuedes nº ?", workers: [{ id: user.id }], }),
                Job.create({ title: "Tardas 1000 h en hacer la tarea", description: "No se guardo el archivo Word", address: "Calle Rómpete el alma", workers: [{ id: user.id }], }),
                Job.create({ title: "No cuenten con migo", description: "En clase no te la revisan", address: "Calle Rómpete el alma", workers: [{ id: user.id }], }),
                Job.create({ title: "No cuenten con migo", description: "No se guardo el archivo Word", address: "C/ Abrazamozas nº las que puedas", workers: [{ id: user.id }], }),
                Job.create({ title: "Dormir ?", description: "Aun queda Proyecto!!!", address: "Calle los cojos nº mios", workers: [{ id: user.id }], }),
                Job.create({ title: "No hay tarea", description: "BIEN", address: "Calle los saltamontes", workers: [{ id: user.id }], }),
                Job.create({ title: "T.A.R.E.A", description: "Tortura Agradable Estresante Alumnos", address: "c/ Peleas de arriba nº 100", workers: [{ id: user.id }], }),




                Clock.create({ user: user.id, job: job.id, timein: new Date, timeout: new Date }),
                Clock.create({ user: user.id, job: job.id, timein: new Date, timeout: new Date }),
                Clock.create({ user: user.id, job: job.id, timein: new Date, timeout: new Date }),
                Clock.create({ user: user.id, job: job.id, timein: new Date, timeout: new Date }),
                Clock.create({ user: user.id, job: job.id, timein: new Date, timeout: new Date }),
                Clock.create({ user: user.id, job: job.id, timein: new Date, timeout: new Date }),
                Clock.create({ user: user.id, job: job.id, timein: new Date }),
                Clock.create({ user: user.id, timein: new Date }),



            ])
        }
    })()



