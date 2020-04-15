import React from 'react';
import './about.scss';

const About = props => {
  return (
    <div className="hidden element" id="element_2">
      <div className="hidden-title pb-3">About Me</div>
      <div className="row align-items-top">
        <div className="col-4 title">
          <div className="title-align">
            <span className="title-rotate">about me</span>
          </div>
        </div>
        <div className="col about-content">
          <p>
            With proficiencies in software architecture and design, I build
            fullstack <strong>JavaScript</strong> applications using a host of
            modern technologies. Located in <strong>Hawai'i</strong>, I work
            remotely as a software engineer for <strong>UpMetrics</strong>, a
            tech startup focused on empowering non-profits and philanthropists
            through data analytics.
          </p>
          <br />
          <p>
            I'm driven to develop scalable, clean and efficient code while also
            delivering an excellent experience to my users. With a passion for
            people, I seek to impact society through the creation of excellent
            software with real world functionality.
          </p>
          <br />
          <p>
            When I'm off the clock, I enjoy catching waves in the big blue, time
            spent with my awesome wife or a good adventure novel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
