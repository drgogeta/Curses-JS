import "./Home.scss"
import React, { useState, useEffect } from "react"

import Header from "../../components/Header/Header"
import Search from "../../components/Search/Search"
import Footer from "../../components/Footer/Footer"
import Categories from "../../components/Categories/Categories"
import Carousel from "../../components/Carousel/Carousel"
import Item from "../../components/Item/Item"
import UseInitialState from "../../hooks/UseInitialState"

const API = 'http://localhost:3000/initalState'

const Home = () => {
  const initalState = UseInitialState(API)
  return initalState.length === 0 ? <h1>Loading...</h1> :
    <div className="app">
      <Header />
      <Search />
      <Categories title="favorite">
        <Carousel >
          {initalState.trends ? initalState.trends.map(video => (
            <Item {...video} />
          )) : <div></div>}
        </Carousel>
      </Categories>
      <Footer />
    </div>
}

export default Home
