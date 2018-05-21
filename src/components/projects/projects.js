import React from 'react';
import './projects.scss';

const Projects = (props) => {
    return (
        <div className="hidden element" id="element_5">
            <div className="hidden-title pb-3">
                Experience
            </div>
            <div className="row align-items-top">
                <div className="col-4 title">
                    <div className="float-right pr-5">Personal Projects</div>
                </div>
                <div className="col project-content">
                    <div className="row pb-5">
                        <div className="col">
                            <div className="project-name">
                                <strong>Frello</strong>
                            </div>
                            <p>
                                Frello (clever name, right?) is a Trello clone, it could be used for tracking todos or managing a project. 
                                Creating Frello presented an opportunity for me to flex my JavaScript
                                muscles and learn new technologies such as <strong>ReactDnD</strong> (for drag and drop functionality). 
                                This application uses <strong>Redux</strong> for application state management. 
                                Try tracking some todos with <a className="link" target="_blank" href="https://coopersamuel.github.io/frello/">Frello</a>
                            </p>
                        </div>
                    </div>
                    <div className="row pb-5">
                        <div className="col">
                            <div className="project-name">
                                <strong>MinesweeperJS</strong>
                            </div>
                            <p>
                                A from-scratch remix of the classic minesweeper game! This was a fun project that involved both UI design/development
                                and some algorithmic chops. Creating an efficient application state that maintained <strong>immutability</strong> was no easy task.
                                Go ahead and give <a className="link" target="_blank" href="https://coopersamuel.github.io/minesweeperJS/">MinesweeperJS</a> a go, 
                                be careful not to step on any mines!
                            </p>
                        </div>
                    </div>
                    <div className="row pb-5">
                        <div className="col">
                            <div className="project-name">
                                <strong>Auth-GraphQL</strong>
                            </div>
                            <p>
                                I created Auth-GraphQL to learn the cutting edge new query language <strong>GraphQL</strong>. The application itself
                                is simple, but there's a lot going on in the backend. Auth-GraphQL gave an opportunity to learn authentication 
                                with <strong>PassportJS</strong> as well as create a <strong>MongoDB</strong> interface and understand how to 
                                query/mutate the data with GraphQL.
                            </p>
                        </div>
                    </div>
                    <div className="row pb-5">
                        <div className="col">
                            <div className="project-name">
                                <strong>Jamming</strong>
                            </div>
                            <p>
                                I created Jamming awhile ago when I was learning <strong>React</strong>. Jamming uses Spotify's external <strong>API</strong> to 
                                allow the user to search for songs and create a playlist. The user can then save the playlist to their Spotify 
                                account and listen at their leisure. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;