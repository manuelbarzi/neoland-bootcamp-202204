Fakay.prototype.includes = function includes(element, index = 0 ) {//parameters: object to check if it have the element we're looking and the starting from index =0

    for (let i = index; this.length; i++) {//a loop inside of array
        if (this[i] === element) {//check if the array have the element that we're looking

            return true //return true if it's found
        }

        return false// return false if is not found


    }
}