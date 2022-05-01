/*cadena de prototipo, donde estoy creando una funcion con los paramentros padre y hijo
donde voy hacer una unión de protipado para que el hijo apunte al prototipo del padre y a sin crear un vinculo entre padre y hijo
(és dicir,que adeás de sus proprias caracteristiscas,el hijo
también tendrá las caracteristicas del padre)
*/
function chainPrototypes(parent, child) {//function
    child.prototype = Object.create(parent.prototype)//hijo.prototipo es igual padre prototipo
    child.prototype.constructor = child//ahora estoy hijando que el hijo ahora será el constructor con las caracteristicas del padre.
}