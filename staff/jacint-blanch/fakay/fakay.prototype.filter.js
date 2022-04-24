
// Fakay.prototype.filter = function(callback){

//     // let filtered = []

//     for(let i = 0; i <= this.length; i++){
//         // const total = array[i]
//         if (callback(a[i])) {  

//             filtered[filtered.length] = this[i]
//         }
//     }

//     return filtered


// }

   
Fakay.prototype.filter = function(callback){

    let filtered = new Array()

    for(let i = 0; i <= this.length; i++){

        if (callback(this[i])) {  
            filtered.push(this[i])
        }
    }

    return filtered

}
