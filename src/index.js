import React from 'react';
import { render } from 'react-dom';

import Intro from './components/intro/intro';
import './styles.scss';

const App = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-10">
                    <Intro />
                </div>
            </div>
        </div>
    );
}

render(<App />, document.getElementById("root"));