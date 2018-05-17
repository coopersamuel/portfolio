import React from 'react';
import withScrollReveal from 'react-scrollreveal';
import './skills.scss';

const Skills = ({ animationContainerReference }) => {
    return (
        <div ref={animationContainerReference}>
            <div className="sr-item hidden-title pb-3">
                Skills
            </div>
            <div className="row align-items-top">
                <div className="col-4 title">
                    <div className="sr-item float-right pr-5">Skills</div>
                </div>
                <div className="sr-item col skills-content">
                    <div className="row">
                        <div className="col-3">
                            <div className="skills-category">
                                Languages
                            </div>
                            <div className="skill">
                                JavaScript
                            </div>
                            <div className="skill">
                                TypeScript
                            </div>
                            <div className="skill">
                                GraphQL
                            </div>
                            <div className="skill">
                                HTML
                            </div>
                            <div className="skill">
                                CSS/Sass
                            </div>
                            <div className="skill">
                                C/C++
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="skills-category">
                                Libraries
                            </div>
                            <div className="skill">
                                React
                            </div>
                            <div className="skill">
                                Redux
                            </div>
                            <div className="skill">
                                React Native
                            </div>
                            <div className="skill">
                                Bootstrap
                            </div>
                            <div className="skill">
                                Material Design
                            </div>
                            <div className="skill">
                                Apollo
                            </div>
                            <div className="skill">
                                Angular
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="skills-category">
                                Backend
                            </div>
                            <div className="skill">
                                Node
                            </div>
                            <div className="skill">
                                Express
                            </div>
                            <div className="skill">
                                MongoDB
                            </div>
                            <div className="skill">
                                REST APIs
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="skills-category">
                                Tools
                            </div>
                            <div className="skill">
                                Babel
                            </div>
                            <div className="skill">
                                Webpack
                            </div>
                            <div className="skill">
                                Git
                            </div>
                            <div className="skill">
                                Jest
                            </div>
                            <div className="skill">
                                CI Servers
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withScrollReveal([
    {
      selector: '.sr-item',
      options: {
        reset: false,
        delay: 200,
        easing: 'cubic-bezier(.694, 0, .335,1)',
        mobile: true,
        viewFactor: 0.2,
      },
    },
])(Skills);