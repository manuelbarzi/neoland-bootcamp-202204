const { useState } = React

function App () {
     
    const [view, setVuew] = useState( sessionStorage.token? 'home' : 'login')
    const [feedeback, setFeedeback] = useState ({ level: 'error', message: ''})
    /* <  ---------      Manejador de Vistas  -----------  > */
    const handleUserRegistered= () => handleLoginNavigation ()
    
    const handleUserLoggedIn = () => setState({ view: 'home' })
 
    const handleRegisterNavigation = () => setState({ view:'register' })

    const handleLoginNavigation = () => setState({ view:'login' })
    
    const handelUserLoggedOut = () => handleLoginNavigation()

    const handleFeedback = feedback => setFeedback (feedback)

    const handleFeedbackTiemout = () => setFeedback(null)
    

    


    /* <  ---------     Pintado con Condiciones para Mostrar Vistas   -----------  > */
  
        return  <Context.Provider valuer ={{handleFeedback}}>
        
        <div className="App">
            
            {state.view === 'login' && <Login onUserLoggedIn={handleUserLoggedIn} onRegisterLinkClicked={handleRegisterNavigation} />}
            {state.view === 'register' && <Register onUserRegistered={handleUserRegistered} onLoginLinkClicked={handleLoginNavigation} />}
            {state.view === 'home' && <Home  onUserLoggedOut={handelUserLoggedOut}  onUserGoProfile={handelUserProfile} onUserGoHome={handelUserGoHome}/>}
         
            </div>
            </Context.Provider>
    }


