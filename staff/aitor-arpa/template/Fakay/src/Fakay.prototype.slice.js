Fakay.prototype.slice = function (str = 0, fin) {
    q = new Fakay()
    if (str < 0)                       
        str = this.length + inic  
    if (fin === undefined)                      
        fin = this.length 
    if (fin < 0)
        fin = this.length + fin
        q.length = -1
    for (i = str; i < fin; i++) {
        q[i - str] = this[i]
        q.length++

    } return q

}

