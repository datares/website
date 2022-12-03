// Import Components
import React from 'react';
import {Header, Container, Image,
            Grid, Divider, Segment, Icon, Button} from 'semantic-ui-react';

// Import JS
import '../Styles/Utils.css';
import 'semantic-ui-css/semantic.min.css';
import '../Styles/Consulting.css';

// Import Images
import consultingImage from '../Assets/Consulting/consulting_image.svg';

// Client Images
import clients from '../Assets/Consulting/Clients/clients.png';


class Consulting extends React.Component {
    componentDidMount(){
        const {handleActive} = this.props;
        handleActive("Consulting");
    }
    render() {
        return (
            <div style={{backgroundColor: "#333b65", color: 'white'}}>
                <div className="Header">
                    <Container>
                        <div className='Title'>
                            <h1 style={{fontSize: '1.5em'}}>Consulting</h1>
                        </div>
                        <Grid>
                            <Grid.Row columns={2}>
                                <Grid.Column width={9} style={{marginTop: 20}}>
                                    <p className='Description'>

                                        DataRes Consulting is a student organization dedicated to connecting well-trained, passionate UCLA students with companies to meaningfully convert their data to actionable insights and strategies.

                                        <br />
                                        <br />

                                        If you're interested in collaborating with DataRes Consulting, you can send us an <a href="https://docs.google.com/forms/d/e/1FAIpQLSesbIvmw-Ghy5jeXDJbfaXnEwtsVrwXL9ikIX3MG90ySQ49Vg/viewform">application</a> or contact us at <a href="mailto:ucladatares.partnerships@gmail.com">ucladatares.partnerships@gmail.com</a>!
                                        {/* <Divider/> */}
                                        {/* <div style={{marginTop: '5%'}}>
                                            <Button fluid floated="right" color="white" size="massive"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.open('https://forms.gle/ezvdkYiHzvYnrRWS8', "_blank");
                                                }}>
                                                Apply to be a Client
                                            </Button>
                                        </div> */}
                                    </p>    
                                </Grid.Column>
                                <Grid.Column width={7}>
                                    <Image src={ consultingImage } size='large'></Image>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                    
                </div>

                {/* Add client list here */}
                <div style={{marginTop: '5%', paddingBottom: '10%'}}>
                    <h1 style={{fontSize: '1.5em', paddingBottom: '5%' }}>Our Services</h1>
                    <Grid divided="vertically" style={{paddingLeft: '5%', paddingRight: '5%'}}>
                        <Grid.Row columns={4}>
                            <Grid.Column className="stuff">
                                <h1 className="services">Predictive Modeling</h1>
                                <h3 className="services" align="left">Our consultants use artificial intelligence algorithms to perform supervised and unsupervised machine learning.</h3>
                            </Grid.Column>
                            <Grid.Column>
                                <h1 className="services">Data Analysis</h1>
                                <h3 className="services">Our consultants can web scrape and use APIs to collect data, and analyze that data with various statistical techniques such as natural language processing.</h3>
                            </Grid.Column>
                            <Grid.Column>
                                <h1 className="services">Data Visualization</h1>
                                <h3 className="services">Our consultants create interactive, customizable visualizations and build easy-to-view dashboards.
                                </h3>
                            </Grid.Column>
                            <Grid.Column>
                                <h1 className="services">Data Driven Insights</h1>
                                <h3 className="services">Our consultants combine business strategy and data science to provide meaningful actionable insights on how to improve our client's business models.</h3>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    
                    <Container fluid>
                        <div>
                            <Header style={{fontSize: 40, marginBottom: '5%', marginTop: '5%', color: 'white'}}>
                                Who We've Worked With
                            </Header>
                        </div>

                        <Container>
                            <Image src={clients} centered size=".5"/>
                        </Container>
                        
                        <div style={{alignItems: 'center', alignContent: 'center'}}>
                            <Container className='card-body'>
                                <a href='https://www.basepaws.com/' rel="noopener noreferrer" target="_blank">
                                <Segment className='segment-body' size='big' onClick={() => {}}>
                                    {/* <Container>
                                        <Image src={clients} centered size='large'></Image>
                                    </Container> */}
                                    <Header style={{fontSize: 18}}>Client Testimonials</Header>
                                    <div style={{fontSize: 16, color: 'black', textAlign: 'left'}}>
                                        <p>“Hellosaurus had the privilege of working with the UCLA DataRes team during the 2021 to 2022 school year. We were extremely impressed with the team's creative analysis, technical chops, and clear communication. The actionable insights surfaced by UCLA DataRes will prove immensely valuable to Hellosaurus's continued growth.”</p>
                                        {/* <Divider/>
                                        <p> Some key questions we asked while providing consulting services to them – What insights can we derive through analyzing customer survey responses? How can we improve customer satisfaction for a company selling feline DNA health tests?</p>
                                        <p> For them, we Deployed NLP models (topic modeling) on longer survey responses to identify trends and key reasons for negative reviews . We also dentified patterns between healthcare expenses and feline health to drive marketing decisions on which testing kit should be recommended to which type of client.</p> */}
                                    </div>
                                </Segment>
                                </a>
                            </Container>

                        </div>

                    </Container>
                </div>

            </div>
        );
    }
}

export default Consulting;