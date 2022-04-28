function Sticker(){
    Component.call(this, `<div class="Sticker">
        <form class="Sticker_form">
            <textarea name="text"></textarea>
            <button>Save</button>
        </form>
        </div>`)
    }

    chainPrototypes(Componente, Home)

    Sticker.prototype.onClose = function(callback){
        const close = this.container.querySelector('button')

        close.addEventListener('click', function(){
            callback()
        })
    }