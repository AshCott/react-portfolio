import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
    render () {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Ashley Cottrell</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Dynamic and Creative Computer Science graduate, passionate about software development and information security. Proficient in a wide range of modern technologies including Python, Java and C#. Able to quickly learn and apply new skill sets and technologies to be adaptable for clients, employees and administration.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Location</h5>
                        <p>Bisbane, Australia</p>
                        <h5>Phone</h5>
                        <p>Available Upon Request</p>
                        <h5>Email</h5>
                        <p>ashley.cottrell@outlook.com</p>
                        <h5>Web</h5>
                        <p>https://github.com/AshCott</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                            startYear={2016}
                            endYear={2020}
                            degree="Bachelor of Information Technology"
                            schoolName="Queensland University of Technology"
                            schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        />
                        <Education 
                            startYear={2016}
                            endYear={2020}
                            degree="Bachelor of Buisness"
                            schoolName="Queensland University of Technology"
                            schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Experience</h2>
                        <Experience 
                            startYear={2016}
                            endYear={2012}
                            jobName="Hardware Engineer"
                            bullet1="• Final year Capstone Project working with Narbethong State Special School to build an interactive numeracy wall that helps children with special needs to learn math concepts."
                            bullet2="• Developed using microcontrollers, Arduino and electrical hardware to develop a tool that can be utilized by the teachers of Narbethong State Special School."
                            bullet3="• Created CAD Files and used specialized tools and equipment such as 3D printers and laser cutters to expedite the building process."
                        />
                        <Experience 
                            startYear={2019}
                            endYear={2019}
                            jobName="General Labourer"
                            bullet1="• Provide manual labour assistance to a variety of different worksites (event setup, container loading/unloading and construction)."
                            bullet2="• Setting up Staging/Audio-visual equipment and making sure everything meets the health and safety requirements."
                            bullet3="• Operating a variety of small equipment/tools (i.e. saws, shovels, trolleys, brush cutters etc.)."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        
                        <h2>Skills</h2>
                        <Skills 
                            skill="C/C++"
                            progress={70}
                            buffer={100}
                        />
                        <Skills 
                            skill="Python"
                            progress={90}
                            buffer={100}
                        />
                        <Skills 
                            skill="HTML/CSS"
                            progress={40}
                            buffer={100}
                        />
                        <Skills 
                            skill="React"
                            progress={25}
                            buffer={100}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;