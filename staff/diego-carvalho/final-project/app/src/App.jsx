import { useEffect, useState } from 'react'
import './App.sass'
import { useNavigate, Routes, Route } from 'react-router-dom'
import { isJwtValid } from 'validators'
import { RegisterPage, LoginPage } from './pages'

function App() {

  // const [feedback, setFeedback] = useState(null)
  // const navigate = useNavigate()

  // useEffect(() => {
  //   if (isJwtValid(sessionStorage.token))
  //     navigate('/')
  //   else
  //     handleUserLogout()
  // }, [])


  // const handleUserRegistered = () => handleLoginNavigation()

  // const handleUserLoggedIn = () => navigate('/')

  // const handleRegisterNavigation = () => navigate('/register')

  // const handleLoginNavigation = () => navigate('/login')

  // const handleUserLogout = () => {
  //   delete sessionStorage.token

  //   handleLoginNavigation()
  // }

  // const handleFeedback = feedback => setFeedback(feedback)

  // const handleFeedbackTimeout = () => setFeedback(null)

  return <>
    {/* <Context.Provider value={{ handleFeedback }}> */}
      <div className="App Container">
        <Routes>
          <Route path="/*" element={<h1>home page</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
        {/* {feedback && <Feedback level={feedback.level} message={feedback.message} onTimeout={handleFeedbackTimeout} />} */}
      </div>
    {/* </Context.Provider> */}
  </>
}

export default App
