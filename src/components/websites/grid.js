import React from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

class SiteGrid extends React.Component {
    ref = React.createRef()
    ref2 = React.createRef()
    ref3 = React.createRef()
    ref4 = React.createRef()
    ref5 = React.createRef()
    ref6 = React.createRef()
    componentDidMount() {
        gsap.registerPlugin(ScrollTrigger)
        console.log(this.ref.current.parentElement)
        let array = [
            this.ref.current, this.ref2.current, this.ref3.current,
            this.ref4.current, this.ref5.current, this.ref6.current
        ]
        array.map(item => {
            let tlOpacity = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top bottom",
                    end: "top 50%",
                    scrub: 1,
                    // markers: true,
                }
            });
            tlOpacity.fromTo(item, {opacity: 0, x:50}, {opacity: 1,x:0})
        })
    }
    render() {
        return (
            <React.Fragment>    
                <div class="mx-10 flex items-center my-10 websites">
                    <div class="bg-card bg-gray-200 w-full p-10">                
                        <div class="w-full">
                            <h1 class="heading-1">Sites I have worked on</h1>
                            <div class="grid grid-cols-1 md:grid-cols-2">
                                    <div ref={this.ref} class="py-4 ibm pr-4">
                                        <h2 class="mb-2">
                                        <a className="font-semibold" 
                                        href="http://bwsite.s3-website.eu-west-2.amazonaws.com/">
                                        http://bwsite.s3-website.eu-west-2.amazonaws.com/
                                        </a>
                                        </h2>
                                        <h4 class="mb-4">
                                        A photography portfolio developed using webpack and greensock animation (please note this is not mobile responsive)
                                        </h4>
                                    </div>
                                    <div ref={this.ref2} class="py-4 ibm pr-4">
                                        <h2 class="mb-2">
                                        <a className="font-semibold" 
                                        href="https://www.cbd-wellness-uk.com/">
                                        https://www.cbd-wellness-uk.com/
                                        </a>
                                        </h2>
                                        <h4 class="mb-4">
                                        A custom shopify theme developed for a cbd oil brand.
                                        </h4>
                                    </div>
                                    <div ref={this.ref3} class="py-4 ibm pr-4">
                                        <h2 class="mb-2">
                                        <a className="font-semibold" href="https://natura-skincare-uk.myshopify.com/">
                                        https://natura-skincare-uk.myshopify.com/
                                        </a>
                                        </h2>
                                        <h4 class="mb-4">
                                        A custom theme developed from scratch for a small cosmetics company
                                        </h4>
                                    </div>
                                    <div ref={this.ref6} class="py-4 ibm pr-4">
                                        <h2 class="mb-2">
                                        <a className="font-semibold" href="https://lbaker15.github.io/music-demo/#/home">
                                        https://lbaker15.github.io/music-demo/#/home
                                        </a>
                                        </h2>
                                        <h4 class="mb-4">
                                        A demo of a music venue website developed using React, framer motion, GraphQL & Contentful API
                                        </h4>
                                    </div>

                                    <div ref={this.ref4} class="py-4 ibm pr-4">
                                        <h2 class="mb-2">
                                        <a className="font-semibold" href="https://abdivibes.bws.digital/">
                                        https://abdivibes.bws.digital/
                                        </a>
                                        </h2>
                                        <h4 class="mb-4">
                                        A small portfolio site built with wordpress
                                        </h4>
                                    </div>
                                    <div ref={this.ref5} class="py-4 ibm pr-4">
                                        <h2 class="mb-2">
                                        <a className="font-semibold" href="http://red-umbrella.flywheelsites.com/">
                                        http://red-umbrella.flywheelsites.com/
                                        </a>
                                        </h2>
                                        <h4 class="mb-4">
                                        A custom wordpress site developed for a lifestyle blogger
                                        </h4>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default SiteGrid;