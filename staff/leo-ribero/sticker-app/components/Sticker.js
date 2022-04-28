  function Sticker(){
    Component.call(this, `<div class="Sticker">
        <form class="Sticker__form">
            <textarea name="text"></textarea>
            <button>Save</button>
        </form>
        </div>`)
    }

    chainPrototypes(Componente, Home)