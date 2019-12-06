import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import por from '../assets/selfpor.jpg';

class Landing extends Component {
  render() {
    return(
      <div style={{maxWidth: '100%', margin: '10%'}}>
        <Grid className="landing-grid">
          <Cell col={12}>

            <img className="img" src={por} alt="loading..." />
            <div className="banner-text"> 
              <h1 style={{fontSize: '6vh'}}>Hi, I'm <b>Kai En!</b></h1>

            <hr/>

          <p style={{fontSize: '3vh'}}><i><b>Software Developer | Tech Enthusiast</b></i></p>

        <div className="social-links">

          {/* Linkedin profile page */}
          <a href="https://www.linkedin.com/in/kai-en-yong/" rel="noopener noreferrer" target="_blank">
            <i class="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* YouTube channel page */}
          <a href="https://www.youtube.com/c/smb67t" rel="noopener noreferrer" target="_blank">
            <i class="fa fa-youtube-play" aria-hidden="true" />
          </a>

          {/* Instagram profile page */}
          <a href="https://www.instagram.com/kaiiennn/" rel="noopener noreferrer" target="_blank">
            <i class="fa fa-instagram" aria-hidden="true" />
          </a>


        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
