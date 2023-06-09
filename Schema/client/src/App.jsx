import React from 'react'
import Navbar from './navbar/Navbar'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './Auth/Login'
import Signup from './Auth/Signup'
import Home from './Home/Home'
import Profile from './Profile/Profile'

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/Signup' element={<Signup/>} />
            <Route path='/Profile' element={<Profile/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App