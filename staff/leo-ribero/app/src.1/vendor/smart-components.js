// Nuestra libreria. La ponemos en "vendor" que es donde se suelen poner las librerias externas

console.log('%cSmart Components v1', 'font-size: 36px; background: linear-gradient(to right, #30CFD0 0%, #330867 100%); color: white;')

function Component(template) {
    const temp = document.createElement('div')
    // Usamos un div temporal porque es la forma en que funciona con un primer div vacio

    temp.innerHTML = template
    // en este caso la función Component recibirá en ese argumento que llamamos "template" que basicamente es un string aunque tenga estructura html

    this.container = temp.firstChild
    // si he entendido bien, ahora no esta construido, container no esta aún definido y se definirá después
}





///////////////////////////////////////////////
// console.log('%cSmart Components v1', 'font-size: 36px; background: linear-gradient(to right, #30CFD0 0%, #330867 100%); color: white;')

// function Component(template) {
//     const temp = document.createElement('div')

//     temp.innerHTML = template

//     this.container = temp.firstChild
// }