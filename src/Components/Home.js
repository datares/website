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
          <div >
            <Container fluid>
              <Image src={logo} size="huge" centered></Image>
            <br></br>
            <p>
              <strong>
                The Premier Data Science Organization @ UCLA
              </strong> 
            </p><br></br>
            <Button size="massive" color="orange" style={{fontSize: "1em", 
                                                          borderRadius: 35, 
                                                          width: "23%"}}>
              Join Us
            </Button>
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
                    <Header style={{fontSize: "3.5em", color: 'white'}} centered>18</Header>
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
                      <a href='/datablog'>
                      <Button size="huge" color="orange" style={{fontSize: "0.9em", 
                                                          borderRadius: 35, 
                                                          width: "50%"}}>
                        Learn More
                      </Button></a>
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
                    <a href="/research">
                    <Button size="huge" color="orange" style={{fontSize: "0.9em", 
                                                          borderRadius: 35, 
                                                          width: "50%"}}>
                          Learn More
                    </Button></a>
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
                      <a href='/consulting'>
                      <Button size="huge" color="orange" style={{fontSize: "0.9em", 
                                                          borderRadius: 35, 
                                                          width: "50%"}}>
                          Learn More
                      </Button></a>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </div>

          <div className="contribute-header">
            <Container>
              <Header style={{fontSize: "2em"}}>
                Want To Contribute To DataRes? <br></br> Sponsor Us!
              </Header>
              <Button size="massive" color="orange" style={{fontSize: "1em", 
                                                          borderRadius: 35, 
                                                          width: "30%",
                                                          marginTop: '5%'}}>
                Sponsorship Brochure
              </Button>
              <div className='contribute-header-description'>
                <p style={{fontSize: "0.9em"}}>
                If you are interested in learning more about our organization or collaborating with us, 
                you can reach out to us at <br></br> 
                <a href="mailto:ucladatares@gmail.com">ucladatares@gmail.com</a> or get in touch with us online.
                </p>
                <div style={{marginTop: '5%'}}>
                  <Button color='facebook'>
                    <Icon name='facebook' fitted/>
                  </Button>
                  <Button color='twitter'>
                    <Icon name='twitter' fitted/>
                  </Button>
                  <Button color='linkedin'>
                    <Icon name='linkedin' fitted/>
                  </Button>
                  <Button color='instagram'>
                    <Icon name='instagram' fitted/>
                  </Button>
                  <Button color='youtube'>
                    <Icon name='youtube' fitted/>
                  </Button>
                </div>     
              </div>
            </Container>
          </div>

          <div className='Footer' style={{backgroundImage: `url(${bottomWave})`,
                                                backgroundSize: "cover",
                                                height: "auto",
                                                width: "auto"}}>
            <Container>
              <p>
              © DataRes 2020 
              </p>
            </Container>
          </div>
        </div>
        );
    }
}

export default Home;