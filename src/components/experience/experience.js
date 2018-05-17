import React from 'react';
import './experience.scss';

const Experience = (props) => {
    return (
        <div>
            <div className="hidden-title pb-3">
                Experience
            </div>
            <div className="row align-items-top">
                <div className="col-4 title">
                    <div className="float-right pr-5">Experience</div>
                </div>
                <div className="col experience-content">
                    <div className="row pb-5">
                        <div className="col">
                            <div className="experience-name">
                                <strong>Fullstack Software Engineer</strong>
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
                    <div className="row pb-5">
                        <div className="col">
                            <div className="experience-name">
                                <strong>Software Engineer</strong>
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
                    <div className="row pb-5">
                        <div className="col">
                            <div className="experience-name">
                                <strong>Computer Engineer</strong>
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
                    <div className="row pb-5">
                        <div className="col">
                            <div className="experience-name">
                                <strong>Engineering Intern</strong>
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
    );
}

export default Experience;