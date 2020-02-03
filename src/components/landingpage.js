import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render () {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Software Developer</h1>
                            <hr/>
                            <p>C / C++ | C# | Python | HTML/CSS | React | Javascript | MySQL</p>
                            <div className="social-links">
                            {/*Linked In*/}
                                <a href="https://www.linkedin.com/in/ashley-cottrell/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true" />
                                </a>
                            {/*Github*/}
                                <a href="https://github.com/AshCott" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square"  aria-hidden="true" />
                                </a>
                            {/*Email*/}
                                <a href="mailto:Ashley.Cottrell@outlook.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-envelope-square"  aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;