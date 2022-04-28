  function Sticker(){
    Component.call(this, `<div class="Sticker">
        <button>X</button>
        <form class="Sticker__form">
            <textarea name="text"></textarea>
            <button>Save</button>
        </form>
        </div>`)
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