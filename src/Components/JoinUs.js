import React from "react";
import {Container, Grid, Button} from 'semantic-ui-react';

// const JoinUs = () => 
class JoinUs extends React.Component {
    render() {
        return (
            <div>
                <div style={{backgroundColor: '#333b65', color: 'white', paddingBottom: '20%'}}>
                    <Container>
                        <div style={{textAlign: 'center', color: 'white', paddingBottom: '10%', paddingTop: '10%'}}>
                            <h1 style={{fontSize: '1.5em'}}>Join our team!</h1>
                        </div>
                        <Grid>
                            <Grid.Row columns={2}>
                                <Grid.Column>
                                    <p style={{fontSize: '.7em', textAlign: "left"}}>
                                        {/* Recruiting for each of the DataRes teams happens at the beginning of every quarter, and more info can be found on the specific applications for this recruiting cycle on the 
                                        application below.  Please check out our Facebook and Instagram for the most
                                        up to date information about applications.                                     */}
                                        Recruiting for each of the DataRes teams happens at the beginning of every quarter,
                                        and currently we preparing to open applications for Fall 2022 during Week 0.
                                        Please check our Facebook and Instagram for the most up to date information
                                        about applications and when they'll be released!
                                    </p>
                                </Grid.Column>
                                <Grid.Column>
                                <div style={{marginTop: '5%', paddingTop: '20%'}}>
                                            <Button  color="white" size="large"
                                                onClick={() => {
                                                    window.open('https://airtable.com/shrB31U11OMoyyoxV', "_blank");
                                                }}
                                                >
                                                Apply!</Button>
                                        </div>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </div>
            </div>
        )
    }
}

export default JoinUs;
