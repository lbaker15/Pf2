import React from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';


class AppGrid extends React.Component {
    ref = React.createRef()
    ref2 = React.createRef()
    ref3 = React.createRef()
    ref4 = React.createRef()
    ref5 = React.createRef()
    componentDidMount() {
        gsap.registerPlugin(ScrollTrigger)
        console.log(this.ref.current.parentElement)
        let array = [
            this.ref.current, this.ref2.current, this.ref3.current,
            this.ref4.current, this.ref5.current
        ]
        array.map(item => {
            gsap.set(item, {opacity: 0, x:50})
            let tlOpacity = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top bottom",
                    end: "top 50%",
                    scrub: 1,
                    // markers: true,
                }
            });
            tlOpacity.to(item, {opacity: 1, x:0})
        })
    }
    render() {
        return (
            <React.Fragment>    
                <div class="mx-10 flex items-center my-10 apps">
                    <div class="bg-card bg-gray-200 w-full p-10">                
                        <div class="w-full">
                            <h1 class="heading-1">Apps I have worked on</h1>
                            <div class="grid grid-cols-1 md:grid-cols-2">
                                    <div ref={this.ref} class="py-4 ibm pr-4">
                                        <h2 class="mb-2">
                                        <a className="font-semibold" href="https://lbaker15.github.io/Property_demo/">
                                        Demo property search app
                                        </a>
                                        </h2>
                                        <h4 class="mb-4 pr-2">
                                        This is a demo of an app where a property company is able to query a database of properties, in addition to adding properties to the database.
                                        </h4>
                                        <h4 class="mb-4 pr-2">
                                        <span className="font-semibold">Built With:</span>
                                        <br />
                                        The create-react-app framework,
                                        React,
                                        TypeScript,
                                        NodeJs/Express,
                                        MongoDB
                                        </h4>
                                    </div>
                                    <div ref={this.ref2} class="py-4 ibm pr-4">
                                        <h2 class="mb-2">
                                        <a className="font-semibold" href="https://github.com/lbaker15/hha">
                                        https://github.com/lbaker15/hha
                                        </a>
                                        </h2>
                                        <h4 class="mb-4 pr-2">
                                        This is an app where users are able to search mental health providers in Canada. There is also a backend where administrators and editors can add/edit health care providers to the database. (Still in development)
                                        </h4>
                                        <h4 class="mb-4 pr-2">
                                        <span className="font-semibold">Built With:</span>
                                        <br />
                                        React, Google Maps & Geolocation API,
                                        Node/Express backend,
                                        MongoDB
                                        </h4>
                                    </div>
                                    <div ref={this.ref3} class="py-4 ibm pr-4">
                                        <h2 class="mb-2">
                                        <a className="font-semibold" href="https://lbaker15.github.io/ReactPhoto//#/">
                                        Instagram Photo Uploader
                                        </a>
                                        </h2>
                                        <h4 class="mb-4 pr-2">
                                        This is a small app where users can view their recent instagram insights, schedule image uploads and view any scheduled images. To use this app you will need a business instagram account with a linked business facebook account (you will need a fb business account to use this app).
                                        </h4>
                                        <h4 class="mb-4 pr-2">
                                        <span className="font-semibold">Built With:</span>
                                        <br />
                                        React/Redux, 
                                        Drag/Drop api,
                                        Handling image uploading (multer & aws s3 bucket),
                                        JWT's and cookies for authentication,
                                        Node/Express backend,
                                        MongoDB
                                        </h4>
                                    </div>
                                    <div ref={this.ref4} class="py-4 ibm pr-4">
                                        <h2 class="mb-2">
                                        <a className="font-semibold" href="https://lbaker15.github.io/HostingRatherGame/#/">
                                        Would You Rather Game
                                        </a>
                                        </h2>
                                        <h4 class="mb-4 pr-2">
                                        This is a game where users are able to login and vote on 'would you rather' questions posted by other users. Users have the opportunity to vote on existing questions, add new questions and view the leaderboard.
                                        </h4>
                                        <h4 class="mb-4 pr-2">
                                        <span className="font-semibold">Built With:</span>
                                        <br />
                                        React/Redux,
                                        Firebase,
                                        The create-react-app framework
                                        </h4>
                                    </div>
                                    <div ref={this.ref5} class="py-4 ibm pr-4">
                                        <h2 class="mb-2">
                                        <a className="font-semibold" href="https://github.com/lbaker15/Udacity-React-Redux-Practice-Reddit-Clone">
                                        Reddit Clone
                                        </a>
                                        </h2>
                                        <h4 class="mb-4 pr-2">
                                        This is an app that allows users to create posts under various categories. Users are able to post and edit posts, upvote/downvote posts, add comments to existing posts, vote on comments and filter posts via category. Instructions for cloning this project are available in the readme.
                                        </h4>
                                        <h4 class="mb-4 pr-2">
                                        <span className="font-semibold">Built With:</span>
                                        <br />
                                        React/Redux
                                        
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

export default AppGrid;