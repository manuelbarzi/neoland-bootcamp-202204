function Home(){
    Component.call(this,`<div class="Home">
        <h2>Hello, Home!</h2>
        <button>+</button>
    </div>`)

    const add = this.container.querySelector('button')
    
    //add.addEventListener('click', function() {
    add.addEventListener('click', () =>{  //añade el escuchador en el click
        const sticker = new Sticker     //crea un sticker

        sticker.onClose(()=>{           //el sticker en cerrar 
            this.remove(sticker)       //en home elimina el sticker
        })

        this.add(sticker) //home añade sticker. con el arrow function no hace falta poner bind porque this ya hace referencia al sitio donde apunte    
    })

    if (sessionStorage.username) //si me devuelve el username almacenado en la sessionstorage entonces entra el if
        retrieveUser(sessionStorage.username, (error, user)=>{ //me dará el User y con el User pasare el username guardado y la callback
            if (error){ 
                alert(error.message)

                return
            }

            this.setName(user.name)   //home coloca el set name  (función linea 34)
        })
}

chainPrototypes(Component, Home)

Home.prototype.setName = function (name) {    
    const title = this.container.querySelector('h2')

    title.innerText = `Hello, ${name}!`
}

/* filtra una busqueda. query significa coincidencia en algo. 
this- contexto en el momento de ejecución
bind- te doy el contexto de ejcucion del momento*/
