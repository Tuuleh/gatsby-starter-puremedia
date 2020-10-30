import React from 'react';
import content from '../../content/about.yaml';
import Team from './team';

function isEven(number) {
    return number % 2 === 0
}

export default () => (
    <section id="about">
        <div className="row section-head">
            <div className="twelve columns">
                <h1>{content.title}</h1>
                <hr/>
                <p>{content.introduction}</p>
            </div>
        </div>
        <div className="row about-content">
            {
                // Slice the list of segments into pairs and style one of them on the right and one on the left
                content.entries.reduce((result, value, index, array) => {
                    if(isEven(index)) {
                        result.push(array.slice(index, index + 2));
                    }
                    return result
                }, [])
                .map((segmentPair, i) => {
                    return (
                        <div key={i} className="row about-content">
                            { segmentPair.map((segment, position) => {
                                return (
                                    <div key={segment.title} className={`mob-whole six columns ${isEven(position) ? 'right' : 'left'}`}>
                                        <h3>{segment.title}</h3>
                                        <p>{segment.text}</p>
                                    </div>
                                )
                             }) }
                        </div>
                    )
                })
            }
        </div>
        <Team/>

    </section>
)