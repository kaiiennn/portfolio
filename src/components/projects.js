import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    //JavaScript Tab
    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', fontWeight: 'bold', height: '176px', background: 'url(https://i.imgur.com/8HnxhSU.png) center / cover'}} >Sellular</CardTitle>
            <CardText>
              Sellular is an C2C e-commerce platform which aims to tackle the lack of control over fraudulent activities that can be observed in many related marketplaces in Singapore, and build trust with our end users
            </CardText>
            <CardActions border>
              <Button colored style={{textAlign: 'center', fontSize: '13px'}}>DEVELOPMENT IN PROGRESS</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>

          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', fontWeight: 'bold', height: '176px', background: 'url(https://i.imgur.com/S1k6ZuN.png) center / cover'}} >Memory Match</CardTitle>
            <CardText>
              This project is a memory game where you need to match pairs of tiles. Playing is very simple - turn over one tile and then try to find a matching tile.
            </CardText>
            <CardActions border>
            <a href="https://kaiiennn.github.io/MemoryMatch/" target="_blank" rel="noopener noreferrer">
              <Button colored style={{textAlign: 'center', fontSize: '13px'}}>PLAY</Button>
              </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>

        </div>


      )
      //YouTube Tab
    } else if(this.state.activeTab === 1) {
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.imgur.com/yzQ2joj.png) center / cover'}} >BenQ EW3270U 4K HDR Monitor Review</CardTitle>
            <CardText>
              A partnership video with BenQ APAC which featured their top-end EW3270U monitor model
            </CardText>
            <CardActions border>
            <a href="https://www.youtube.com/watch?v=SsmIOehmtWQ" target="_blank" rel="noopener noreferrer">
              <Button colored>WATCH</Button>
              </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.imgur.com/BW96Hf5.png) center / cover'}} >BenQ EL2870U 4K HDR Monitor Review</CardTitle>
            <CardText>
            A partnership video with BenQ APAC which featured their top-end EL2870U monitor model
            </CardText>
            <CardActions border>
              <a href="https://www.youtube.com/watch?v=9hrV1gW7iYM" target="_blank" rel="noopener noreferrer">
              <Button colored>WATCH</Button> </a>

            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.imgur.com/k9zDwoF.png) center / cover'}} >TDU 2 - Mercedes-Benz ML63 AMG</CardTitle>
            <CardText>
              One of the channel's earliest videos that have went viral back in 2011 with over 1,000,000 views
            </CardText>
            <CardActions border>
            <a href="https://www.youtube.com/watch?v=o799qFW93Gg" target="_blank" rel="noopener noreferrer">
              <Button colored>WATCH</Button>
              </a>

            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
        </div>
        
      )

      //C++ Tab
    } else if(this.state.activeTab === 2) {
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.imgur.com/VGy5m1d.png) center / cover'}} >Binary Search Tree</CardTitle>
            <CardText>
              This project was completed as part of the "Data Structures and Algorithms (DSA)" module in Ngee Ann Polytechnic. I have developed an AVL tree, a self-balancing Binary Search Tree where the difference between heights of left and right subtrees cannot be more than one for all nodes. On top of that, I have applied multiple DSA concepts such as Queue, Recursion and Level-By-Level Traversal
            </CardText>
            <CardActions border>
            <a href="https://github.com/kaiiennn/DSA_Assignment_2017" target="_blank" rel="noopener noreferrer">
              <Button colored style={{textAlign: 'center', fontSize: '13px'}}>GITHUB</Button>
              </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>

        </div>
      )

      //C# Tab
    } else if(this.state.activeTab === 3) {
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://i.imgur.com/IBIA271.png) center / cover'}} >Movie Ticketing System</CardTitle>
            <CardText>
              This project was completed as part of the "Object-Oriented Programming (OOP)" module in Ngee Ann Polytechnic. I have developed a simple Movie Ticketing System, where it has multiple basic features such as listing of movies and movie screenings, delete a movie screening session and ordering of movie ticket. In addition, there are advanced features such as adding a movie rating, view movie ratings and comments
            </CardText>
            <CardActions border>
            <a href="https://github.com/kaiiennn/OOP_Assignment_2016" target="_blank" rel="noopener noreferrer">
              <Button colored style={{textAlign: 'center', fontSize: '13px'}}>GITHUB</Button>
              </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
        </div>
      )
     
      //Java Tab
    } else if(this.state.activeTab === 4) {
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.imgur.com/8BTpbEG.png) center / cover'}} >Mezcla</CardTitle>
            <CardText>
              Coded in Android Studio, Mezcla is an application which was jointly developed by my coursemates and I as part of the final assignment for the "Mobile Application Development (MAD)" module. The app allows users to search for relevant cocktails based on the ingredients they have or to search for cocktails based on its name to find out more information such as its recipe and instructions to construct the cocktail. The application also provides users with the nearest nightlife locations that are close to their GPS location.
            </CardText>
            <CardActions border>
              <a href="https://play.google.com/store/apps/details?id=com.mezcla.chai.cocktails&hl=en_SG" target="_blank" rel="noopener noreferrer">
              <Button colored style={{textAlign: 'center', fontSize: '13px'}}>PLAY STORE</Button>
              </a>
              <a href="https://github.com/MysteryGenius/MezclaMAD" target="_blank" rel="noopener noreferrer">
              <Button colored style={{textAlign: 'center', fontSize: '13px'}}>GITHUB</Button>
              </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
        </div>
      )
    //Innovation Tab
    } else if(this.state.activeTab === 5) {
    return(
      <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.imgur.com/fYHOLqo.png) center / cover'}} >InnoX Challenge</CardTitle>
          <CardText>
            This project was completed as part of the "Innovation Made Possible (7INNOVA)" module in Ngee Ann Polytechnic. My groupmates and I have worked on a private indoor space concept named "Indoor Accommodation (InnAcc)", which is planned to be built at East Coast Park. InnAcc provides park-goers a place to conduct their own activities designed and dedicated to their private and personal usage. There are multiple designs of InnAcc made to suit the different needs and requirements of the users.
          </CardText>
          <CardActions border>
            <a href="https://github.com/kaiiennn/InnoX_Challenge" target="_blank" rel="noopener noreferrer">
            <Button colored style={{textAlign: 'center', fontSize: '13px'}}>GITHUB</Button>
            </a>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
          </CardMenu>
        </Card>
      </div>
    )
  }
}

  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab><b>JavaScript</b></Tab>
          <Tab><b>YouTube</b></Tab>
          <Tab><b>C++</b></Tab>
          <Tab><b>C#</b></Tab>
          <Tab><b>Java</b></Tab>
          <Tab><b>Innovation</b></Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
