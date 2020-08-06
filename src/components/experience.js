import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
 
 class experience extends Component {
    render() {
        return (
            <div>
                <Grid>
                <Cell col={12}>
                <h3 style ={{marginBottom:"0px", marginTop:"0px"}}>{this.props.job} - <h4 className="exp-h4" >{this.props.post}</h4></h3>
                <em style ={{marginTop:"0px"}}>{this.props.time}</em>
                <p>{this.props.post}</p>
                <h6>{this.props.jobDescription}</h6>
                </Cell>
               
                </Grid>
            </div>
        )
    }
}
export default experience