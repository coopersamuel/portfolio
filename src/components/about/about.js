import React from 'react';
import './about.scss';

const About = (props) => {
    return (
        <div>
            <div className="hidden-title pb-3">
                About Me
            </div>
            <div className="row align-items-top">
                <div className="col-4 title">
                    <div className="float-right pr-5">About Me</div>
                </div>
                <div className="col about-content">
                    <p>
                        I started writing code several years ago with <strong>C++</strong>. 
                        Now, I build fullstack <strong>JavaScript</strong> applications using a host of modern technologies.
                        Currently, I work fulltime as a software engineer for <strong>General Dynamics</strong> where 
                        I build applications for the US Centers for Disease Control in <strong>Atlanta, GA</strong>.
                        I have my Bachelor's in Electrical Engineering and am working on my Master's in Computer Science at Georgia Tech.
                    </p>
                    <br />
                    <p>
                        I'm driven to develop scalable, clean and efficient code while also delivering an excellent experience to my users.
                        With a passion for people, I seek to impact society through the creation of excellent software with real world functionality.
                    </p>
                    <br />
                    <p>
                        When I'm off the clock, I enjoy catching waves in the big blue, time spent with my wife or a good book!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;