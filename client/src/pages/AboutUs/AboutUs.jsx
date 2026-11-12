import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <h1>About Us</h1>

      <p>We are a team dedicated to providing the best pool products and services. Our mission is to ensure that every customer has a great experience and receives top-quality products.</p>
      <p>Our team is committed to continuous improvement and staying updated with the latest industry trends to offer the best solutions for our customers.</p>
      <p>We believe in building strong relationships with our clients and providing exceptional customer service to ensure long-term satisfaction and trust.</p>
      <p>Our vision is to be the leading provider of pool products and services, recognized for our commitment to quality, innovation, and customer satisfaction.</p>
      <p>We are committed to maintaining the highest standards of professionalism and integrity in all our interactions with customers and partners.</p>
      <p>Our team is always striving to improve and innovate, ensuring that we provide the best possible products and services to our customers.</p>
      <p>We are committed to sustainability and responsible business practices, aiming to make a positive impact on the environment and the communities we serve.</p>   
      <p>Our team is dedicated to providing education and resources to help our customers make informed decisions about their pool needs, ensuring they get the most value from our products and services.</p>
      <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
        <ol class="carousel-indicators">
            <li
                data-bs-target="#carouselId"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="First slide"
            ></li>
            <li
                data-bs-target="#carouselId"
                data-bs-slide-to="1"
                aria-label="Second slide"
            ></li>
            <li
                data-bs-target="#carouselId"
                data-bs-slide-to="2"
                aria-label="Third slide"
            ></li>
        </ol>
        <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
                <img
                    src="assets/poolSign.png"
                    class="w-100 d-block"
                    alt="First slide"
                />
                {/* <div class="carousel-caption d-none d-md-block">
                    <h3>Title</h3>
                    <p>Description</p>
                </div> */}
            </div>
            <div class="carousel-item">
                <img
                    src="assets/Pool.jpeg"
                    class="w-100 d-block"
                    alt="Second slide"
                />
                <div class="carousel-caption d-none d-md-block">
                    <h3>Title</h3>
                    <p>Description</p>
                </div>
            </div>
            <div class="carousel-item">
                <img
                    src="holder.js/900x500/auto/#666:#444/text:Third slide"
                    class="w-100 d-block"
                    alt="Third slide"
                />
                <div class="carousel-caption d-none d-md-block">
                    <h3>Title</h3>
                    <p>Description</p>
                </div>
            </div>
        </div>
        <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="prev"
        >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="next"
        >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
      </div>
      
    </div>
  )
}

export default AboutUs