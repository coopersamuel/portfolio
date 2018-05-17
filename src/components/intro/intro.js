import React from 'react';
import './intro.scss';

const Intro = (props) => {
    return (
        <div className="intro row align-items-center">
            <div className="col mb-5">
                <div className="intro-title pb-5">
                    Hey! I'm <strong className="green">Sam</strong>,
                </div>
                <div className="intro-body">
                    I'm a <strong className="green">Fullstack Developer</strong>. I write software to do all kinds of stuff, everything from intuitive user experiences to complex algorithms.
                </div>
                <div className="intro-contact pt-5">
                    Let's get in touch!
                </div>
            </div>
        </div>
    );
}

export default Intro;