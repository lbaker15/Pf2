import React from 'react';
import ReactDOM from 'react-dom'
import {Redirect} from 'react-router-dom';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';


class Item extends React.Component {
    state = {
        hidden: true, redirect: false
    }
    reference = React.createRef();
    ref = React.createRef();
    handleHover = (e) => {
        // console.log(e.target.index)
        console.log('hover')
        let video = ReactDOM.findDOMNode(this.reference.current)
        video.play();
        console.log(video)
        this.setState({
            hidden: false
        })
    }
    handleMouseLeave = (e) => {
        // console.log(e.target.index)
        console.log('leave')
        let video = ReactDOM.findDOMNode(this.reference.current)
        video.pause();
        this.setState({
            hidden: true
        })
    }
    handleMouseMove = (e) => {
        let video = ReactDOM.findDOMNode(this.reference.current)
        let offset = e.target.getBoundingClientRect();
        let {width, height, top, left} = offset;
        let center = left + (width/2);
        let mid = top + (height/2);
        let x2 = e.clientX;
        let y = e.clientY;
        let posX = (x2 - center) + 0;
        let posY = (y - mid) - 50;
        video.style.transform = `translate(${posX}px, ${posY}px)`
    }
    handleClick = () => {
        window.location = this.props.link;
    }

    componentDidMount() {
        gsap.registerPlugin(ScrollTrigger)
        console.log(this.ref.current.parentElement)
        let array = [
            this.ref.current
        ]
        array.map(item => {
            gsap.set(item, {opacity: 0, y:50})
            let tlOpacity = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top bottom",
                    end: "top 30%",
                    scrub: 0.5,
                    // markers: true,
                }
            });
            tlOpacity.to(item, {opacity: 1, y:0})
        })
    }
    
    render() {
        const {video, text, link} = this.props;
        const {hidden, redirect} = this.state;
        return (
            <React.Fragment>
                {/* {redirect ? <Redirect to={this.state.redirectLink} /> : null} */}
                <div 
                ref={this.ref}
                onClick={this.handleClick} 
                
                class="flex flex-col justify-center items-center text-style-vids" onMouseEnter={this.handleHover} onMouseLeave={this.handleMouseLeave} onMouseMove={this.handleMouseMove} index="1">
                    <a className="pointer-none" href={link}>{text}</a>
                    <video ref={this.reference} style={hidden ? {display: 'none'} : {display: 'block'}} className="pointer-none" id="video" width="320" height="240" src={video}>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </React.Fragment>
        )
    }
}

export default Item;