// Import React Components
import React from 'react';
import {Header, Button, Icon,
    Grid, Container, Image} from 'semantic-ui-react';
// import {Link} from 'react-router-dom'
// Import CSS
import '../Styles/Home.css';
import 'semantic-ui-css/semantic.min.css';

import blogImage from '../Assets/DataBlog/blog_image.svg';
import researchImage from '../Assets/Research/research_image.svg';
import consultingImage from '../Assets/Consulting/consulting_image.svg';
import athleticsImage from '../Assets/Consulting/Clients/ucla-athletics.png';

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
                <Grid style={{paddingTop: '8%'}}>
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

          <div style={{paddingTop: '10%', paddingBottom: '10%'}}>
            <Container>
              <Header>
                Branches
              </Header>
              <Grid className='our-branches'>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <p className='branch-name'>Data Blog</p>
                    <p className='branch-description'>Creating data-backed narratives</p>
                    <Image centered src={blogImage} size='small'></Image>
                  </Grid.Column>
                  <Grid.Column>
                    <p className='branch-name'>Research</p>
                    <p className='branch-description'>Pushing the limits of machine learning</p>
                    <Image centered src={researchImage} size='small'></Image>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                <Grid.Column>
                    <p className='branch-name'>Consulting</p>
                    <p className='branch-description'>Developing data-driven solutions</p>
                    <Image centered src={consultingImage} size='small'></Image>
                  </Grid.Column>
                  <Grid.Column>
                    <p className='branch-name'>UCLA Athletics</p>
                    <p className='branch-description'>Providing next-gen sports analytics for a legendary program</p>
                    <Image centered src={athleticsImage} size='small'></Image>
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
