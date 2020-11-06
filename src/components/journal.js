import React from 'react';
import content from '../../content/journal.yaml'

export default () => (
    <section id="journal">
        <div className="row section-head">
            <div className="twelve columns">
                <h1>{content.title}</h1>
                <hr/>
                <p>{content.description}</p>
            </div>
        </div>
    </section>
)