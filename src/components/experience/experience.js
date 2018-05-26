import React from 'react';
import "../../../node_modules/jquery/dist/jquery.min.js";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './experience.scss';

class Experience extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collapseGDIT: false,
            collapseEaton: true,
            collapseBike: true,
            collapseFK: true
        }
    }

    render() {
        return (
            <div className="hidden element" id="element_4">
                <div className="hidden-title pb-3">
                    Experience
                </div>
                <div className="row align-items-top">
                    <div className="col-4 title">
                        <div className="title-align"><span className="title-rotate">experience</span></div>
                    </div>
                    <div className="col experience-content">
                        <div className="row pb-5">
                            <div className="col">
                                <div className="experience-title" data-toggle="collapse" data-target="#experience_GDIT" 
                                    onClick={() => this.setState({ collapseGDIT: !this.state.collapseGDIT })}>
                                    <span className="triangle-container">
                                        <span className={`${this.state.collapseGDIT ? '' : 'rotate-triangle'}`}>&#9656;</span>
                                    </span>
                                    <strong className="experience-underline-container">
                                        Fullstack Software Engineer
                                        <div className="experience-underline"></div>
                                    </strong>
                                </div>
                                <div className="collapse show collapse-content" id="experience_GDIT">
                                    <div className="experience-name">
                                        <strong>General Dynamics</strong>
                                    </div>
                                    <p>
                                        In my current role with <strong>General Dynamics</strong>, I build high performance, 
                                        data heavy applications at the <strong>CDC</strong>, in Atlanta. These apps are geared 
                                        toward bioinformatics specific functions at CDC and are of great benefit to the public health.
                                        Several of the apps that myself and my team work on have attention from 
                                        the <strong>World Health Organization</strong> for their potential to aid in the 
                                        eradication of high profile, worldwide diseases.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row pb-5">
                            <div className="col">
                                <div className="experience-title" data-toggle="collapse" data-target="#experience_eaton"
                                    onClick={() => this.setState({ collapseEaton: !this.state.collapseEaton })}>
                                    <span className="triangle-container">
                                        <span className={`${this.state.collapseEaton ? '' : 'rotate-triangle'}`}>&#9656;</span>
                                    </span>
                                    <strong className="experience-underline-container">
                                        Software Engineer
                                        <div className="experience-underline"></div>
                                    </strong>
                                </div>
                                <div className="collapse collapse-content" id="experience_eaton">
                                    <div className="experience-name">
                                        <strong>Eaton</strong>
                                    </div>
                                    <p>
                                        Throughout my time with <strong>Eaton</strong>, I was involved in the design and implementation
                                        of <strong>IoT</strong> lighting solutions. Eaton's enterprise solutions help business leaders 
                                        keep a finger on the pulse of their company by providing insight into power draw and management, usage 
                                        and location of business assets and more. With Eaton, I was an integral part in the development 
                                        of <strong>web and mobile applications</strong> that provided a user interface to Eaton's complex IoT system.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row pb-5">
                            <div className="col">
                                <div className="experience-title" data-toggle="collapse" data-target="#experience_bike"
                                    onClick={() => this.setState({ collapseBike: !this.state.collapseBike })}>
                                    <span className="triangle-container">
                                        <span className={`${this.state.collapseBike ? '' : 'rotate-triangle'}`}>&#9656;</span>
                                    </span>
                                    <strong className="experience-underline-container">
                                        Computer Engineer + Team Lead
                                        <div className="experience-underline"></div>
                                    </strong>
                                </div>
                                <div className="collapse collapse-content" id="experience_bike">
                                    <div className="experience-name">
                                        <strong>Engineering Design Competition</strong>
                                    </div>
                                    <p>
                                        Several years back as a part of a design competition, I led a team of software and electrical engineers 
                                        in a small project with the goal of developing a <strong>Bicycle Training Computer</strong>. 
                                        This computer gathered ride-time data and performed post-ride analysis on the cyclist's performance. 
                                        Cyclists could use the system to track their total mileage, max speed, etc. Out of the five projects 
                                        entered in the competition, ours won the award for <strong>most innovative</strong>.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row pb-5">
                            <div className="col">
                                <div className="experience-title" data-toggle="collapse" data-target="#experience_FK"
                                    onClick={() => this.setState({ collapseFK: !this.state.collapseFK })}>
                                    <span className="triangle-container">
                                        <span className={`${this.state.collapseFK ? '' : 'rotate-triangle'}`}>&#9656;</span>
                                    </span>
                                    <strong className="experience-underline-container">
                                        Engineering Intern
                                        <div className="experience-underline"></div>
                                    </strong>
                                </div>
                                <div className="collapse collapse-content" id="experience_FK">
                                    <div className="experience-name">
                                        <strong>Fresenius Kabi</strong>
                                    </div>
                                    <p>
                                        In an internship with <strong>Fresenius Kabi</strong>, an international health technologies company, 
                                        I developed a system for scoring suppliers based on a diverse set of acceptance criteria. I wrote a program 
                                        to automate the scoring process and save time for the quality engineers that needed to undergo this otherwise
                                        tedious process.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;