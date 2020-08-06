import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

 class mobile extends Component {
    render() {
        return (
            <div>
            
          
          <Grid className="mobile" style={{margin:"0px", paddingTop:"0px"}}>
          <Cell col={12}>
          <div style={{display:"flex"}}> <h4>{this.props.school}</h4>  <h4 style={{paddingLeft:"15%"}}>{this.props.class}</h4> </div>
          </Cell>

              
          </Grid>
          
                
            </div>
        )
    }
}

export default mobile