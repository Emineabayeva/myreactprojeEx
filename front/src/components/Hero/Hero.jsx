import React from 'react'
import "./Hero.css"
const Hero = () => {
  return (
    <div className='silider-hero'>
 <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://preview.colorlib.com/theme/tasty/images/bg_1.jpg.webp" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://preview.colorlib.com/theme/tasty/images/bg_3.jpg.webp" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://preview.colorlib.com/theme/tasty/images/bg_3.jpg.webp" class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
    </div>
   
  )
}

export default Hero