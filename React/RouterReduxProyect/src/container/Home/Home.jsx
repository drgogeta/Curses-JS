import "./Home.scss"
import React from "react"
import { connect } from "react-redux"

import UseInitialState from "../../hooks/UseInitialState"

import Carousel from "../../components/Carousel/Carousel"
import Categories from "../../components/Categories/Categories"
import Search from "../../components/Search/Search"
import Item from "../../components/Item/Item"

const Home = ({ myList, trends, originals }) => (
  <React.Fragment>
    <Search />
    {myList.length >= 0 &&
      <Categories title="My List">
        <Carousel>
          {myList.map(item =>
            <Item
              key={item.id}
              {...item}
              isList
            />
          )}
        </Carousel>
      </Categories>
    }
    <Categories title="Favorite">
      <Carousel>
        {trends.map(item =>
          <Item key={item.id} {...item} />
        )}
      </Carousel>
    </Categories>
    <Categories title="Originals">
      <Carousel>
        {originals.map(item =>
          <Item key={item.id} {...item} />
        )}
      </Carousel>
    </Categories>
  </React.Fragment>
)

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  }
}
export default connect(mapStateToProps, null)(Home)
