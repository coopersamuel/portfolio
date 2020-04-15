import React from 'react';
import './skills.scss';

const Skills = props => {
  return (
    <div className="hidden element" id="element_3">
      <div className="hidden-title pb-3">Skills</div>
      <div className="row align-items-top">
        <div className="col-4 title">
          <div className="title-align">
            <span className="title-rotate">skills</span>
          </div>
        </div>
        <div className="col skills-content">
          <div className="row">
            <div className="col-sm-3 col-6 pb-4">
              <div className="skills-category">Languages</div>
              <div className="skill">JavaScript</div>
              <div className="skill">TypeScript</div>
              <div className="skill">GraphQL</div>
              <div className="skill">ReasonML</div>
              <div className="skill">Python</div>
            </div>
            <div className="col-sm-3 col-6 pb-4">
              <div className="skills-category">Libraries</div>
              <div className="skill">React</div>
              <div className="skill">Redux</div>
              <div className="skill">React Router</div>
              <div className="skill">React Native</div>
              <div className="skill">Apollo</div>
              <div className="skill">VueJS</div>
            </div>
            <div className="col-sm-3 col-6">
              <div className="skills-category">Backend</div>
              <div className="skill">Node</div>
              <div className="skill">Express</div>
              <div className="skill">MongoDB</div>
              <div className="skill">Prisma</div>
              <div className="skill">REST APIs</div>
            </div>
            <div className="col-sm-3 col-6">
              <div className="skills-category">Tools</div>
              <div className="skill">Babel</div>
              <div className="skill">Webpack</div>
              <div className="skill">Git</div>
              <div className="skill">Jest</div>
              <div className="skill">CI Servers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
