// Import Components
import React from 'react';
import {Header, Container, Image, 
            Segment, Grid, Button, Divider} from 'semantic-ui-react';

// Import JS
import '../Styles/Research.css';
import '../Styles/Utils.css';
import 'semantic-ui-css/semantic.min.css';

// import YouTube from 'react-youtube';

// Import Images
import researchImage from '../Assets/Research/research_image.svg';
import wave from '../Assets/Research/team_wave.svg';
var Articles = [
    {
        'url': 'https://ucladatares.medium.com/make-a-monet-image-style-transfer-with-cycle-gans-5475dcb525b8',
        'image': 'https://miro.medium.com/max/1400/0*FhgV2fS2zEKcm5S6',
        'title': 'Make-A-Monet: Image Style Transfer With Cycle GANs',
        'meta': 'July 1, 2021',
        'authors': 'Colin Curtis (@Colinpcurtis), Adhvaith Vijay'
    },
    {
        'url': 'https://ucladatares.medium.com/stock-market-trading-with-reinforcement-learning-df406c2c1935',
        'image': 'https://miro.medium.com/max/1400/0*P60tBy3dGPoWroA3',
        'title': 'Stock Market Trading With Reinforcement Learning',
        'meta': 'January 10, 2021',
        'authors': 'Nilay Shah, Colin Curtis (@Colinpcurtis), Shail Mirpuri'
    },
    {
        'url': 'https://medium.com/@ucladatares/rlette-casino-roulette-through-reinforcement-learning-67e865843f0d',
        'image': 'https://miro.medium.com/max/1000/0*hOZaW3_QrZA0r1EC',
        'title': 'RLette — Casino Roulette through Reinforcement Learning',
        'meta': 'July 27, 2020',
        'authors': 'Francesco Colonnese @fcolo_, Andrei Rekesh @AndreiRekesh'
    },
    {
        'url': 'https://medium.com/@ucladatares/predicting-speed-from-video-frames-dissecting-the-comma-ai-challenge-5da697b55886',
        'image': 'https://miro.medium.com/max/1400/0*JdRMZiL3PuxhGMvC',
        'title': 'Predicting speed from video frames — Dissecting the comma.ai challenge',
        'meta': 'July 27, 2020',
        'authors': 'Francesco Colonnese @fcolo_, Andrei Rekesh @AndreiRekesh'
    }
]

class Research extends React.Component {
    
    componentDidMount() {
        const {handleActive} = this.props;
        handleActive("Research");
    }
    
    render() {
        return (
            <div className='Body'>
                
                {/* Main Description  */}
                <div className="Header">
                    <Container>
                        <div className='Title'>
                            <Header> Research </Header>
                        </div>
                        <Grid>
                            <Grid.Row columns={2}>
                                <Grid.Column>
                                    <p className='Description'>
                                        Our teams investigates a range of advanced machine learning problems 
                                        primarily involving deep learning and reinforcement learning. 
                                        <Divider/>
                                    <div style={{marginTop: '5%'}}>
                                            <Button  fluid floated="right" color="orange" size="massive"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.open('https://airtable.com/shrB31U11OMoyyoxV', "_blank");
                                                }}>Apply</Button>
                                        </div>
                                    </p>
                                </Grid.Column>
                                <Grid.Column>
                                    <Image src={researchImage} size='large'></Image>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </div>

                <div style={{backgroundImage: `url(${wave})`,
                                backgroundSize: "cover",
                                height: "50vh",
                                width: "auto",
                                paddingBottom: 50}}>
                </div>
                {/* Ideally, add react search bar */}
                <Container style={{paddingBottom: 50}}>
                    <Container fluid>
                                <Header style={{fontSize: 40, marginBottom: '5%', marginTop: '5%'}}>
                                    Latest Research Articles
                                </Header>
                    </Container>
                            <div style={{paddingTop: '2%'}}>
                                {/* TODO: Need to create an auto grid */}
                                {Articles.map(article => (
                                        <Container className='card-body'>
                                            <a href={article.url} rel="noopener noreferrer" target="_blank">
                                            <Segment className='segment-body' style={{margin: 0}} size="big" onClick={() => {}}>
                                                <Image centered size="large" src={article.image}></Image>
                                                    <Header style={{fontSize: 20}}>{article.title}</Header>
                                                    <Header style={{fontSize: 16}}>{article.meta}</Header>
                                                    <div style={{ fontSize: 15, color: "black"}}>
                                                        {article.authors}
                                                    </div>
                                            </Segment>
                                            </a>
                                        </Container>
                                ))}
                            </div>
                    {/* </Container> */}
                </Container>
            </div>
        );
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
}

export default Research;