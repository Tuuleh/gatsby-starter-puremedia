import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import content from "../../content/hero.yaml"


export default () => (
    <section id="hero">
        <div className="row hero-content">
            <div className="twelve columns flex-container">

                <div className="hero-slider flexslider">
                    <ul className="slides">
                        <li>
                            <div className="flex-caption">
                                <h1>{content.headline1}</h1>
                                <AnchorLink to="/#about" title="More about us">
                                    <span>More about us</span>
                                </AnchorLink>
                                // <p><a className="button stroke smoothscroll" href="#about">More about us</a></p>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </section>
)


