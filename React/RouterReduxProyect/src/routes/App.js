import React from 'react'
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom'

import Home from '../container/Home/Home'
import Login from '../container/Login/Login'
import Register from '../container/Register/Register'
import NotFound from '../container/NotFound/NotFound'
import Layout from '../components/layout/Layout'

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App
