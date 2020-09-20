// Import Components
import React from 'react';
import {Header, Container, Image, 
            Card, Grid} from 'semantic-ui-react';

// Import JS
import '../Styles/Research.css';
import '../Styles/Utils.css';
import 'semantic-ui-css/semantic.min.css';

import YouTube from 'react-youtube';

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
    render() {
        var youtubeOpts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 0
            }
        };
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
                                    </p>
                                </Grid.Column>
                                <Grid.Column>
                                    <Image src={researchImage} size='large'></Image>
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

                
                <Grid columns={2}>
                    {/* Will replace with medium API for dynamic updates when 
                    access token is approved */}
                    <Grid.Row>
                        <div>
                        <Container fluid>
                            <div className='Latest-Research-Title'>
                                <Header>
                                    Latest Research Articles
                                </Header>
                            </div>
                            <div>
                                {/* TODO: Need to create an auto grid */}
                                {Articles.map(article => (
                                        <div className="Gallery">
                                        <a href={article.url} rel="noopener noreferrer" target="_blank">
                                        <Card>
                                            <Image src={article.image} wrapped ui={false}></Image>
                                            <Card.Content>
                                                <Card.Header>{article.title}</Card.Header><br></br>
                                                <Card.Meta>{article.meta}</Card.Meta><br></br>
                                            </Card.Content>
                                            <Card.Content extra>
                                                <span style={{color: "black"}}>
                                                    {article.authors}
                                                </span>
                                            </Card.Content>
                                        </Card>
                                        </a>
                                        </div>
                                ))}
                            </div>
                        </Container>
                        </div>
                    </Grid.Row>
                    <Grid.Row>
                        <YouTube videoId="FgzM3zpZ55o" opts={youtubeOpts} onReady={this._onReady} />;         
                    </Grid.Row>
                </Grid>

            </div>
        );
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
}

export default Research;