import React from "react"
import content from "../../content/portfolio.yaml"

export default () => (
    <section id="portfolio">
        <div className="row section-head">
            <div className="twelve columns">
                <h1>{content.title}<span>.</span></h1>
                <hr/>
                <p>{content.introduction}</p>
            </div>
        </div>
        <div className="row items">
            <div className="twelve columns">
                <div id="portfolio-wrapper" className="bgrid-fourth s-bgrid-third mob-bgrid-half group">

                    {content.entries.map((entry, i) => {
                        return (
                            <div key={i} className="bgrid item">
                                <div className="item-wrap">
                                    <a href={entry.link}>
                                        <img src={entry.image} alt={entry.altText}/>
                                        <div className="overlay"/>
                                        <div className="portfolio-item-meta">
                                            <h5>{entry.title}</h5>
                                            <p>{entry.description}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    </section>
)
