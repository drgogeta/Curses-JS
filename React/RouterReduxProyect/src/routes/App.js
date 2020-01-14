import React from 'react'
import { BrowserRouter, Router } from 'react-router-dom'

import Home from '../container/Home/Home'
import Login from '../container/Login/Login'

const App = () => (
    <BrowserRouter>
        <Router exact path='/' component={Home}/>
        <Router exact path='/login' component={Login}/>
    </BrowserRouter>
)

export default App
