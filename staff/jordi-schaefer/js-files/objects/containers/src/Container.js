// cuando algo se usa para construir se le pone mayuscula

function Container(width, height, length) {
    this.width = width
    this.height = height
    this.length = length
    this.status = '🔐'
}

Container.prototype.open = function () {
    this.status = "🔓"
}

Container.prototype.close = function () {
    this.status = "🔐"
}

Container.prototype.doble = function () {
    this.width = this.width * 2
    this.height = this.height * 2
    this.length = this.length * 2
}



