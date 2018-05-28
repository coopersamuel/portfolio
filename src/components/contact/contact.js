import React from 'react';
import './contact.scss';
import headshot01 from '../../../assets/headshot01.jpg';
import headshot02 from '../../../assets/headshot02.jpg';

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            src: headshot01
        };
    }

    render() {
        return (
            <div className="element row mb-5 contact-block" id='element_6'>
                <div className="col-4 title">
                    &nbsp;        
                </div>
                <div className="col">
                    <div className="row justify-content-left align-items-center">
                        <div className="col-4">
                            <img 
                                className="sam-photo" 
                                src={this.state.src}
                                onMouseEnter={() => this.setState({ src: headshot02 })}
                                onMouseLeave={() => this.setState({ src: headshot01 })}
                            />
                        </div>
                        <div className="col">
                            <div className="row mb-5 justify-content-center">
                                <strong className="contact-underline-container">
                                    <a className="contact-link" href="mailto:cooper.samuel22@gmail.com">Email</a>  
                                    <div className="contact-underline"></div>                                 
                                </strong>
                            </div>
                            <div className="row mb-5 justify-content-center">
                                <strong className="contact-underline-container">
                                    <a className="contact-link" target="_blank" href="https://github.com/coopersamuel">GitHub</a>
                                    <div className="contact-underline"></div>                                 
                                </strong>
                            </div>
                            <div className="row justify-content-center">
                                <strong className="contact-underline-container">
                                <a className="contact-link" target="_blank" href="https://www.linkedin.com/in/samuel-cooper-b81945a5/">LinkedIn</a>
                                    <div className="contact-underline"></div>                                 
                                </strong>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default Contact;