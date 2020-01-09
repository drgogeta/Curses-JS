import "./App.scss"
import React from "react"

import Header from "../components/Header/Header"
import Search from "../components/Search/Search"
import Footer from "../components/Footer/Footer"
import Categories from "../components/Categories/Categories"
import Carousel from "../components/Carousel/Carousel"
import Item from "../components/Item/Item"

const App = () => (
    <div className="app">
        <Header />
        <Search />
        <Categories>
            <Carousel>
                <Item />
            </Carousel>
        </Categories>
        <Footer />
    </div>
)

export default App
