import "./Carousel.scss"
import React from "react"

const Carousel = ({ shildren }) => (
    <section class="carousel">
        <div class="carousel__container">
            {shildren}
        </div>
    </section>
)

export default Carousel