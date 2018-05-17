import React from 'react';
import { render } from 'react-dom';

import Intro from './components/intro/intro';
import About from './components/about/about';
import Skills from './components/skills/skills';
import './styles.scss';

const App = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-9">
                    <Intro />
                    <About />
                    <div className="spacer">&nbsp;</div>
                    <Skills />
                    <div className="spacer">&nbsp;</div>
                </div>
            </div>
        </div>
    );
}

render(<App />, document.getElementById("root"));