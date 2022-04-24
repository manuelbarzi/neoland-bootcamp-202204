Fakay.prototype.every = function every(comparer) {//here we gave then the this(this case:numbers) and the comparer function alread created
    for (let i = 0; i < this.length; i++) {
        const result = comparer(this[i])//save in the const result the function comparer with all value of this numbers checked

        if (result === false) { //if one number of the this numbers is smaller than 1 this answer will be returned 
            return false

        }

    }

    return true //if all numbers of the this numbers is bigger than 1 this answer will be returned 
}

