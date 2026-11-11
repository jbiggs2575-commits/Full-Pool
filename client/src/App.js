import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import Navbars from './components/Navbars/Navbars'
import Signin from './pages/Signin/Signin'
import Profile from './pages/Profile/Profile'
import CreateAccount from './pages/CreateAccount/CreateAccount'
import EditAccount from './pages/EditAccount/EditAccount'
import DeleteAccount from './pages/DeleteAccount/DeleteAccount'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import Footer from './pages/Footer/Footer'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    const toolProps = { user, setUser, navigate }

    return (
        <>
            <Navbars toolProps={toolProps} />

            <Routes>
                <Route path='/' element={<Home toolProps={toolProps} />} />
                <Route path='/signin' element={<Signin toolProps={toolProps} />} />
                <Route path='/profile' element={<Profile toolProps={toolProps} />} />
                <Route path='/createAccount' element={<CreateAccount toolProps={toolProps} />} />
                <Route path='/editAccount' element={<EditAccount toolProps={toolProps} />} />
                <Route path='/deleteAccount' element={<DeleteAccount toolProps={toolProps} />} />
                <Route path='/products' element={<Products />} />
            </Routes>

            <Footer />
        </>
    )
}
export default App
