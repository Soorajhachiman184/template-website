/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Homepage = () => {

  const sliderRef = useRef<Slider | null>(null);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  return (
    
    <div>
      {/* Basic */}
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      {/* Mobile Metas */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {/* Site Metas */}
      <meta name="keywords" />
      <meta name="description" />
      <meta name="author" />
      <title>Electrochip</title>
      {/* slider stylesheet */}
      <div className="hero_area">
        {/* header section strats */}
        <header className="header_section">
          <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <a className="navbar-brand" href="index.html">
                <img src="images/logo.png" />
                <span>Electr</span>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="s-1"> </span>
                <span className="s-2"> </span>
                <span className="s-3"> </span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                  <ul className="navbar-nav  ">
                    <li className="nav-item active">
                      <a className="nav-link" href="index.html">
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="about.html">
                        {" "}
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="service.html">
                        {" "}
                        Service{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="blog.html">
                        {" "}
                        Blog{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">
                        Contact{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
        {/* end header section */}
        {/* slider section */}
        <section className=" slider_section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 ">
                <div className="detail_box">
                  <h1>
                    Electrical <br />
                    Service <br />
                    Providers
                  </h1>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem
                  </p>
                  <a href="" className="">
                    Contact Us
                  </a>
                </div>
              </div>

              <div className="col-lg-5 col-md-6 offset-lg-1">
      <div className="img_content">
      <Slider ref={sliderRef} {...settings}>
        <div>
          <img src="/images/slider-img.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="/images/slider-img.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="/images/slider-img.jpg" alt="Slide 3" />
        </div>
      </Slider>
      <a
        className="carousel-control-prev"
        role="button"
        onClick={handlePrev}
      >
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        role="button"
        onClick={handleNext}
      >
        <span className="sr-only">Next</span>
      </a>
      </div>
    </div>
            </div>
          </div>
        </section>
        {/* end slider section */}
      </div>
      {/* service section */}
      <section className="service_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Our Services</h2>
            <img src="images/plug.png" alt="" />
          </div>
          <div className="service_container">
            <div className="box">
              <div className="img-box">
                <img src="images/s1.png" className="img1" alt="" />
              </div>
              <div className="detail-box">
                <h5>Equipment installation</h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available,
                </p>
              </div>
            </div>
            <div className="box active">
              <div className="img-box">
                <img src="images/s2.png" className="img1" alt="" />
              </div>
              <div className="detail-box">
                <h5>Windmill Energy</h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available,
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/s3.png" className="img1" alt="" />
              </div>
              <div className="detail-box">
                <h5>Equipment Maintenance</h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available,
                </p>
              </div>
            </div>
            <div className="box ">
              <div className="img-box">
                <img src="images/s4.png" className="img1" alt="" />
              </div>
              <div className="detail-box">
                <h5>Offshore Engineering</h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available,
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/s5.png" className="img1" alt="" />
              </div>
              <div className="detail-box">
                <h5>Electrical Wiring</h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available,
                </p>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="">Read More</a>
          </div>
        </div>
      </section>
      {/* end service section */}
      {/* about section */}
      <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Us</h2>
                  <img src="images/plug.png" alt="" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit
                </p>
                <a href="">Read More</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img_container">
                <div className="img-box b1">
                  <img src="images/about-img1.jpg" alt="" />
                </div>
                <div className="img-box b2">
                  <img src="images/about-img2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end about section */}
      {/* blog section */}
      <section className="blog_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Blog</h2>
            <img src="images/plug.png" alt="" />
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="box">
                <div className="img-box">
                  <img src="images/blog1.jpg" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Blog Title Goes Here</h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box">
                <div className="img-box">
                  <img src="images/blog2.jpg" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Blog Title Goes Here</h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end blog section */}
      {/* contact section */}
      <section className="contact_section layout_padding">
        <div className="container ">
          <div className="heading_container">
            <h2>Contact Us</h2>
            <img src="images/plug.png" alt="" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <form>
                <div>
                  <input type="text" placeholder="Name" />
                </div>
                <div>
                  <input type="email" placeholder="Email" />
                </div>
                <div>
                  <input type="text" placeholder="Phone Number" />
                </div>
                <div>
                  <input
                    type="text"
                    className="message-box"
                    placeholder="Message"
                  />
                </div>
                <div className="d-flex ">
                  <button>SEND</button>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div className="map_container">
                <div className="map-responsive">
                  <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                    width={600}
                    height={300}
                    frameBorder={0}
                    style={{ border: 0, width: "100%", height: "100%" }}
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end contact section */}
      {/* info section */}
      <section className="info_section layout_padding">
        <div className="container">
          <div className="info_contact">
            <div className="row">
              <div className="col-md-4">
                <a href="">
                  <img src="images/location-white.png" alt="" />
                  <span>Passages of Lorem Ipsum available</span>
                </a>
              </div>
              <div className="col-md-4">
                <a href="">
                  <img src="images/telephone-white.png" alt="" />
                  <span>Call : +012334567890</span>
                </a>
              </div>
              <div className="col-md-4">
                <a href="">
                  <img src="images/envelope-white.png" alt="" />
                  <span>demo@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-lg-9">
              <div className="info_form">
                <form>
                  <input type="text" placeholder="Enter your email" />
                  <button>subscribe</button>
                </form>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="info_social">
                <div>
                  <a href="">
                    <img src="images/fb.png" alt="" />
                  </a>
                </div>
                <div>
                  <a href="">
                    <img src="images/twitter.png" alt="" />
                  </a>
                </div>
                <div>
                  <a href="">
                    <img src="images/linkedin.png" alt="" />
                  </a>
                </div>
                <div>
                  <a href="">
                    <img src="images/instagram.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end info section */}
      {/* footer section */}
      <footer className="container-fluid footer_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-9 mx-auto">
              <p>
                © 2019 All Rights Reserved By
                <a href="https://html.design/">Free Html Templates</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* footer section */}
    </div>
  );
};
export default Homepage;
