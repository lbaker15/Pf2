import React from 'react';
import {gsap} from 'gsap';

// let blob1 = document.querySelector("#blob1");
// let blob2 = document.querySelector("#blob2");
// let inner = Array.from(document.querySelectorAll('.innerEye'));
// window.addEventListener('DOMContentLoaded', () => {
//   window.addEventListener('mousemove', (e) => {
//     let num = e.clientX / window.innerWidth * 100;
//     let num2 = e.clientY / window.innerHeight * 100;
//     num2 = 1 + (num2/50)
//     blob1.querySelector('path').style.fill = `rgb(${250-num/1.5}, ${190+num/num2}, 250)`
//     blob2.querySelector('path').style.fill = `rgb(${250-num/1.5}, ${190+num/num2}, 250)`
//     let num3 = e.clientY / window.innerHeight * 180
//     inner.forEach(x => {
//       gsap.to(x, { marginLeft: - (40-(num*0.8)), marginTop: - (90-num3)+10 })
//     })
//   })
// })

class Intro extends React.Component {
    blob1 = React.createRef()
    blob2 = React.createRef()
    componentDidMount() {

    }
    mouseMove = (e) => {
        let num = e.clientX / window.innerWidth * 100;
        let num2 = e.clientY / window.innerHeight * 100;
        num2 = 1 + (num2/50)
        gsap.to(this.blob1.current, {fill: `rgb(${250-num/1.5}, ${190+num/num2}, 250)`})
        gsap.to(this.blob2.current, {fill: `rgb(${250-num/1.5}, ${190+num/num2}, 250)`})
    }
    render() {
        return (
            <React.Fragment>
                <div 
                onMouseMove={this.mouseMove}
                className="relative w-full flex justify-center h-screen items-center z-100 overflow-hidden">
                <div className="blob1css absolute -top-50 -left-50 overflow-hidden max-w-600 max-h-600 ">
                    <svg 
                    
                    className="rotate-20" id="blob1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path ref={this.blob1} fill="rgb(230, 204, 255)" d="M45.3,-65.3C59.1,-61.7,70.7,-49.7,71.6,-36.1C72.4,-22.5,62.5,-7.5,60.1,8.5C57.6,24.6,62.6,41.6,57.2,51.6C51.7,61.7,35.8,64.8,21,67.1C6.2,69.5,-7.6,71.1,-21.9,69.3C-36.3,67.5,-51.2,62.4,-60.6,52.2C-70,41.9,-74,26.6,-74.4,11.8C-74.9,-3,-71.9,-17.3,-64.2,-27.4C-56.6,-37.5,-44.2,-43.5,-32.7,-48.1C-21.2,-52.7,-10.6,-56,2.6,-60.1C15.8,-64.1,31.6,-69,45.3,-65.3Z" transform="translate(100 100)" />
                    </svg>
                </div>
                <div className="blob2css absolute overflow-hidden ">
                    <svg 
                    
                    className="max-w-600 -right-50 -bottom-50 rotate-300" id="blob2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path ref={this.blob2} fill="rgb(230, 204, 255)" d="M31.1,-42.4C44.8,-32.9,63.4,-29.8,71.8,-19.6C80.2,-9.4,78.4,7.7,71.1,20.8C63.7,34,50.8,43,38,54.3C25.2,65.7,12.6,79.2,-2.5,82.7C-17.7,86.2,-35.4,79.7,-46.1,67.7C-56.8,55.7,-60.6,38.3,-63.9,22.1C-67.3,6,-70.3,-8.9,-68.9,-25.2C-67.5,-41.4,-61.6,-59,-49.3,-69.1C-37.1,-79.1,-18.6,-81.5,-4.9,-74.8C8.7,-68,17.4,-52,31.1,-42.4Z" transform="translate(100 100)" />
                    </svg>
                </div>
                <h1 className="mx-20 text-span font-manrope intro-text z-10">
                    Hi I'm Elle: a <span>front and back end</span> developer based in the UK.
                    I love incorporating <span>creative ideas</span> into app design.
                    This is what I do now and some <span>things Ive done before.</span>
                </h1>
                </div>
            </React.Fragment>
        )
    }
}

export default Intro;