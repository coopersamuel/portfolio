import React from 'react';
import { render } from 'react-dom';
import _ from 'lodash';

import Intro from './components/intro/intro';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Experience from './components/experience/experience';
import './styles.scss';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isScrolled: false
        }

        this.handleScroll = this.handleScroll.bind(this);
        this.checkPosition = this.checkPosition.bind(this);
    }

    handleScroll() {
        if (window.scrollY && !this.state.isScrolled) {
            this.setState({ isScrolled: true })
        } else if (!window.scrollY) {
            this.setState({ isScrolled: false })
        }

        this.checkPosition();
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

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.checkPosition();   // Run this once just to make sure the element is already in view when the component is mounted
    }

    render() {
        return (
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
                    </div>
                </div>
            </div>
        );
    }
}

render(<App />, document.getElementById("root"));