import React from "react";
import {Container, Grid, Button, Tab} from 'semantic-ui-react';

import general_info from '../Assets/FAQ/general_info';
import research_info from '../Assets/FAQ/research_info';
import datablog_info from '../Assets/FAQ/datablog_info';
import consulting_info from '../Assets/FAQ/consulting_info';

import ReactMarkdown from 'react-markdown';

const panes = [
    {
        menuItem: 'General',
        render: () => <Tab.Pane attached={false} style={{textAlign: 'left', padding: '5%'}}>
                            <ReactMarkdown source={general_info} />
                      </Tab.Pane>,
    },
    {
        menuItem: 'Data Blog',
        render: () => <Tab.Pane attached={false} style={{textAlign: 'left', padding: '5%'}}>
                            <ReactMarkdown source={datablog_info} />
                      </Tab.Pane>,
    },
    {
        menuItem: 'Research',
        render: () => <Tab.Pane attached={false} style={{textAlign: 'left', padding: '5%'}}>
                            <ReactMarkdown source={research_info} />
                     </Tab.Pane>,
    },
    {
        menuItem: 'Consulting',
        render: () => <Tab.Pane attached={false} style={{textAlign: 'left', padding: '5%'}}>
                            <ReactMarkdown source={consulting_info} />
                     </Tab.Pane>,
    }
]

class JoinUs extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: '#333b65'}}>
                <div style={{color: 'white'}}>
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
                <div style={{paddingLeft: '20%', paddingRight: '20%', paddingTop: '10%', paddingBottom: '10%'}}>
                    <div style={{textAlign: 'center', color: 'white', paddingBottom: '10%', paddingTop: '10%'}}>
                            <h1 style={{fontSize: '1.5em'}}>Learn More About DataRes!</h1>
                    </div>
                    <Tab menu={{ color: 'orange'}} panes={panes} />
                </div>
            </div>
        )
    }
}

export default JoinUs;
