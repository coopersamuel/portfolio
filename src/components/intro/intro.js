import React from 'react';
import './intro.scss';

const Intro = (props) => {
    return (
        <div className="intro row align-items-center">
            <div className="col">
                <div className="intro-title pb-5">
                    Hey! I'm <strong>Sam</strong>,
                </div>
                <div className="intro-body">
                    I'm a <strong>Fullstack Developer</strong>. I write software to do all kinds of stuff, everything from intuitive user experiences to complex algorithms.
                </div>
            </div>
        </div>
    );
}

export default Intro;