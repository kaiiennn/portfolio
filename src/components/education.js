import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Education extends Component {
  render() {
    return(
      <Grid>
        <Cell col={8}>
          {/* Education Level */}
          <h1 style={{fontSize:'2.5vh', lineHeight: '2.5vh', fontWeight: 'bold'}}>{this.props.educationLevel}</h1>

          {/* School Name */}
          <h2 style={{fontSize:'2vh', lineHeight: '2vh'}}>{this.props.schoolName}</h2>

          {/* Location */}
          <h3 style={{fontSize: '1.5vh', lineHeight: '0.5vh'}}>{this.props.schoolLocation}</h3>

          {/* Start & End Date */}
          <p style={{fontSize: '1.5vh', lineHeight: '1.8vh'}}>{this.props.schoolStartDate} - {this.props.schoolEndDate}</p>

          {/* Description */}
          <p2 style={{fontSize: '1.5vh'}}><li>{this.props.schoolDescription}</li><br/><li>{this.props.schoolDescription1}</li><br/><li>{this.props.schoolDescription2}</li></p2>

          <hr></hr>

        </Cell>
        <Cell col={8}>

        </Cell>
      </Grid>
    )
  }
}

export default Education;