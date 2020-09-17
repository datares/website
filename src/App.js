import React from 'react';
import {Header, Menu, 
        Button, Divider, Image,
        Grid, Container, Statistic} from 'semantic-ui-react';

import Particles from 'react-particles-js';

import './App.css';
import 'semantic-ui-css/semantic.min.css';

import logo from './images/logo.png';
import orangeBar from './images/orange_bar.svg';
import wave1 from './images/wave1.svg';
import wave2 from './images/wave2.svg';
import canvasImage from './images/canvas.svg';

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
            <Container>
              <Image src={logo} size="huge" centered></Image>
            <br></br>
            <p>
              <strong>
                The Premier Data Science Organization @ UCLA
              </strong> 
            </p><br></br>
            <Button size="massive" color="orange" style={{fontSize: 25}}>
              Join Us
            </Button>
            </Container>
          </div>
          <Container fluid>
            <Image src={wave1} size="massive" fluid></Image>
          </Container>
          <div className="datares-header">
              <Container>
                <Grid>
                  <br></br>
                  <Grid.Row>
                    <Image src={ orangeBar } size='large'></Image>
                    <Header style={{fontSize: 40}}>
                      At DataRes, we solve problems and craft stories with data.
                    </Header>
                    <p>
                      We provide a platform for aspiring data scientists and analysts
                      to collaborate on impactful data projects. If you love playing with
                      data, creating powerful visualizations, or building predictive models,
                      you have a home at DataRes.
                    </p>
                  </Grid.Row>
                </Grid>
              </Container>
            </div>
          <div className='Stats-header'>
            <Container fluid>
              <Grid>
                <Grid.Row columns={4}>
                  <Grid.Column>
                    <Header style={{fontSize: 100, color: 'white'}} centered>18</Header>
                    <p><strong>Articles Published</strong></p>
                  </Grid.Column>
                  <Grid.Column>
                  <Header style={{fontSize: 100, color: 'white'}} centered>5</Header>
                    <p><strong>Research Projects</strong></p>
                  </Grid.Column>
                  <Grid.Column>
                  <Header style={{fontSize: 100, color: 'white'}} centered>70+</Header>
                    <p><strong>Active Members</strong></p>
                  </Grid.Column>
                  <Grid.Column>
                  <Header style={{fontSize: 100, color: 'white'}} centered>35+</Header>
                    <p><strong>Companies Represented</strong></p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </div>
          <div className='datares-header'>
            <Container>
              <Grid>
                  <Grid.Row>
                    <Grid.Column>
                      <Image src={ orangeBar } size='large'></Image>
                      <Header style={{fontSize: 40}}>
                        Data Blog: Creating data-backed narratives.
                      </Header>
                      <p>
                        We publish a variety of data centric journal articles.
                        Take a look at some of our featured stories.
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
            </Container>
          </div>
          <Divider/>
          <div className="datares-header">
            <Container>
              <Grid divided='vertically'>
                <Grid.Row>
                  <div>
                  <Image src={ orangeBar } size='large'></Image>
                  <Header style={{fontSize: 40}}>
                    Research: Pushing the limits of machine learning. 
                  </Header>
                  <p>
                    We tackle advanced machine learning problems in the areas of computer vision, 
                    natural language processing, and reinforcement learning. 
                  </p>
                  </div>
                  <br></br>
                  <div style={{marginTop: 100}}>
                    <Image src={ orangeBar } size='large'></Image>
                    <Header style={{fontSize: 40}}>
                      Consulting: Developing data-driven solutions.
                    </Header>
                    <p>
                    We offer pro bono consulting services for startups 
                    and companies within the Los Angeles area.
                    </p>
                  </div>
                </Grid.Row>
              </Grid>
            </Container>
          </div>
          <Divider/>
          <div className="General-header">
            <Header style={{fontSize: 40}}>
              Want To Contribute To DataRes?
            </Header> <br/>
            <Button size="massive" color="orange" >
              Sponsor Us
            </Button>
            <div className="Wave-spacing">
              <Image src={wave2} size='massive'></Image>
            </div>
          </div>
          <div className="General-header">
            <Container>
              <Header style={{fontSize: 40}}>
                Our Team              
              </Header>
            </Container>
          </div>
          <Divider/>
          <div className="General-header">
            <Container>
              <Header style={{fontSize: 40}}>
                Where We Have Been              
              </Header>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}





export default App;
