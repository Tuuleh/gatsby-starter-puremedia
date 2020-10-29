import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import content from "../../content/hero.yaml"
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToSow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false
};

export default () => (
    <section id="hero">
        <div className="row hero-content">
            <div className="twelve columns flex-container">
                <div id="hero-slider" className="flexslider">
                    <Slider {...settings}>
                        {content.slides.map((slide, i) => {
                            return (
                                <div key={i} className="flex-caption">
                                    <h1>{slide.text}</h1>
                                    <p><a className="button stroke smoothscroll" href={slide.link}>{slide.buttonText}</a></p>
                                </div>
                            )
                        })}
                    </Slider>

                </div>
            </div>
        </div>
    </section>
)


