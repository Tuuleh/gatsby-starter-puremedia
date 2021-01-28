import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import scrollTo from "gatsby-plugin-smoothscroll"

export default () => {
    const { social, footer, address, contacts } = useSiteMetadata()
    return (
        <footer>
            <div className="row">
                <div className="six columns tab-whole footer-about">
                    <h3>{footer.title}</h3>

                    <p>{ footer.text }</p>

                </div>

                <div className="six columns tab-whole right-cols">
                    <div className="row">
                        <div className="columns">

                            <h3 className="address">Contact Us</h3>
                            <p>
                                { address.line1 }<br />
                                { address.line2 }<br />
                                { address.line3 }
                            </p>
                            <ul>
                                <li><a href={contacts.tel1.url}>{contacts.tel1.text}</a></li>
                                <li><a href={contacts.tel2.url}>{contacts.tel2.text}</a></li>
                                <li><a href={contacts.email.url}>{contacts.email.text}</a></li>
                            </ul>
                        </div>

                        <div className="columns last">
                            <h3 className="contact">Follow Us</h3>
                            <ul>
                                { social.map(mySocial =>
                                    <li key={mySocial.service }><a href={ mySocial.url }>
                                        { mySocial.service }
                                    </a></li>
                                )}
                            </ul>
                        </div>

                    </div>
                </div>

                <p className="copyright">&copy; 2014 Puremedia | Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a> | Ported to Gatsby by <a href="https://github.com/tuuleh/gatsby-starter-puremedia" title="Tuuli Pöllänen">Tuuli Pöllänen</a> </p>

                <div id="go-top">
                    <a className="smoothscroll" title="Back to Top" onClick={() => scrollTo('#hero')}>
                        <span>Top</span>
                        <i className="fa fa-long-arrow-up"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}
