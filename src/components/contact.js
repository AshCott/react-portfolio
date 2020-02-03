import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render () {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col = {6}>
                        <h2>Ashley Cottrell</h2>
                        <img 
                            src="https://cdn.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avater"
                            style={{height: '250px'}}
                        />
                        <p style={{ width: '75%', margin: 'auto', paggingTop: '1em'}}>Dynamic and Creative Computer Science graduate, passionate about software development and information security. Proficient in a wide range of modern technologies including Python, Java and C#. Able to quickly learn and apply new skill sets and technologies to be adaptable for clients, employees and administration.</p>
                        <p style={{ width: '75%', margin: 'auto', paggingTop: '1em'}}> Please feel free to contact me.</p>
                    </Cell>
                    <Cell col = {6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                            
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        Ashley.Cottrell@outlook.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                        in/ashley-cottrell
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        Available Upon Request
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-skype" aria-hidden="true"/>
                                        ashley.cottrell
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;