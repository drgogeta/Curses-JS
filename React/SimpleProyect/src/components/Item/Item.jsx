import "./Item.scss";
import React from "react"

const Item = props => {
    const {title, subtitle, img} = props
    return (
        <div className="carousel-item">
            <img className="carousel-item__img" src={img} alt="" />
            <div className="carousel-item__details">
                <div>
                    <img className="carousel-item__details--img" src="../assets/play-icon.png" alt="Play Icon" />
                    <img className="carousel-item__details--img" src="../assets/plus-icon.png" alt="Plus Icon" />
                </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="x -item__details--subtitle">{subtitle}</p>
            </div>
        </div>
    )
}

export default Item