// polyfi : transcribir metodos modernos al prototipo array para que los pueda incluir
// en caso de usar navegadores viejos
// incluir solo los huecos que hayan, si existe lo relleno

// en este caso añadimos el metodo hasChild (inventado por nosotros), simulando un metodo real que no existiese

if (typeof Node.prototype.hasChild === 'undefined')
    Node.prototype.hasChild = function (node) {
        for (let i = 0; i < this.childNodes.length; i++)
            if (this.childNodes[i].isSameNode(node))
                return true

        return false
    }