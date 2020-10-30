import React from "react"
import content from "../../content/services.yaml"

export default () => (
    <section id="services">
        <div className="row section-head">
            <div className="twelve columns">
                <h1>{content.title}<span>.</span></h1>
                <hr/>
                <p>{content.introduction}</p>
            </div>
        </div>
        <div className="row">
            <div className="twelve columns">
                <div className="service-list bgrid-third s-bgrid-half mob-bgrid-whole">
                    {content.entries.map((entry, i) => {
                        return(
                            <div key={i} className="bgrid">
                                <div className="icon-part">
                                    <span className={entry.icon}/>
                                </div>
                                <h3>{entry.title}</h3>
                                <div className="service-content">
                                    <p>{entry.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </section>
)
