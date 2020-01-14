import "./Carousel.scss"
import React from "react"

const Carousel = ({ children }) => (
    <section className="carousel">
        <div className="carousel__container">
            { children }
        </div>
    </section>
)

export default Carousel
