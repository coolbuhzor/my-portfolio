/*this is supposed to bbe the landing page. like the home page*/
import React, { Component } from 'react'
/*tthe grid and cell tags are from react-mdl so we have to import from reaact mdl */
import { Grid, Cell } from 'react-mdl';




 class LandingPage extends Component {
    render() {
        return (
<div style = {{width:'100%', margin: 'auto' }}>
{/*the grid helps us to kinda form a grid like that of css grids. while cell are in form of bootstrap columns. youve been coding you know what i mean*/}
<Grid className="landing-grid">
<Cell col= {12}>
<img 
src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0hhsd-aL0E31emTp6fbLvHq8U9WbJc2W1MOWaUCfyOo2TUpcJ&usqp=CAU" alt="avatar" className = "avatar-image"

/>
<div className="banner-text">
<h1 className="header">Front End  Web Developer</h1>
<hr />
<p> HTML | CSS | Bootstrap | JavaScript | React | Content Writing | Content Creation.</p>
<div className="social-links">
{/* Git hub link*/}
<a href="https://github.com/coolbuhzor" rel= "noopener noreferrer" target="_blank">
<i className="fa fa-github-square" aria-hidden="true"/>
</a>

{/*Twitter link*/}
<a href="https://twitter.com/coolbuhzor" rel= "noopener noreferrer" target="_blank">
<i className="fa fa-twitter-square" aria-hidden="true"/>
</a>

{/*linked-in link*/}
<a href="https://twitter.com/coolbuhzor" rel= "noopener noreferrer" target="_blank">
<i className="fa fa-linkedin-square" aria-hidden="true"/>
</a>


</div>
</div>
</Cell>
</Grid>
</div>
        )
    }
}

export default LandingPage