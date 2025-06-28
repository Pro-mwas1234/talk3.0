import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import SettingsPage from './pages/SettingsPage'
import ProfilePage from './pages/ProfilePage'
import HomePage from './pages/HomePage'
import { axiosInstance } from './lib/axios'
import { useAuthStore } from './store/useAuthStore'
import Loader from './components/loader/Loader'
import { Toaster } from 'react-hot-toast'



const App = () => {

 
  const {authUser, checkAuth, isCheckingAuth} = useAuthStore()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  console.log(authUser);

  if(isCheckingAuth && !authUser) return(
    <div className="flex items-center justify-center h-screen">
   <Loader/>
    </div>
  )
  

  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' element={authUser ? <HomePage/> : <Navigate to="/login"/>}/>
        <Route path='/signup' element={!authUser ?<SignUpPage/> : <Navigate to="/"/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/settings' element={<SettingsPage/> }/>
        <Route path='/profile' element={authUser ? <ProfilePage/> : <Navigate to="/login"/>}/>
      </Routes>

      <Toaster/>
    </div>
  )
}

export default App