console.log('%cSmart Polyfills v1.0', 'font-size: 36px; background: linear-gradient(to right, #30CFD0 0%, #330867 100%); color: white;')

if (typeof Node.prototype.hasChild === 'undefined')
    Node.prototype.hasChild = function (node) {
        for (let i = 0; i < this.childNodes.length; i++)
            if (this.childNodes[i].isSameNode(node))
                return true

        return false
    }

    /*añadir un método a un prototipo si existe el hueco.
    por ejemplo un ordenador del 2009 quiza no puede arrancar los métodos 
    que les ponemos ahora*/
