import React from 'react';
import {Header, Menu, 
        Button, Divider,
        Container} from 'semantic-ui-react'

import './App.css';
import 'semantic-ui-css/semantic.min.css'


class App extends React.Component {
  constructor() {
    super()
    this.state = { activeItem: 'Home' }
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render () {
    const {activeItem} = this.state;
    return (
      <div>
          <div style={{padding: 20}}>
            <Menu position="right" size="massive" secondary>
              <Menu.Menu position='right'>
                <Menu.Item
                  name='Home'
                  active={activeItem === 'Home'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='Blog'
                  active={activeItem === 'Blog'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='Consulting'
                  active={activeItem === 'Friends'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='Research'
                  active={activeItem === 'Research'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='Team'
                  active={activeItem === 'Team'}
                  onClick={this.handleItemClick}
                />
              </Menu.Menu>
            </Menu>
          </div>
        <div className="App">
          <div className="App-header">
            <Header style={{fontSize: 100}}>DataRes</Header>
            <p>The Premier Data Science Organization at UCLA</p>
            <Button size="massive" color="orange" >Join us</Button>
          </div>
          <Divider/>
          <div className="datares-header">
            <Container>
              <Header style={{fontSize: 40}}>
                Data Blog: Creating data-backed narratives.
              </Header>
              <p>
                We publish a variety of data centric journal articles.
                Take a look at some of our featured stories.
              </p>
            </Container>
          </div>
          <Divider/>
          <div className="datares-header">
            <Container>
              <Header style={{fontSize: 40}}>
                Research: Pushing the limits of machuine learning. 
              </Header>
              <p>
                We tackle advanced machine learning problems in the areas of computer vision, nature language processing, and reinforcement learning. 
              </p>
            </Container>
          </div>
          <Divider/>
          <div className="datares-header">
            <Container>
              <Header style={{fontSize: 40}}>
                Consulting: Developing data-driven solutions
              </Header>
              <p>
              We offer pro bono consulting services for startups 
              and companies within the Los Angeles area.
              </p>
            </Container>
          </div>
          <Divider/>
          <div className="App-header">
            <Header style={{fontSize: 50}}>
              Want to contribute to DataRes?
            </Header>
            <Button size="massive" color="orange" >
              Sponsor us
            </Button>
          </div>
          <Divider/>
          <div className="datares-header">
            <Container>
              <Header style={{fontSize: 40}}>
                Our Team              
              </Header>
            </Container>
          </div>
          <Divider/>
          <div className="datares-header">
            <Container>
              <Header style={{fontSize: 40}}>
                Where we have been              
              </Header>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}





export default App;
