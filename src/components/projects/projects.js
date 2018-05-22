import React from 'react';
import './projects.scss';

const Projects = (props) => {
    return (
        <div className="hidden element" id="element_5">
            <div className="hidden-title pb-3">
                Personal Projects
            </div>
            <div className="row align-items-top">
                <div className="col-4 title">
                    <div className="float-right pr-5"><span className="title-top-border">Personal Projects</span></div>
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
                            <img className="project-mockup" src="../../../assets/frello.png" />
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
                            <img className="project-mockup" src="../../../assets/minesweeper.png" />
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
                    <div className="row pb-5">
                        <div className="col">
                            <div className="project-name">
                                <strong>Songwriter</strong>
                            </div>
                            <p>
                                Songwriter is a simple app that lets the user create a song and add lyrics. The lyrics can then be upvoted or liked 
                                by subsequent users. This app persists data in a <strong>MongoDB</strong> instance and uses <strong>GraphQL</strong> to 
                                access the database. 
                            </p>
                        </div>
                    </div>
                    <div className="row pb-5">
                        <div className="col">
                            <div className="project-name">
                                <strong>Five-Day Weather</strong>
                            </div>
                            <p>
                                My first go with <strong>Redux</strong>, five-day weather is an application that grabs weather data from 
                                the Open Weather <strong>API</strong> and displays it to the user. All the user needs to do is enter a city 
                                or location and Five-Day Weather does the rest.                              
                            </p>
                        </div>
                    </div>
                    <div className="row pb-5">
                        <div className="col">
                            <div className="project-name">
                                <strong>Ravenous</strong>
                            </div>
                            <p>
                                Ravenous queries the Yelp <strong>API</strong> to find restaurants or businesses based on the user's search 
                                preferences. Users can filter their search by best match, most reviewed or highest rating for a flexible and 
                                powerful search. Ravenous uses <strong>React</strong> on the front-end and <strong>Axios</strong> for API calls.                          
                            </p>
                        </div>
                    </div>
                    <div className="row pb-3">
                        <div className="col small-text">
                            <p>
                                Source code for all of my projects can be viewed on 
                                my <a className="link" target="_blank" href="https://github.com/coopersamuel">GitHub</a> profile                        
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;