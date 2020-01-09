import "./Item.scss"
import playIcon from "../../../assets/static/play-icon.png"
import plusIcon from "../../../assets/static/plus-icon.png"

import React from "react"
import {Proptypes} from "prop-types"


const Item = ({title, cover, year, contentRating, duration}) => (
  <div className="carousel-item">
    <img className="carousel-item__img" src={cover} alt={title} />
    <div className="carousel-item__details">
      <div>
        <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
        <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" />
      </div>
      <p className="carousel-item__details--title">{title}</p>
      <p className="carousel-item__details--subtitle">{`${year}, ${contentRating}, ${duration}`}</p>
    </div>
  </div>
)

Item.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.string,
}

export default Item
