import React from 'react';
import "../../../node_modules/jquery/dist/jquery.min.js";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { TiLink } from 'react-icons/lib/ti';
import './projects.scss';
import frelloMock from '../../../assets/frello.png';
import minesweeperMock from '../../../assets/minesweeper.png';

class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collapseTrello: false,
            collapseMinesweeper: true,
            collapseAuth: true,
            collapseJamming: true,
            collapseSongwriter: true,
            collapseWeather: true,
            collapseRavenous: true
        };
    }

    render() {
        return (
            <div className="hidden element" id="element_5">
                <div className="hidden-title pb-3">
                    Personal Projects
                </div>
                <div className="row align-items-top">
                    <div className="col-4 title">
                        <div className="title-align"><span className="title-rotate">projects</span></div>
                    </div>
                    <div className="col project-content">
                        <div className="row pb-5">
                            <div className="col">
                                <div className="project-name" data-toggle="collapse" data-target="#project-trello" 
                                    onClick={() => this.setState({ collapseTrello: !this.state.collapseTrello })}>
                                    <span className="triangle-container">
                                        <span className={`${this.state.collapseTrello ? '' : 'rotate-triangle'}`}>&#9656;</span>
                                    </span>
                                    <strong className="project-underline-container">
                                        Frello
                                        <div className="project-underline"></div>
                                    </strong>
                                    <a className="pl-3" target="_blank" href="https://coopersamuel.github.io/frello/"><TiLink size={25} /></a>
                                </div>
                                <div className="collapse show collapse-content" id="project-trello">
                                    <p>
                                        Frello is a Trello clone (original, right?), it could be used for tracking todos or managing a project. 
                                        Creating Frello presented an opportunity for me to flex my JavaScript
                                        muscles and learn new technologies such as <strong>ReactDnD</strong> (for drag and drop functionality). 
                                        This application uses <strong>Redux</strong> for application state management. 
                                        Try tracking some todos with Frello!
                                    </p>
                                    <span className="tech-item">React</span>
                                    <span className="tech-item">Redux</span>
                                    <span className="tech-item">ReactDnD</span>
                                    <span className="tech-item">Webpack</span>
                                    <span className="tech-item">Bootstrap</span>
                                    <img className="project-mockup mt-3" src={frelloMock} />
                                </div>
                            </div>
                        </div>
                        <div className="row pb-5">
                            <div className="col">
                                <div className="project-name" data-toggle="collapse" data-target="#project-minesweeper" 
                                    onClick={() => this.setState({ collapseMinesweeper: !this.state.collapseMinesweeper })}>
                                    <span className="triangle-container">
                                        <span className={`${this.state.collapseMinesweeper ? '' : 'rotate-triangle'}`}>&#9656;</span>
                                    </span>
                                    <strong className="project-underline-container">
                                        MinesweeperJS
                                        <div className="project-underline"></div>
                                    </strong>
                                    <a className="pl-3" target="_blank" href="https://coopersamuel.github.io/minesweeperJS/"><TiLink size={25} /></a>
                                </div>
                                <div className="collapse collapse-content" id="project-minesweeper">
                                    <p>
                                        A from-scratch remix of the classic minesweeper game! This was a fun project that involved both UI design/development
                                        and some algorithmic chops. Creating an efficient application state that maintained <strong>immutability</strong> was no easy task.
                                        Go ahead and give MinesweeperJS a go, 
                                        be careful not to step on any mines!
                                    </p>
                                    <span className="tech-item">React</span>
                                    <span className="tech-item">Redux</span>
                                    <span className="tech-item">Webpack</span>
                                    <span className="tech-item">Material</span>
                                    <img className="project-mockup mt-3" src={minesweeperMock} />
                                </div>
                            </div>
                        </div>
                        <div className="row pb-5">
                            <div className="col">
                                <div className="project-name" data-toggle="collapse" data-target="#project-auth-graphql" 
                                    onClick={() => this.setState({ collapseAuth: !this.state.collapseAuth })}>
                                    <span className="triangle-container">
                                        <span className={`${this.state.collapseAuth ? '' : 'rotate-triangle'}`}>&#9656;</span>
                                    </span>
                                    <strong className="project-underline-container">
                                        Auth-GraphQL
                                        <div className="project-underline"></div>
                                    </strong>
                                </div>
                                <div className="collapse collapse-content" id="project-auth-graphql">
                                    <p>
                                        I created Auth-GraphQL to learn the cutting edge new query language <strong>GraphQL</strong>. The application itself
                                        is simple, but there's a lot going on in the backend. Auth-GraphQL gave an opportunity to learn authentication 
                                        with <strong>PassportJS</strong> as well as create a <strong>MongoDB</strong> interface and understand how to 
                                        query/mutate the data with GraphQL.
                                    </p>
                                    <span className="tech-item">GraphQL</span>
                                    <span className="tech-item">MongoDB</span>
                                    <span className="tech-item">Apollo</span>
                                    <span className="tech-item">Express</span>
                                    <span className="tech-item">PassportJS</span>
                                    <span className="tech-item">React Router</span>
                                </div>
                            </div>
                        </div>
                        <div className="row pb-5">
                            <div className="col">
                                <div className="project-name" data-toggle="collapse" data-target="#project-jamming" 
                                    onClick={() => this.setState({ collapseJamming: !this.state.collapseJamming })}>
                                    <span className="triangle-container">
                                        <span className={`${this.state.collapseJamming ? '' : 'rotate-triangle'}`}>&#9656;</span>
                                    </span>
                                    <strong className="project-underline-container">
                                        Jamming
                                        <div className="project-underline"></div>
                                    </strong>
                                </div>
                                <div className="collapse collapse-content" id="project-jamming">
                                    <p>
                                        I created Jamming awhile ago when I was learning <strong>React</strong>. Jamming uses Spotify's external <strong>API</strong> to 
                                        allow the user to search for songs and create a playlist. The user can then save the playlist to their Spotify 
                                        account and listen at their leisure. 
                                    </p>
                                    <span className="tech-item">React</span>
                                    <span className="tech-item">Axios</span>
                                    <span className="tech-item">Sass</span>
                                </div>
                            </div>
                        </div>
                        <div className="row pb-5">
                            <div className="col">
                                <div className="project-name" data-toggle="collapse" data-target="#project-songwriter" 
                                    onClick={() => this.setState({ collapseSongwriter: !this.state.collapseSongwriter })}>
                                    <span className="triangle-container">
                                        <span className={`${this.state.collapseSongwriter ? '' : 'rotate-triangle'}`}>&#9656;</span>
                                    </span>
                                    <strong className="project-underline-container">
                                        Songwriter
                                        <div className="project-underline"></div>
                                    </strong>
                                </div>
                                <div className="collapse collapse-content" id="project-songwriter">
                                    <p>
                                        Songwriter is a simple app that lets the user create a song and add lyrics. The lyrics can then be upvoted or liked 
                                        by subsequent users. This app persists data in a <strong>MongoDB</strong> instance and uses <strong>GraphQL</strong> to 
                                        access the database. 
                                    </p>
                                    <span className="tech-item">GraphQL</span>
                                    <span className="tech-item">MongoDB</span>
                                    <span className="tech-item">Apollo</span>
                                    <span className="tech-item">Express</span>
                                    <span className="tech-item">React</span>
                                    <span className="tech-item">React Router</span>
                                </div>
                            </div>
                        </div>
                        <div className="row pb-5">
                            <div className="col">
                                <div className="project-name" data-toggle="collapse" data-target="#project-weather" 
                                    onClick={() => this.setState({ collapseWeather: !this.state.collapseWeather })}>
                                    <span className="triangle-container">
                                        <span className={`${this.state.collapseWeather ? '' : 'rotate-triangle'}`}>&#9656;</span>
                                    </span>
                                    <strong className="project-underline-container">
                                        Weather
                                        <div className="project-underline"></div>
                                    </strong>
                                </div>
                                <div className="collapse collapse-content" id="project-weather">
                                    <p>
                                        My first go with <strong>Redux</strong>, five-day weather is an application that grabs weather data from 
                                        the Open Weather <strong>API</strong> and displays it to the user. All the user needs to do is enter a city 
                                        or location and Five-Day Weather does the rest.                              
                                    </p>
                                    <span className="tech-item">React</span>
                                    <span className="tech-item">Redux</span>
                                    <span className="tech-item">Axios</span>
                                </div>
                            </div>
                        </div>
                        <div className="row pb-5">
                            <div className="col">
                                <div className="project-name" data-toggle="collapse" data-target="#project-ravenous" 
                                    onClick={() => this.setState({ collapseRavenous: !this.state.collapseRavenous })}>
                                    <span className="triangle-container">
                                        <span className={`${this.state.collapseRavenous ? '' : 'rotate-triangle'}`}>&#9656;</span>
                                    </span>
                                    <strong className="project-underline-container">
                                        Ravenous
                                        <div className="project-underline"></div>
                                    </strong>
                                </div>
                                <div className="collapse collapse-content" id="project-ravenous">
                                    <p>
                                        Ravenous queries the Yelp <strong>API</strong> to find restaurants or businesses based on the user's search 
                                        preferences. Users can filter their search by best match, most reviewed or highest rating for a flexible and 
                                        powerful search. Ravenous uses <strong>React</strong> on the front-end and <strong>Axios</strong> for API calls.                          
                                    </p>
                                    <span className="tech-item">React</span>
                                    <span className="tech-item">Axios</span>
                                    <span className="tech-item">Sass</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;