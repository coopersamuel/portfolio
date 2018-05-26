import React from 'react';
import { GoMarkGithub } from 'react-icons/lib/go';
import { FaLinkedinSquare } from 'react-icons/lib/fa';
import { MdMailOutline, MdKeyboardArrowDown } from 'react-icons/lib/md';

import './intro.scss';


class Intro extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            typewriterStrings: ["Fullstack Developer.", "Idea Maker.", "UX Architect."], // Array with strings to type in typewriter
            currentString: '' // Current string being displayed
        };

        this.loopTypewriter = this.loopTypewriter.bind(this);
        this.typewriter = this.typewriter.bind(this);
    }

    componentDidMount() {
        // Once the component has mounted, start the typewriter animation
        this.loopTypewriter(0);
    }

    loopTypewriter(index) {
        // First make sure that the given index is valid
        if (index >= this.state.typewriterStrings.length) {
            index = 0;
        }

        // Remove the old string
        this.setState({ currentString: '' });

        // start a typewriter animation for the next string in the array
        let string = this.state.typewriterStrings[index];
        this.typewriter(string, 0, index);
    }

    // types one character in the typwriter
    // keeps calling itself until the string is finished
    typewriter(string, index, wordIndex) {
        if (index >= string.length) {
            // Reset the typewriter with the next string
            setTimeout(this.loopTypewriter.bind(null, ++wordIndex), 2000);
            return;
        }

        let character = string[index];
        let displayString = this.state.currentString += character;
        this.setState({ currentString: displayString });

        // Wait a bit in between characters
        setTimeout(this.typewriter.bind(null, string, ++index, wordIndex), 100);
    }

    render() {
        const { isScrolled } = this.props;

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
                            I'm a <strong className="green"><span className="typeout">{this.state.currentString}</span><span className="cursor">_</span></strong>
                        </div>
                        <div className="intro-body">
                            I write software to do all sorts of things, everything from intuitive user experiences to complex algorithms.
                        </div>
                        <div className="intro-contact pt-5">
                            <a className="icon-link" href="mailto:cooper.samuel22@gmail.com"><MdMailOutline className="mr-3" size={30} /></a>
                            <a className="icon-link" target="_blank" href="https://github.com/coopersamuel"><GoMarkGithub className="mr-3" size={27} /></a>
                            <a className="icon-link" target="_blank" href="https://www.linkedin.com/in/samuel-cooper-b81945a5/"><FaLinkedinSquare className="mr-3" size={28} /></a>
                        </div>
                    </div>
                    <div className={`scroll-indicator ${isScrolled ? 'hide' : ''}`}>
                        <MdKeyboardArrowDown size={50} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Intro;