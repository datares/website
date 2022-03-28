import React from "react";
import {Header, Container, Image, Grid, Button, Divider} from 'semantic-ui-react';
import wave from '../Assets/DataBlog/team_wave.svg';
import logo from "../Assets/Home/logo.svg"

const JoinUs = (props) => {
    return (
        <div className='Body'>
                {/* Main Description  */}
                <div className="Header">
                    <Container>
                        <div className='Title'>
                            <Header> Join Us </Header>
                        </div>
                        <Grid>
                            <Grid.Row columns={2}>
                                <Grid.Column>
                                    <p className='Description'>
                                        Recruiting for each of the DataRes teams happens at the beginning of every quarter, and more info can be found on the specific applications for this recruiting cycle on the 
                                        application below.  Please check out our Facebook and Instagram for the most
                                        up to date information about applications.
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
                                    <Image src={logo} size='large'></Image>
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
                {/* <Container style={{paddingBottom: 50}}>
                    <Container fluid>
                                <Header style={{fontSize: 40, marginBottom: '5%', marginTop: '5%'}}>
                                    Latest Research Articles
                                </Header>
                    </Container>
                            <div style={{paddingTop: '2%'}}>
    
                            </div>
                </Container> */}
            </div>
    )
}

export default JoinUs;
