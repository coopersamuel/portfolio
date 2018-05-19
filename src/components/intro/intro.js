import React from 'react';
import { GoMarkGithub } from 'react-icons/lib/go';
import { FaLinkedinSquare } from 'react-icons/lib/fa';
import { MdMailOutline, MdKeyboardArrowDown } from 'react-icons/lib/md';

import './intro.scss';

const Intro = (props) => {
    const { isScrolled } = props;

    return (
        <div>
            <div className="intro row align-items-center element" id="element_1">
                <div className="col-6 left-spacer">
                    &nbsp;
                </div>
                <div className="col mb-5">
                    <div className="intro-title pb-5">
                        Hey! I'm <strong className="green">Sam</strong>,
                    </div>
                    <div className="intro-body">
                        I'm a <strong className="green">Fullstack Developer</strong>. I write software to do all sorts of things, everything from intuitive user experiences to complex algorithms.
                    </div>
                    <div className="intro-contact pt-5">
                        <a href="mailto:cooper.samuel22@gmail.com"><MdMailOutline className="mr-3" size={30} /></a>
                        <a href="https://github.com/coopersamuel"><GoMarkGithub className="mr-3" size={27} /></a>
                        <a href="https://www.linkedin.com/in/samuel-cooper-b81945a5/"><FaLinkedinSquare className="mr-3" size={28} /></a>
                    </div>
                </div>
                <div className={`scroll-indicator ${isScrolled ? 'hide' : ''}`}>
                    <MdKeyboardArrowDown size={50} onScroll={(event) => console.log('scroll')} />
                </div>
            </div>
        </div>
    );
}

export default Intro;