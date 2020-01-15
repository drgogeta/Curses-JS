import './Layout.scss'

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import React from 'react'

const Layout = ( {children} ) => (
  <div className='App'>
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout
