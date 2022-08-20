// Import React Components
import React from 'react';
import {Header, Button, Icon,
    Grid, Container} from 'semantic-ui-react';
// import {Link} from 'react-router-dom'
// Import CSS
import '../Styles/Home.css';
import 'semantic-ui-css/semantic.min.css';


class Home extends React.Component {
    render() {
        return (
        <div>

          {/*
            insert some sort of cool animation
            ideas: animate distributions or something like that
           */}

          <div className="intro-header" style={{backgroundColor: '#333b65', paddingTop: '20%', paddingBottom: '20%'}}>
              <Container>
                <Grid>
                  <Grid.Row>
                    <Grid.Column style={{textAlign: 'center'}}>
                      <Header style={{fontSize: "1em", color: 'white'}}>
                        Welcome to the home of Data Science at UCLA
                      </Header>
                      <p style={{fontSize: "1em", color: 'white'}}>
                        At DataRes, we solve problems and craft stories with data.
                        We provide a platform for aspiring data scientists and analysts
                        to collaborate on impactful data projects. If you love playing
                        with data, creating powerful visualizations, or building
                        predictive models, you have a home at DataRes.
                      </p>
                      </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Container>
          </div>

          <div style={{paddingTop: '10%'}}>
            <Container>
              <Header>
                Branches
              </Header>
              <Grid className='our-branches'>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <p className='branch-name'>Data Blog</p>
                    <p className='branch-description'>Creating data-backed narratives</p>
                  </Grid.Column>
                  <Grid.Column>
                    <p className='branch-name'>Research</p>
                    <p className='branch-description'>Pushing the limits of machine learning</p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                <Grid.Column>
                    <p className='branch-name'>Consulting</p>
                    <p className='branch-description'>Developing data-driven solutions</p>
                  </Grid.Column>
                  <Grid.Column>
                    <p className='branch-name'>UCLA Athletics</p>
                    <p className='branch-description'>Stuff about athletics</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </div>

          <div style={{backgroundColor: '#333b65', paddingTop: '2.5%', paddingBottom: '2.5%', justifyContent: 'center'}}>
            <Container>
              <Grid>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <p style={{color: 'white'}} className='newsletter-text'>Want to stay up to date with all the latest DataRes news?</p>
                  </Grid.Column>
                  <Grid.Column>
                    <Button color='black' fontWeight="bold" href="https://ucladatares.us14.list-manage.com/subscribe?u=d8a2e69c43a898058be10fcdb&id=f153c9e211">Join our Mailing List!</Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </div>
          
          {/* Where we've been */}
          {/* <div>
            <Container style={{marginTop: '1%'}}>
              <Header style={{fontSize: 50}}>
                      Where We've Been
              </Header>
              <div>
                  <Image src={logos} size='massive' style={{marginTop: "5%", marginBottom: "5%"}} centered></Image>
              </div>
            </Container>
          </div> */}

          {/* <div className='Stats-header' style={{backgroundImage: `url(${numberWave})`,
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
          </div> */}

          {/* <div className='datablog-header' style={{backgroundImage: `url(${datablogWave})`,
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
                        <Button fluid floated='right' size="large" color="orange" 
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
                    <Button fluid floated='left' size="large" color="orange"
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

          <div className='consulting-header'>
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
                      <Button fluid floated='right' size="large" color="orange" 
                              style={{borderRadius: 20}}>
                        Learn More
                      </Button>
                      </Link>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </div> */}


          {/* <div className="subscribe-header">
            <Container>
              <div className='newsletter-subscribe'>
                <p style={{fontSize: "0.9em"}}>
                Want to stay up to date with all the latest DataRes news? Subscribe to our newsletter! <br/> 
                <span/> 
                </p>
              </div>
              <Button floated='center' size="large" color="orange" 
                            onClick={(e) => {
                                  e.preventDefault();
                                  window.location.href='https://ucladatares.us14.list-manage.com/subscribe?u=d8a2e69c43a898058be10fcdb&id=f153c9e211';
                              }}
                            style={{borderRadius: 30,
                                    width: '40%',
                                    marginTop: '5%',
                                    padding: 20,
                                    fontSize: 25}}>
                       Subscribe! 
              </Button>
            </Container>
          </div> */}

          {/* <div className="contribute-header">
            <Container>
              <Header style={{fontSize: "2em"}}>
                Want To Contribute To DataRes? <br></br>
              </Header>
              <Button floated='center' size="large" color="orange" 
                            onClick={(e) => {
                                  e.preventDefault();
                                  window.location.href='https://drive.google.com/file/d/17ypxJqurOepvSfPlGOYvGaoMzVQ5OmFv/view?usp=sharing';
                              }}
                            style={{borderRadius: 30,
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
                <a href="mailto:datares@ucla.edu">datares@ucla.edu</a> or get in touch with us online.
                </p>
                <div style={{marginTop: '5%'}}>
                    
                </div>     
              </div>
            </Container>
          </div> */}



          <div className='Footer'>
              <Container fluid>
                <div className="Social-media-icons">
                  <Grid style={{paddingTop: '15%'}}>
                      <a href="https://www.facebook.com/ucladatares" rel="noopener noreferrer" target="_blank">
                        <Icon size="huge" color="black" name='facebook' fitted/>
                      </a>
                      <a href="https://twitter.com/DataresUcla" rel="noopener noreferrer" target="_blank">
                        <Icon size="huge" color="black" name='twitter' fitted/>
                      </a>
                      <a href="https://www.linkedin.com/company/ucla-datares/" rel="noopener noreferrer" target="_blank">
                        <Icon size="huge" color="black" name='linkedin' fitted/>
                      </a>
                      <a href="https://www.instagram.com/ucladatares/" rel="noopener noreferrer" target="_blank">
                        <Icon size="huge" color="black" name='instagram' fitted/>
                      </a>
                      <a href="https://www.youtube.com/channel/UCmKnJ7aUWRcpfc2NMo2-_Hw" rel="noopener noreferrer" target="_blank">
                        <Icon size="huge" color="black" name='youtube' fitted/>
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
