import React from 'react';
import {gsap} from 'gsap';
import { ScrollToPlugin } from 'gsap/all'


class Nav extends React.Component {
    
    handleClick = (e) => {
        gsap.registerPlugin(ScrollToPlugin)
        gsap.to(window, {duration: 0.5, scrollTo: {y: "." + e.target.value}})
    }
    render() {
        return(
            <div className="nav">
                <div className="inner">   
                    <button
                    onClick={this.handleClick}
                    value="websites"
                    >Websites</button>
                    <button
                    onClick={this.handleClick}
                    value="apps"
                    >Apps</button>
                    <button>CV</button>
                    <button>Contact</button>
                </div> 
            </div>
        )
    }
}

export default Nav;