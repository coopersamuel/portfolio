import React from 'react';
import './contact.scss';

const Contact = (props) => {
    return (
        <div className={`${props.scrollable ? 'element' : ''} row align-items-end contact-block`} id={`${props.scrollable ? 'element_6' : ''}`}>
            <div className="col">
                <div className="row justify-content-center mb-3">
                    <div className="col-3 p-1 text-center">
                        <a className="contact-link" href="mailto:cooper.samuel22@gmail.com">EMAIL</a>
                    </div>
                    <div className="col-3 p-1 text-center">
                        <a className="contact-link" target="_blank" href="https://github.com/coopersamuel">GITHUB</a>
                    </div>
                    <div className="col-3 p-1 text-center">
                        <a className="contact-link" target="_blank" href="https://www.linkedin.com/in/samuel-cooper-b81945a5/">LINKEDIN</a>
                    </div>
                </div>
                <div className="row justify-content-center text-center mb-4">
                    <div className="col-8 credits">
                        <i>Design + Development by Samuel Cooper, 2018</i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;