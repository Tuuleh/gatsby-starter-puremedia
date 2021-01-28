import React from "react";

import content from '../../content/contact.yaml'

//TODO: This isn't a working component at all. If you want to use the contact form, you'll have to make it post to an internal
// path where you handle the request, respond adequately and make the contact form component handle successes and failures
export default () => {
    return (<section id="contact">
        <div className="row section-head">
            <div className="twelve columns">
                <h1>{content.title}<span>.</span></h1>
                <hr/>
                <p>{content.body}</p>
            </div>
        </div>

        <div className="row form-section">
            <div id="contact-form" className="twelve columns">
                <form
                    action={content.formUrl}
                    method="post"
                    id="contactForm"
                    name="contactForm"
                >
                    <fieldset>
                        <div className="row">
                            <div className="six columns mob-whole">
                                <input
                                    type="text"
                                    defaultValue=""
                                    name="contactFname"
                                    id="contactFname"
                                    placeholder="First name"
                                    required
                                />
                            </div>
                            <div className="six columns mob-whole">
                                <input
                                    type="text"
                                    defaultValue=""
                                    name="contactLname"
                                    id="contactLname"
                                    placeholder="Last name"
                                    required
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="six columns mob-whole">
                                <input
                                    type="email"
                                    defaultValue=""
                                    name="contactEmail"
                                    id="contactEmail"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div className="six columns mob-whole">
                                <input
                                    type="text"
                                    defaultValue=""
                                    name="contactSubject"
                                    id="contactSubject"
                                    placeholder="Subject"
                                    required
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="twelve columns">
                                <textarea
                                    name="contactMessage"
                                    id="contactMessage"
                                    placeholder="Your Message"
                                    rows="10"
                                    cols="50"
                                    required
                                >
                                </textarea>
                            </div>
                        </div>

                        <div>
                            <button className="submit full-width">Send Message</button>
                            <div id="image-loader">
                                <img src="images/loader.gif" alt=""/>
                            </div>
                        </div>
                        <div id="message-warning"></div>
                        <div id="message-success">
                            <i className="fa fa-check"></i>Your message was sent, thank you!<br/>
                        </div>


                    </fieldset>

                </form>

            </div>

        </div>

    </section>)
}
