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
import wave from '../Assets/Research/wave.svg';

var Articles = [
    {
        'url': 'https://medium.com/@ucladatares/rlette-casino-roulette-through-reinforcement-learning-67e865843f0d',
        'image': 'https://miro.medium.com/max/1000/0*hOZaW3_QrZA0r1EC',
        'title': 'RLette — Casino Roulette through Reinforcement Learning',
        'meta': 'July 27 2020',
        'authors': 'Francesco Colonnese @fcolo_, Andrei Rekesh @AndreiRekesh'
    },
    {
        'url': 'https://medium.com/@ucladatares/predicting-speed-from-video-frames-dissecting-the-comma-ai-challenge-5da697b55886',
        'image': 'https://miro.medium.com/max/1400/0*JdRMZiL3PuxhGMvC',
        'title': 'Predicting speed from video frames — Dissecting the comma.ai challenge',
        'meta': 'July 27 2020',
        'authors': 'Francesco Colonnese @fcolo_, Andrei Rekesh @AndreiRekesh'
    }
]

class Research extends React.Component {
    componentDidMount(){
        const {handleActive} = this.props;
        handleActive("Research");
    }
    render() {
        // var youtubeOpts = {
        //     height: '390',
        //     width: '640',
        //     playerVars: {
        //         autoplay: 0
        //     }
        // };
        return (
            <div className='Body'>
                
                {/* Main Description  */}
                <div className="Header">
                    <Container>
                        <Grid>
                            <Grid.Row columns={2}>
                                <Grid.Column>
                                <div className='Title'>
                                    <Header> Research </Header>
                                </div>
                                    <p className='Description'>
                                        Our teams investigates a range of advanced machine learning problems 
                                        primarily involving deep learning and reinforcement learning. 
                                        <Divider/>
                                    <div style={{marginTop: '5%'}}>
                                            <Button  fluid floated="right" color="orange" size="massive"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.location.href='https://airtable.com/shrHMxx13Z10UdXnC';
                                                }}>Apply</Button>
                                        </div>
                                    </p>
                                </Grid.Column>
                                <Grid.Column>
                                    <Image src={researchImage} size='large' style={{marginTop: '3%'}}></Image>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </div>

                {/* Wave Image */}
                <div style={{backgroundImage: `url(${wave})`,
                                backgroundSize: "cover",
                                height: "50vh",
                                width: "auto"}}>
                </div>

                {/* Ideally, add react search bar */}

                <Container>
                <Container fluid>
                                <Header style={{fontSize: 40}}>
                                    Latest Research Articles
                                </Header>
                            <div>
                                {/* TODO: Need to create an auto grid */}
                                {Articles.map(article => (
                                        <Container style={{padding: 20}}>
                                        <a href={article.url} rel="noopener noreferrer" target="_blank">
                                        <Segment size="small" onClick={() => {}}>
                                            <Image centered size="large" src={article.image}></Image>
                                                <Header style={{fontSize: 20}}>{article.title}</Header>
                                                <Header style={{fontSize: 15}}>{article.meta}</Header>
                                                <div style={{ fontSize: 12, color: "black"}}>
                                                    {article.authors}
                                                </div>
                                        </Segment>
                                        </a>
                                        </Container>
                                ))}
                            </div>
                        </Container>
                    
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