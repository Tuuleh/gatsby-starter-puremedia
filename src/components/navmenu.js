import React, {useState} from 'react';
import { useSiteMetadata } from "../hooks/use-site-metadata";
import scrollTo from "gatsby-plugin-smoothscroll"
import Scrollspy from "react-scrollspy"

export default function () {
    const [isVisible, setVisibility] = useState(false);
    const { menuItems } = useSiteMetadata();

    let showStyle = null;
    if (isVisible){
        showStyle = {transform: 'scaleY(1)'}
    }else{
        showStyle = null
    }
    return(
        <nav id="nav-wrap">
            <a
                id="toggle-btn"
                title="Menu"
                href="/#"
                onClick={() => setVisibility(!isVisible)}
            >
                <span className='menu-text'>Menu</span>
                <span className="menu-icon"></span>
            </a>
            <ul className="nav mobile" id="nav">
                <Scrollspy
                    style={showStyle}
                    items={ menuItems.map(a => a.path) }
                    currentClassName="current"
                    // offset={-100}
                >
                    {menuItems.map((value, index) => {
                        return (
                            <li key={index}>
                                <a
                                    className="smoothScroll"
                                    href={`/#${value.path}`}
                                    onClick={()=>{
                                        console.log("Clicked ", value.label)
                                        scrollTo(`/#${value.path}`);
                                        setVisibility(0);
                                    }}
                                >{`${value.label}.`}</a>

                            </li>
                        )
                    })}

                </Scrollspy>
            </ul>
        </nav>
    )
};