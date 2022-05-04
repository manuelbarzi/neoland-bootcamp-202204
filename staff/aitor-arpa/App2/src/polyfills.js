if (typeof Node.prototype.hasChild === 'undefined')
    Node.prototype.hasChild = function (node) {
        for (let i = 0; i < this.childNodes.length; i++)
            if (this.childNodes[i].isSameNode(node))
                return true

        return false
    }