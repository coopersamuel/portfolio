import React from 'react';
import './values.scss';

const Values = (props) => {
    return (
        <div className="hidden element" id="element_6">
            <div className="hidden-title pb-3">
                Values
            </div>
            <div className="row align-items-top">
                <div className="col-4 title">
                    <div className="title-align"><span className="title-rotate">values</span></div>
                </div>
                <div className="col values-content">
                    <div className="row mb-4 justify-content-between">
                        <div className="col-sm-6 col-12">
                            <div className="value-number text-right">01</div>
                            <div className="value-text text-right">
                                <strong>Collaboration over competition.</strong>
                                <p>The greatest men didn't make it on their own, they stood on the shoulders of those around them.</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-12">
                            <div className="value-number text-right">02</div>
                            <div className="value-text text-right">
                                <strong>Be fueled by purpose.</strong>
                                <p>Those who prioritizes the common good will always go further.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4 justify-content-between">
                        <div className="col-sm-6 col-12">
                            <div className="value-number text-right">03</div>
                            <div className="value-text text-right">
                                <strong>Impact powers innovation.</strong>
                                <p>The best software applications out there are for people, not just profit.</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-12">
                            <div className="value-number text-right">04</div>
                            <div className="value-text text-right">
                                <strong>Usability is key.</strong>
                                <p>Great software is both intuitive and delightful to use, otherwise it won't be used at all.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-sm-6 col-12">
                            <div className="value-number text-right">05</div>
                            <div className="value-text text-right">
                                <strong>Run from technical debt.</strong>
                                <p>Do the hard thing up front and manage complexity, even if it's not the easiest solution. Cutting corners will always come back to haunt you (or worse, someone else).</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-12">
                            <div className="value-number text-right">06</div>
                            <div className="value-text text-right">
                                <strong>Always learning.</strong>
                                <p>Tech never stops evolving. Thus, a great developer will never stop learning.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Values;