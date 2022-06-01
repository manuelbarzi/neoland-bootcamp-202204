
//declaring variable 
const thief = '🚘'
const police = '🚔'
const taxi = '🚖'
const bus = '🚍'

//declaring variable position
let thiefPosition = 0
let policePosition = 0
let taxiPosition = 0
let busPosition = 0

//function setInterval() takes a function argument (100) that will run an infinite number of times with a given millisecond delay as the second argument. 

const interval = setInterval(() => {
    console.clear()
    //method Math.round(Math.random) *6 to get the value of position (position = position + number(result of Math.random) )
    thiefPosition += Math.round(Math.random() * 6)
    policePosition += Math.round(Math.random() * 6)
    taxiPosition += Math.round(Math.random() * 6)
    busPosition += Math.round(Math.random() * 6)

    //console.log will putout the repetition of - and ' ', the variable value and the position value
    console.log(`${'-'.repeat(100)} 🏁`)
    console.log(`${' '.repeat(thiefPosition)}${thief} (${thiefPosition})`)
    console.log(`${' '.repeat(policePosition)}${police} (${policePosition})`)
    console.log(`${' '.repeat(taxiPosition)}${taxi} (${taxiPosition})`)
    console.log(`${' '.repeat(busPosition)}${bus} (${busPosition})`)
    console.log(`${'-'.repeat(100)} 🏁`)

    //condition that will define the winers
    if(thiefPosition > 99 || policePosition > 99 || taxiPosition > 99 || busPosition > 99){  // uno o mas han pasado la linea de meta
        clearInterval(interval) // paramos la carrera
         //defining a winer
        if(thiefPosition > policePosition && thiefPosition > taxiPosition && thiefPosition > busPosition ){
            console.log(`${thief} wins!`)
        }else if (policePosition > thiefPosition && policePosition  > taxiPosition && policePosition > busPosition){
            console.log(`${police} wins!`)
        }else if (taxiPosition > thiefPosition && taxiPosition > policePosition && taxiPosition > busPosition){
            console.log(`${taxi} wins!`)
        }else if (busPosition > thiefPosition && busPosition > policePosition && busPosition > taxiPosition){
            console.log(`${bus} wins!`)
         //defining the winers
        }else if (thiefPosition === policePosition){
            console.log(`${thief} and ${police} win!`)
        } else if(thiefPosition === taxiPosition){
            console.log(`${thief} and ${taxi} win!`)
        }else if(thiefPosition === busPosition){
            console.log(`${thief} and ${bus} win!`)

        }else if(policePosition === thiefPosition){
            console.log(`${police} and ${thief} win!`)
        }else if(policePosition === taxiPosition){
            console.log(`${police} and ${taxi} win!`)
        }else if(policePosition === busPosition){
            console.log(`${police} and ${bus} win!`)

        }else if(taxiPosition === thiefPosition){
            console.log(`${taxi} and ${thief} win!`)
        }else if(taxiPosition === policePosition){
            console.log(`${taxi} and ${police} win!`)
        }else if(taxiPosition === busPosition){
            console.log(`${taxi} and ${bus} win!`)
        }
    }
}, 100)