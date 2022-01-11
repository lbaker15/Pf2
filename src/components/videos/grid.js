import React from 'react';
import ReactDOM from 'react-dom'
import Video1 from './contactform.webm';
import Video2 from './kaleidoscope.webm';
import Video3 from './site.webm';
import Video4 from './webgl.webm';
import Video5 from './ripple.webm';
import Video6 from './canvas.webm';
import Item from './item';

class VideoGrid extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div class="mx-10 my-20 relative block">
                    <h1 className="heading-1 text-center">Demos</h1>
                    <Item video={Video1} text={"MatterJs Contact Form"} link={"http://bwsite.s3-website.eu-west-2.amazonaws.com/contact.html"} />
                    <Item video={Video2} text={"WebGL kaleidoscope"} link={"https://lbaker15.github.io/Shaders2/"} />
                    <Item video={Video3} text={"Demo Marketing Site"} link={"http://my-site-lbaker15.s3-website.eu-west-2.amazonaws.com/"} />
                    <Item video={Video5} text={"Image Hover Ripple"} link={"http://red-umbrella.flywheelsites.com/"} />
                    <Item video={Video6} text={"Demo Photography Site"} link={"http://look2020.42web.io/"} />
                </div>
            </React.Fragment>
        )
    }
}

export default VideoGrid;