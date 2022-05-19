import React from 'react';
import {Header, Container, Image,
    Grid, Divider, Segment} from 'semantic-ui-react';

import wave from '../Assets/DataBlog/team_wave.svg';
import uclaAthletics from '../Assets/Consulting/Clients/ucla-athletics.png';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import datafest1 from "../Assets/Events/datafest1.jpg"
import datafest2 from "../Assets/Events/datafest2.jpg"
import datafest3 from "../Assets/Events/datafest3.jpg"
import datafest4 from "../Assets/Events/datafest4.jpg"

const Events = () => {
    const images = [datafest1, datafest2, datafest3, datafest4]

    return (
        <div className='Body'>
            {/* Main Description  */}
            <div className="Header">
                <Container>
                    <div className='Title'>
                        <Header>Events</Header>
                    </div>
                    <Grid>
                        <Grid.Row columns={2}>
                            <Grid.Column width={9} style={{marginTop: 20}}>
                                <p className='Description'>
                                    DataRes has a large presence on the UCLA campus and we
                                    often host events open to the wider campus community and
                                    find ourselves participating in various other events.
                                </p>
                            </Grid.Column>
                            <Grid.Column width={7}>
                                {/* <Image src={ uclaAthletics } align="right" size='medium'></Image> */}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
            
            {/* Add client list here */}
            <div style={{marginTop: '5%', paddingBottom: '10%'}}>
                <Container fluid>
                    <div style={{fontSize: 40, marginBottom: '5%', marginTop: '5%'}}>
                        <Header>
                            ASA DataFest
                        </Header>
                    </div>
                    
                    <div style={{alignItems: 'center', alignContent: 'center'}}>

                    <Container className='card-body'>
                        <Segment className='segment-body' size='big' onClick={() => {}} >
                            <Container>
                                {/* <Image src={uclaAthletics} centered size='small'></Image> */}
                                <Carousel autoPlay={true}>
                                    {images.map(
                                        e => <Image src={e} centered size="medium"></Image>
                                    )}
                                </Carousel>
                            </Container>
                            <Header style={{fontSize: 18}}>April 29 - May 1, 2022</Header>
                            <div style={{fontSize: 16, color: 'black'}}>
                                <Divider/>
                                <p>
                                    ASA DataFest@UCLA is an annual datathon hosted at UCLA and allows students to try and find the best insight, and communicate that insight, from a large, complex dataset in a time sensitive manner.
                                </p>
                                <p>This year, we had 23 DataRes members participate, including a team that won best use of statistical models!
                                </p>
                            </div>
                        </Segment>
                    </Container>
                    </div>
                </Container>
            </div>

            {/* Wave Image */}
            <div>
                <div style={{backgroundImage: `url(${wave})`,
                                                backgroundSize: "cover",
                                                height: "50vh",
                                                width: "auto",
                                                marginTop: '1%',
                                                paddingBottom: 50}}>
                    
                </div>
            </div>
        </div>
    )
}

export default Events;
