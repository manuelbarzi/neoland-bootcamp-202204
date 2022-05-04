class ChangeName extends Component {
    constructor() {
        super(`<div class="ChangeName">
        <form class="Container">
            <input type="text" name="newName" placeholder="New name">
            <button>Save</button>
        </form>
    </div>`)
    
    this.container.querySelector('form').addEventListener('submit', event => {
        event.preventDefault()
    
        // const password = event.target.password.value
        const name = event.target.name.value
        const newName = event.target.newName.value
    
        updateUserName(sessionStorage.username, name, newName, error => {
            if (error) {
                alert(error.message)
    
                return
            }
    
            alert('Name saved')
        })
    
    })

    }
}


// function ChangeName() {
//     Component.call(this, `<div class="ChangeName">
//         <form class="Container">
//             <input type="text" name="newName" placeholder="New name">
//             <button>Save</button>
//         </form>
//     </div>`)



// // Tue 3 May 1230 similar to this
// this.container.querySelector('form').addEventListener('submit', event => {
//     event.preventDefault()

//     // const password = event.target.password.value
//     const name = event.target.name.value
//     const newName = event.target.newName.value

//     updateUserName(sessionStorage.username, name, newName, error => {
//         if (error) {
//             alert(error.message)

//             return
//         }

//         alert('Name saved')
//     })

// })




// }




// chainPrototypes(Component, ChangeName)  