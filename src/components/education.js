import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
 
 class education extends Component {
    render() {
        return (


          <div>
          <Grid className="monitor">
          <Cell col={4}>
          <p>{this.props.startYear}-{this.props.endYear}</p>
          <h6>{this.props.degree}</h6>
          <h6>{this.props.course}</h6>
          </Cell>
          <Cell col={8}>
          <h4 style={{marginTop: '0px'}}>{this.props.schoolName}
          </h4>
          <p >{this.props.schoolDegree}</p>
          <p style={{marginTop: '25px',}}>{this.props.schoolDescription}</p>
          
          </Cell>
          </Grid>
      </div>

            // <div>
            //     <Grid className="monitor">
            //     <Cell col={4} >
            //     <div >
            //     <p  style={{margin: '0px'}}>{this.props.startYear}-{this.props.endYear}</p>
            //     <h6  style={{margin: '0px'}}>{this.props.degree}</h6>
            //     <h6  style={{margin: '0px'}}>{this.props.course}</h6>
            //     </div>
            //     </Cell>
            //     <Cell col={8} >

            //     <h6 style={{margin: '0px', fontWeight: 'bolder'}}>{this.props.schoolName}
            //     </h6>
            //     <p  style={{margin: '0px'}}>{this.props.schoolDegree}</p>
            //     <p  style={{margin: '0px'}}>{this.props.schoolDescription}</p>
                
            //     </Cell>
            //     </Grid>
            // </div>

        )
    }
}
export default education