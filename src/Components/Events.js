import React from 'react';
import {Header, Container, Image,
    Grid, Divider, Segment} from 'semantic-ui-react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import datafest1 from "../Assets/Events/datafest1.jpg"
import datafest2 from "../Assets/Events/datafest2.jpg"
import datafest3 from "../Assets/Events/datafest3.jpg"
import datafest4 from "../Assets/Events/datafest4.jpg"
import laser_tag from "../Assets/Events/laser_tag.jpg"
import datalearn from "../Assets/Events/datalearn.jpg"
import consulting from "../Assets/Events/consulting.jpg"

const Events = () => {
    const datafest_images = [datafest1, datafest2, datafest3, datafest4]
    const social_images = [
        {
            src: laser_tag,
            content: "laser tag social!"
        },
        {
            src: datalearn,
            content: "DataLearn info session"
        }, {
            src: consulting,
            content: "consulting team social"
        }
    ]
    
    // label={{ as: 'a', color: 'blue', content: e.content, ribbon: true, }} 
    // TODO: figure out what we want to do with this

    return (
        <div style={{backgroundColor: "#333b65", color: "white"}}>
            <div className="Header">
                <Container>
                    <div className='Title'>
                        <h1 style={{fontSize: '1.5em'}}>Events</h1>
                    </div>
                    <Grid>
                        <Grid.Row columns={2}>
                            <Grid.Column width={9} style={{marginTop: 20}}>
                                <p className='Description'>
                                    DataRes has a large presence on the UCLA campus and we
                                    often host or participate in events open to the wider 
                                    campus community
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
            
            <div style={{marginTop: '5%', paddingBottom: '10%'}}>
                <Container fluid>
                    <div style={{fontSize: 40, marginBottom: '5%', marginTop: '5%'}}>
                        <h1 style={{fontSize: '1.5em'}}>ASA DataFest</h1>
                    </div>

                    <div style={{alignItems: 'center', alignContent: 'center'}}>

                    <Container className='card-body'>
                        <Segment className='segment-body' size='big' onClick={() => {}} >
                            <Container>
                                <Carousel autoPlay={true}>
                                    {datafest_images.map(
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
                                <p>This year, we had 25+ DataRes members participate, including a team that won best use of statistical models!
                                </p>
                            </div>
                        </Segment>
                    </Container>
                    </div>
                </Container>
            </div>

            <div style={{marginTop: '5%', paddingBottom: '10%'}}>
                <Container fluid>
                    <div style={{fontSize: 40, marginBottom: '5%', marginTop: '5%'}}>
                        <h1 style={{fontSize: '1.5em'}}>Social and Educational Events</h1>
                    </div>
                    
                    <div style={{alignItems: 'center', alignContent: 'center'}}>

                    <Container className='card-body'>
                        <Segment className='segment-body' size='big' onClick={() => {}} >
                            <Container>
                                <Carousel autoPlay={true}>
                                    {social_images.map(
                                        e =>
                                            <Image src={e.src} centered size="medium"></Image>
                                    )}
                                    
                                </Carousel>
                            </Container>
                            <Header style={{fontSize: 18}}>Club Community</Header>
                            <div style={{fontSize: 16, color: 'black'}}>
                                <Divider/>
                                <p>
                                    At DataRes, we place a large emphasis on building a community within our club and we host a wide range of social and educational events for the public members!
                                </p>
                                <p>
                                    A few examples, shown above, include a laser tag social hosted on campus and a public info session about our DataLearn track happening during Fall 2022.
                                </p>
                            </div>
                        </Segment>
                    </Container>
                    </div>
                </Container>
            </div>            
        </div>
    )
}

export default Events;
