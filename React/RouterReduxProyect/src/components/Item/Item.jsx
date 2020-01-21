import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import "./Item.scss"
import playIcon from "../../../assets/static/play-icon.png"
import plusIcon from "../../../assets/static/plus-icon.png"

import { setFavorite, daleteFavorite } from '../../actions'

const Item = (props) => {
  const { id, cover, title, year, contentRating, duration, isList } = props;
  const handleFavorite = () => {
    props.setFavorite({
      id, cover, title, year, contentRating, duration
    })
  }

  const handleDeleteFavorite = (id) => {
    props.daleteFavorite(id)
  }

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <img
            className="carousel-item__details--img"
            src={playIcon}
            alt="Play Icon"
          />
          {isList ?
            <img
              className="carousel-item__details--img"
              src="https://static.platzi.com/media/public/uploads/remove-icon_a56b8107-2c02-49ed-bead-308031b0dd76.png"
              alt="Plus Icon"
              onClick={() => handleDeleteFavorite(id)}
          />:
          <img
            className="carousel-item__details--img"
            src={plusIcon}
            alt="Plus Icon"
            onClick={handleFavorite}
          />
          }
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">{`${year}, ${contentRating}, ${duration}`}</p>
      </div>
    </div>
  )
}

Item.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
}

const mapDispatchToProps = {
  setFavorite,
  daleteFavorite
}
export default connect(null, mapDispatchToProps)(Item)
