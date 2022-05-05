'use strict'

var dog = {
    name: 'Sultan',
    
    bark() {
        debugger
        
        console.log(this.name + ': wof wof!')
    }
}

dog.bark()

var bark = dog.bark

bark()

// VM828:9 Sultan: wof wof!

// VM828:9 Uncaught TypeError: Cannot read properties of undefined (reading 'name')
//     at bark (<anonymous>:9:26)
//     at <anonymous>:17:1
// bark @ VM828:9
// (anonymous) @ VM828:17