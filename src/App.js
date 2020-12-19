import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import avatar from './assets/kai.gif';

class App extends Component {
  render() {
    return (

      <div style={{height: '1000px', position: 'relative'}}>
            <Layout Header>
                <Header className="header" title={<Link style={{textDecoration: 'none', color: 'white', lineHeight: 'normal'}} to="/">Kai En Yong</Link>} scroll>
                <img src={avatar} alt="loading..." height="50" width="45" />
                    <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/projects">Projects</Link>
                    </Navigation>
                </Header>
                <Drawer style={{background: 'whitesmoke'}} title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Kai En Yong</Link>}>
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
