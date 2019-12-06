import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
  render() {
    return(
      <Grid>
        <Cell col={12}>
          <div style={{display: 'block', marginLeft: '5px', marginTop: '-5px', fontSize: '2vh', fontWeight: 'medium'}}>{this.props.skill} <ProgressBar style={{padding: '5px', marginTop: '5px', width: '90%'}} progress={this.props.progress} /> </div>
        </Cell>
      </Grid>
    )
  }
}

export default Skills;
