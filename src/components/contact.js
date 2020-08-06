/*The contact class component is supposed to be for the contact page in the site. we had to import this page in main.js */
import React, { Component } from 'react'
import { Grid, Cell, ListItem, List, ListItemContent } from 'react-mdl'

 class Contact extends Component {
    render() {
        return (
            <div className = "contact-body">
            <Grid className ="contact-grid">
            <Cell col={6}>
            <h2> Okafor Chibuzor</h2>
            <img
            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" alt="avatar" style={{height: '250px'}}
            />

            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            </p>
            </Cell>
            <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
<div className="contact-list">
<List>
<ListItem>
  <ListItemContent style={{fontSize: '1.5em', fontFamily: 'Anton'}}>
  <i className="fa fa-phone-square" aria-hidden="true"/>
  +(234) 80-641-365-93  </ListItemContent>
</ListItem>
<ListItem>
  <ListItemContent style={{fontSize: '1.5em', fontFamily: 'Anton'}}>
  <i className="fa fa-skype" aria-hidden="true"/>
  +(234) 80-641-365-93  </ListItemContent>
</ListItem>
<ListItem>
  <ListItemContent style={{fontSize: '1.5em', fontFamily: 'Anton'}}>
  <i className="fa fa-twitter-square" aria-hidden="true"/>
  +(234) 80-641-365-93  </ListItemContent>
</ListItem>
<ListItem>
  <ListItemContent style={{fontSize: '1.5em', fontFamily: 'Anton'}}>
  <i className="fa fa-envelope-square" aria-hidden="true"/>
  +(234) 80-641-365-93  </ListItemContent>
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