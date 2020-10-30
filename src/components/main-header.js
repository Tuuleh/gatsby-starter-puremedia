import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { useSiteMetadata } from "../hooks/use-site-metadata"

import NavMenu from "./navmenu"

export default () => (
    // TODO: when scrolling down, add className="opaque"
    <header id="main-header">
        <div className="row header-inner">
            <div className="logo">
                <AnchorLink className="smoothscroll" to="/#hero">
                    <img alt="Puremedia." src={ useSiteMetadata().logo } />
                </AnchorLink>
            </div>
            <NavMenu />
        </div>

    </header>
)
