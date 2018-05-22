import React from 'react';
import { render } from 'react-dom';
import _ from 'lodash';
import scrollIntoView from 'scroll-into-view';

import Intro from './components/intro/intro';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Experience from './components/experience/experience';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import './styles.scss';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isScrolled: false,
            location: "element_1"
        }

        this.handleScroll = this.handleScroll.bind(this);
        this.checkPosition = this.checkPosition.bind(this);
        this.scrollToLocation = this.scrollToLocation.bind(this);
        this.setLocationOnScroll = this.setLocationOnScroll.bind(this);
    }

    handleScroll() {
        if (window.scrollY && !this.state.isScrolled) {
            this.setState({ isScrolled: true })
        } else if (!window.scrollY) {
            this.setState({ isScrolled: false })
        }

        this.checkPosition();
        this.setLocationOnScroll();
    }

    checkPosition() {
        const elements = document.getElementsByClassName('hidden');
        const windowHeight = window.innerHeight;

        _.forEach(elements, element => {
            if (element) {
                let posFromTop = element.getBoundingClientRect().top;
                if (posFromTop - windowHeight <= -150) {
                    element.className = element.className.replace('hidden', 'fade-in-element');
                }
            }
        })
    }

    scrollToLocation(location) {
        const element = document.getElementById(location);

        scrollIntoView(element, {
            time: 400,
            ease: function(value){
                return 1 - Math.pow(1 - value, value / 5);
            }
        });
    }

    setLocationOnScroll() {
        const elements = document.getElementsByClassName('element');
        const windowHeight = window.innerHeight;

        _.forEach(elements, element => {
            if (element) {
                let posFromTop = element.getBoundingClientRect().top;
                if (posFromTop - windowHeight <= -200) {
                    // Set the location in the state
                    if (this.state.location !== element.id) {
                        this.setState({ location: element.id });
                    }
                }
            }
        })
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.checkPosition();   // Run this once just to make sure the element is already in view when the component is mounted
    }

    render() {
        return (
            <div>
                <div className="green-block">
                    &nbsp;
                </div>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-9">
                            <Intro isScrolled={this.state.isScrolled} />
                            <About />
                            <div className="spacer">&nbsp;</div>
                            <Skills />
                            <div className="spacer">&nbsp;</div>
                            <Experience />
                            <div className="spacer">&nbsp;</div>
                            <Projects />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col hidden-contact-info">
                            <Contact scrollable={false} />
                        </div>
                    </div>
                    <div className="row justify-content-left">
                        <div className="col contact-info">
                            <Contact scrollable={true} />
                        </div>
                        <div className="col m-0 p-0">
                            <img className="sam-photo" src="../assets/sam.jpg"></img>
                        </div>
                    </div>
                </div>
                <div className="nav-container">
                    <div className="navigation">
                        <div className="dots-container">
                            <div    className={`dot ${this.state.location === 'element_1' ? 'filled-in' : ''}`}                                     
                                    onClick={() => this.scrollToLocation(`element_${1}`)}></div>
                            <div    className={`dot ${this.state.location === 'element_2' ? 'filled-in' : ''}`}
                                    onClick={() => this.scrollToLocation(`element_${2}`)}></div>
                            <div    className={`dot ${this.state.location === 'element_3' ? 'filled-in' : ''}`}
                                    onClick={() => this.scrollToLocation(`element_${3}`)}></div>
                            <div    className={`dot ${this.state.location === 'element_4' ? 'filled-in' : ''}`}
                                    onClick={() => this.scrollToLocation(`element_${4}`)}></div>
                            <div    className={`dot ${this.state.location === 'element_5' ? 'filled-in' : ''}`}
                                    onClick={() => this.scrollToLocation(`element_${5}`)}></div>
                            <div    className={`dot ${this.state.location === 'element_6' ? 'filled-in' : ''}`}
                                    onClick={() => this.scrollToLocation(`element_${6}`)}></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App />, document.getElementById("root"));