import React from 'react';
import content from '../../content/journal.yaml'
import { useBlogPostsQuery } from '../hooks/use-blog-posts-query';

export default () => {
    const posts = useBlogPostsQuery();
    return (
        <section id="journal">
            <div className="row section-head">
                <div className="twelve columns">
                    <h1>{content.title}</h1>
                    <hr/>
                    <p>{content.description}</p>
                </div>
            </div>
            <div className="row">
                <div className="twelve-columns">
                    <div id="blog-wrapper" className="bgrid-third s-bgrid-half mob-bgrid-whole group">
                        {
                            posts.map((p, index) => {
                                const {date, title, abstract, slug} = p.node.frontmatter;
                                return (
                                    <article key={index} className="bgrid">
                                        <h5>{date}</h5>
                                        <h3><a href={slug}>{title}</a></h3>
                                        <p>{abstract}</p>
                                    </article>

                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
