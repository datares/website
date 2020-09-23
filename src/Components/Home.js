// Import React Components
import React from 'react';
import {Header, Button, Image, Icon,
    Grid, Container, Divider} from 'semantic-ui-react';
import {Link} from 'react-router-dom'
// Import CSS
import '../Styles/Home.css';
import 'semantic-ui-css/semantic.min.css';

// Import Images
import logo from '../Assets/Home/logo.svg';
import logos from '../Assets/Team/logos.png';

import orangeBar from '../Assets/Home/orange_bar.svg';
import numberWave from '../Assets/Home/number_wave.svg';
import datablogWave from '../Assets/Home/background.svg';
import flippedWave from '../Assets/Home/background_flipped.svg';
import bottomWave from '../Assets/Home/bottom_wave.svg';

class Home extends React.Component {
    render() {
        return (
        <div>
          <div className="Landing">
            <Container fluid>
              <div class="Logo-alignment">
                <Image src={logo} size="huge" centered></Image>
              </div>
              <div>
                <p style={{paddingTop: '3%', fontSize: 25}}>
                  The Premier Data Science Organization @ UCLA
                </p>
              </div>
            </Container>
          </div>

          <div className="intro-header">
              <Container>
                <Grid style={{paddingTop: '8%'}}>
                  <Grid.Row>
                    <Grid.Column>
                    <Image src={ orangeBar } size='large'></Image>
                      <Header style={{fontSize: "2em"}}>
                        At DataRes, we solve problems and craft stories with data.
                      </Header>
                      <p>
                        We provide a platform for aspiring data scientists and analysts
                        to collaborate on impactful data projects. If you love playing
                        with data, creating powerful visualizations, or building
                        predictive models, you have a home at DataRes.
                      </p>
                      </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Divider style={{width: '50%', margin: 'auto', marginTop: '8%'}} clearing/>
              </Container>
          </div>
          
          {/* Where we've been */}
          <div>
            <Container style={{marginTop: '1%'}}>
              <Header style={{fontSize: 50}}>
                      Where We've Been
              </Header>
              <div>
                  <Image src={logos} size='massive' style={{marginTop: "5%", marginBottom: "5%"}} centered></Image>
              </div>
            </Container>
          </div>

          <div className='Stats-header' style={{backgroundImage: `url(${numberWave})`,
                                                backgroundSize: "cover",
                                                height: "45vh",
                                                width: "auto"}}>
            <Container>
              <Grid style={{paddingRight: 20}}>
                <Grid.Row columns={4}>
                  <Grid.Column>
                    <p className="Stat-Number">10+</p>
                    <p className="Stat-Description">Articles Published</p>
                  </Grid.Column>
                  <Grid.Column>
                    <p className="Stat-Number">5</p>
                    <p className="Stat-Description">Research Projects</p>
                  </Grid.Column>
                  <Grid.Column>
                    <p className="Stat-Number">70+</p>
                    <p className="Stat-Description">Active Members</p>
                  </Grid.Column>
                  <Grid.Column>
                    <p className="Stat-Number">35+</p>
                    <p className="Stat-Description">Companies Represented</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </div>

          <div className='datablog-header' style={{backgroundImage: `url(${datablogWave})`,
                                                backgroundSize: "cover",
                                                minHeight: "80vh",
                                                height: "80vh",
                                                width: "auto"}}>
            <div>
              <Container>
                <Grid style={{paddingTop: '2%'}}>
                    <Grid.Row columns={2}>
                      <Grid.Column></Grid.Column>
                      <Grid.Column>
                        <Image src={ orangeBar } size='large'></Image>
                        <Header style={{fontSize: "1.8em", color: 'white'}}>
                          Data Blog: Creating data-backed narratives.
                        </Header>
                        <p>
                          We publish a variety of data centric journal articles.
                          Take a look at some of our featured stories.
                        </p>
                        <Link to="/datablog">
                        <Button fluid floated='right' size="huge" color="orange" 
                              style={{borderRadius: 20}}>
                          Learn More
                        </Button>
                        </Link>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
              </Container>
            </div>
          </div>

          <div className="research-header">
            <Container>
              <Grid style={{marginTop: '5%', marginBottom: '5%'}}>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <div>
                    <Image src={ orangeBar } size='large'></Image>
                    <Header style={{fontSize: "1.8em"}}>
                      Research: Pushing the limits of machine learning. 
                    </Header>
                    <p>
                      We tackle advanced machine learning problems in the areas of computer vision, 
                      natural language processing, and reinforcement learning. 
                    </p>
                    <Link to="/research">
                    <Button fluid floated='left' size="huge" color="orange" 
                            style={{borderRadius: 20}}>
                        Learn More
                      </Button>
                    </Link>
                    </div>
                  </Grid.Column>
                  <Grid.Column></Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </div>

          <div className='consulting-header' style={{backgroundImage: `url(${flippedWave})`,
                                                  backgroundSize: "cover",
                                                  minHeight: "100vh",
                                                  height: "110vh",
                                                  width: "auto"}}>
            <Container>
              <Grid>
                <Grid.Row columns={2}>
                  <Grid.Column></Grid.Column>
                  <Grid.Column>
                    <div style={{marginTop: '50%'}}>
                      <Image src={ orangeBar } size='large'></Image>
                      <Header style={{fontSize: "1.8em", color: 'white'}}>
                        Consulting: Developing data-driven solutions.
                      </Header>
                      <p>
                      We offer pro bono consulting services for startups 
                      and companies within the Los Angeles area.
                      </p>
                      <Link to="/consulting">
                      <Button fluid floated='right' size="huge" color="orange" 
                              style={{borderRadius: 20}}>
                        Learn More
                      </Button>
                      </Link>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </div>

          <div className="contribute-header">
            <Container>
              <Header style={{fontSize: "2em"}}>
                Want To Contribute To DataRes? <br></br>
              </Header>
              <Button floated='center' size="huge" color="orange" 
                            onClick={(e) => {
                                  e.preventDefault();
                                  window.location.href='https://drive.google.com/file/d/17ypxJqurOepvSfPlGOYvGaoMzVQ5OmFv/view?usp=sharing';
                              }}
                            style={{borderRadius: 20,
                                    width: '40%',
                                    marginTop: '5%',
                                    padding: 20,
                                    fontSize: 25}}>
                        Sponsor Us
              </Button>
              <div className='contribute-header-description'>
                <p style={{fontSize: "0.9em"}}>
                Interested in learning more about our organization? Want to collab?<br/> 
                Reach out to us at <span/> 
                <a href="mailto:ucladatares@gmail.com">ucladatares@gmail.com</a> or get in touch with us online.
                </p>
                <div style={{marginTop: '5%'}}>
                    
                </div>     
              </div>
            </Container>
          </div>

          <div className='Footer' style={{backgroundImage: `url(${bottomWave})`,
                                                backgroundSize: "cover",
                                                height: "45vh",
                                                width: "auto"}}>
              <Container fluid>
                <div className="Social-media-icons">
                  <Grid style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingTop: '15%'
                  }}>
                      <a href="https://www.facebook.com/ucladatares" rel="noopener noreferrer" target="_blank">
                        <Icon inverted size="huge" color="white" name='facebook' fitted/>
                      </a>
                      <a href="https://twitter.com/DataresUcla" rel="noopener noreferrer" target="_blank">
                        <Icon inverted size="huge" color="white" name='twitter' fitted/>
                      </a>
                      <a href="https://www.linkedin.com/company/ucla-datares/" rel="noopener noreferrer" target="_blank">
                        <Icon inverted size="huge" color="white" name='linkedin' fitted/>
                      </a>
                      <a href="https://www.instagram.com/ucladatares/" rel="noopener noreferrer" target="_blank">
                        <Icon inverted size="huge" color="white" name='instagram' fitted/>
                      </a>
                      <a href="https://www.youtube.com/channel/UCmKnJ7aUWRcpfc2NMo2-_Hw" rel="noopener noreferrer" target="_blank">
                        <Icon  inverted size="huge" color="white" name='youtube' fitted/>
                      </a>
                  </Grid>
                </div>
              </Container>
          </div>
             
        </div>
        
        );
    }
}

export default Home;