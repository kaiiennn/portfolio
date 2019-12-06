import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import avatar from './assets/kai.gif';

class App extends Component {
  render() {
    return (
      <div style={{height: '1000px', position: 'relative'}}>
            <Helmet>
        <title>My Portfolio! - Kai En Yong</title>
        <meta name="google-site-verification" content="9dI3VxsnmYXhj7VrPpQWNi4h-gZwYjpYdSqL-lvkXRg" />
      </Helmet>
            <Layout fixedHeader>
                <Header className="header" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/portfolio">Home</Link>} scroll>
                <img src={avatar} alt="loading..." height="50" width="45" />
                    <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/projects">Projects</Link>
                    </Navigation>
                </Header>
                <Drawer title={<Link style={{textDecoration: 'none', color: 'grey'}} to="/portfolio">Kai En Yong</Link>}>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
            </Navigation>
        </Drawer>
        <Content>
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
