import React from 'react';
import content from '../../content/team.yaml';

export default () => (
    <div id = "team">
        <div className="row team section-head">
            <div className="twelve columns">
                <h1>{content.title}<span>.</span></h1>
                <hr/>
                <p>{content.description}</p>
            </div>
        </div>
        <div className="row about-content">
            <div className="twelve columns">
                <div id="team-wrapper" className="bgrid-half mob-bgrid-whole group">
                    { content.entries.map((entry, i) => {
                        return(
                            <div key={i} className="bgrid member">
                                <div className="member-header">
                                    <div className="member-pic">
                                        <img src={entry.profilePicture} alt="member.name"/>
                                    </div>
                                    <div className="member-name">
                                        <h3>{entry.name}</h3>
                                        <span>{entry.title}</span>
                                    </div>
                                </div>
                                <p>{entry.bio}</p>
                                <ul className="member-social">
                                    <li><a href={entry.facebook}><i className="fa fa-facebook"></i></a></li>
                                    <li><a href={entry.twitter}><i className="fa fa-twitter"></i></a></li>
                                    <li><a href={entry.linkedin}><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href={entry.skype}><i className="fa fa-skype"></i></a></li>
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
)