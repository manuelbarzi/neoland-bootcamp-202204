
//it's the function works like the method every()


function customEvery(array, comparer) {//here we gave then the array(this case:numbers) and the comparer function alread created
    for (let i = 0; i < array.length; i++) {
        const result = comparer(array[i])//save in the const result the function comparer with all value of array numbers checked

        if (result === false) { //if one number of the array numbers is smaller than 1 this answer will be returned 
            return false

        }

    }

    return true //if all numbers of the array numbers is bigger than 1 this answer will be returned 
}

