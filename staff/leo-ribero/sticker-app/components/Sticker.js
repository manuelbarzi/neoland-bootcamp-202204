function Sticker(){
    Component.call(this, `<div class="Sticker">
        <form>
            <textarea name="text">
            <button>Save</button>
        </form>
        </div>`)
    }

    chainPrototypes(Componente, Home)