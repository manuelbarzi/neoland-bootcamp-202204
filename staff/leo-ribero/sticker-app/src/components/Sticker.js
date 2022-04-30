  function Sticker(){
    Component.call(this, `<div class="Sticker">
        <button>X</button>
        <form class="Sticker__form">
            <textarea name="text"></textarea>
            <button>Save</button>
        </form>
        </div>`)
        
        // Thu 28 Apr 1309
        const form = this.container.querySelector('form')

        form.addEventListener('submit', event => {
            //para que no se dispare el formulario solo
            event.preventDefault()

            //ahora recogerá del formulario el text
            const text = form.text.value

            //y ahora necesitamos el usuario. Para ello usamoes el sessionStorage. Nos vamos al login que manejamos en index 13:11
            // a buscar donde este authenticateUser
            // Thu 28 april 13:12, ya se ha cargado el usuario en index.js con sessionStorage y podemos hacer la linea siguiente:

            createNote(sessionStorage.username, text, error => {
                //  un error message no es muy elegante pero por ahora nos vale
                if (error) {
                    alert(error.message)

                    return

                }
                
                alert('Sticker saved')
            })

        })
    } 

    chainPrototypes(Component, Sticker)

    //hacemos el closer del onClose  
    Sticker.prototype.onClose = function(callback){
        const close = this.container.querySelector('button')

        close.addEventListener('click', function(){
            callback() 
               // el callback que me dicen que tengo que llamar cuando hago close
        })
    }