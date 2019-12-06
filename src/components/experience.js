import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return(
      <Grid>
        <Cell col={8}>
          {/* Position */}
          <h1 style={{fontSize: '2.5vh', lineHeight:'2.5vh', fontWeight: 'bold'}}>
          {this.props.jobName}</h1>

          {/* Company Name */}
          <h2 style={{fontSize: '2vh', lineHeight:'2vh'}}>
          {this.props.companyName}</h2>
        
          {/* Location */}
          <h3 style={{fontSize: '1.5vh', lineHeight:'0.5vh'}}>
          {this.props.companyLocation}</h3>

          {/* Start & End Date */}
          <p style={{fontSize: '1.5vh', lineHeight:'1.8vh'}}>
          {this.props.companyStartDate} - {this.props.companyEndDate}</p>

          {/* Description */}
          <p2 style={{fontSize: '1.5vh', lineHeight:'1.5vh'}}>
          {this.props.jobDescription}</p2>

          <hr></hr>

          </Cell>
        <Cell col={8}>

        </Cell>
      </Grid>
    )
  }
}

export default Experience;
