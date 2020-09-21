// Import React Components
import React from 'react';
import {Header, Button, Image, Icon,
    Grid, Container} from 'semantic-ui-react';

// Import CSS
import '../Styles/Home.css';
import 'semantic-ui-css/semantic.min.css';

// Import Images
import logo from '../Assets/Home/logo.svg';
import orangeBar from '../Assets/Home/orange_bar.svg';
import numberWave from '../Assets/Home/number_wave.svg';
import datablogWave from '../Assets/Home/background_div.svg';
import flippedWave from '../Assets/Home/background_div_flipped.svg';
import bottomWave from '../Assets/Home/bottom_wave.svg';

class Home extends React.Component {
    render() {
        return (
        <div>
          <div className="Landing">
            <Container fluid>
              <Image src={logo} size="huge" centered></Image>
            <div className='SubHeading'>
              The Premier Data Science Organization @ UCLA
            </div>
            </Container>
          </div>

          <div className="intro-header">
              <Container>
                <Grid>
                  <Grid.Row>
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
                  </Grid.Row>
                </Grid>
              </Container>
          </div>

          <div className='Stats-header' style={{backgroundImage: `url(${numberWave})`,
                                                backgroundSize: "cover",
                                                height: "50vh",
                                                width: "auto"}}>
            <Container fluid>
              <Grid>
                <Grid.Row columns={4} style={{margin: 'auto'}}>
                  <Grid.Column stretched>
                    <Header style={{fontSize: "3.5em", color: 'white'}} centered>10+</Header>
                    <p><strong>Articles Published</strong></p>
                  </Grid.Column>
                  <Grid.Column>
                  <Header style={{fontSize: "3.5em", color: 'white'}} centered>5</Header>
                    <p><strong>Research Projects</strong></p>
                  </Grid.Column>
                  <Grid.Column>
                  <Header style={{fontSize: "3.5em", color: 'white'}} centered>70+</Header>
                    <p><strong>Active Members</strong></p>
                  </Grid.Column>
                  <Grid.Column>
                  <Header style={{fontSize: "3.5em", color: 'white'}} centered>35+</Header>
                    <p><strong>Companies Represented</strong></p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </div>

          <div className='datablog-header' style={{backgroundImage: `url(${datablogWave})`,
                                                backgroundSize: "cover",
                                                height: "100vh",
                                                width: "auto"}}>
            <Container>
              <Grid>
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
                      <Button fluid floated='right' size="huge" color="orange" 
                            onClick={(e) => {
                                  e.preventDefault();
                                  window.location.href='/datablog';
                              }}
                            style={{borderRadius: 20}}>
                        Learn More
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
            </Container>
          </div>

          <div className="research-header">
            <Container>
              <Grid>
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
                    <Button fluid floated='left' size="huge" color="orange" 
                            onClick={(e) => {
                                  e.preventDefault();
                                  window.location.href='/research';
                              }}
                            style={{borderRadius: 20}}>
                        Learn More
                      </Button>
                    </div>
                  </Grid.Column>
                  <Grid.Column></Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </div>

          <div className='datablog-header' style={{backgroundImage: `url(${flippedWave})`,
                                                  backgroundSize: "cover",
                                                  height: "115vh",
                                                  width: "100%"}}>
            <Container>
              <Grid>
                <Grid.Row columns={2}>
                  <Grid.Column></Grid.Column>
                  <Grid.Column>
                    <div style={{marginTop: 100}}>
                      <Image src={ orangeBar } size='large'></Image>
                      <Header style={{fontSize: "1.8em", color: 'white'}}>
                        Consulting: Developing data-driven solutions.
                      </Header>
                      <p>
                      We offer pro bono consulting services for startups 
                      and companies within the Los Angeles area.
                      </p>
                      <Button fluid floated='right' size="huge" color="orange" 
                            onClick={(e) => {
                                  e.preventDefault();
                                  window.location.href='/consulting';
                              }}
                            style={{borderRadius: 20}}>
                        Learn More
                      </Button>
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
                                                height: "auto",
                                                width: "auto"}}>
            <Container>
              
              <Container fluid style={{paddingTop: 200, paddingBottom: 50}}>
                <Grid style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }} columns={2}>
                  <a href="https://www.facebook.com/ucladatares" target="_blank">
                    <Icon inverted size="huge" color="white" name='facebook' fitted/>
                  </a>
                  <a href="https://twitter.com/DataresUcla" target="_blank">
                    <Icon inverted size="huge" color="white" name='twitter' fitted/>
                  </a>
                  <a href="https://www.linkedin.com/company/ucla-datares/" target="_blank">
                    <Icon inverted size="huge" color="white" name='linkedin' fitted/>
                  </a>
                  <a href="https://www.instagram.com/ucladatares/" target="_blank">
                    <Icon inverted size="huge" color="white" name='instagram' fitted/>
                  </a>
                  <a href="https://www.youtube.com/channel/UCmKnJ7aUWRcpfc2NMo2-_Hw" target="_blank">
                    <Icon  inverted size="huge" color="white" name='youtube' fitted/>
                  </a>
                </Grid>
                
              </Container>
            </Container>
          </div>
             
        </div>
        
        );
    }
}

export default Home;