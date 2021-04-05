// Import Components
import React from 'react';
import {Header, Container, Image,
            Grid, Divider, Segment, Icon} from 'semantic-ui-react';

// Import JS
import '../Styles/Utils.css';
import 'semantic-ui-css/semantic.min.css';
import '../Styles/Consulting.css';

// Import Images
import consultingImage from '../Assets/Consulting/consulting_image.svg';
import wave from '../Assets/Consulting/team_wave.svg';

// Client Images
import basePaws from '../Assets/Consulting/Clients/basepaws.jpg';
import uclaAthletics from '../Assets/Consulting/Clients/ucla-athletics.png';

class Consulting extends React.Component {
    componentDidMount(){
        const {handleActive} = this.props;
        handleActive("Consulting");
    }
    render() {
        return (
            <div className='Body'>
                
            {/* Main Description  */}
            <div className="Header">
                    <Container>
                        <div className='Title'>
                            <Header> Consulting </Header>
                        </div>
                        <Grid>
                            <Grid.Row columns={2}>
                                <Grid.Column width={9} style={{marginTop: 20}}>
                                    <p className='Description'>
                                        Our team offers pro-bono consulting services to local businesses and 
                                        labs, leveraging their data to generate meaningful insights and create 
                                        tangible impact wherever possible.
                                    </p>
                                    <Divider></Divider>     
                                </Grid.Column>
                                <Grid.Column width={7}>
                                    <Image src={ consultingImage } size='large'></Image>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
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

                {/* Add client list here */}
                <div style={{marginTop: '5%', paddingBottom: '10%'}}>
                    
                    <Container fluid>
                        <div style={{fontSize: 40, marginBottom: '5%', marginTop: '5%'}}>
                            <Header>
                                Our Clients
                            </Header>
                        </div>
                        
                        <div style={{alignItems: 'center', alignContent: 'center'}}>

                            <Container className='card-body'>
                                <a href='https://www.uclabruins.com/' rel="noopener noreferrer" target="_blank">
                                <Segment className='segment-body' size='big' onClick={() => {}}>
                                    <Container>
                                        <Image src={uclaAthletics} centered size='small'></Image>
                                    </Container>
                                    <Header style={{fontSize: 18}}> Winter 2021 </Header>
                                    <div style={{fontSize: 16, color: 'black'}}>
                                        <p>
                                            UCLA Athletics has more than 100 NCAA Titles. Athletes from UCLA
                                            have produced 261 Olympic medals, ranking UCLA higher in medal count 
                                            than most countries.
                                        </p>
                                    </div>
                                </Segment>
                                </a>
                            </Container>

                            <Container className='card-body'>
                                <a href='https://www.basepaws.com/' rel="noopener noreferrer" target="_blank">
                                <Segment className='segment-body' size='big' onClick={() => {}}>
                                    <Container>
                                        <Image src={basePaws} centered size='small'></Image>
                                    </Container>
                                    <Header style={{fontSize: 18}}> Fall 2020, Winter 2021 </Header>
                                    <div style={{fontSize: 16, color: 'black'}}>
                                        <p> Basepaws is the world's first at-home cat DNA test. 
                                            Basepaws Cat DNA Test helps cat owners learn about their 
                                            cat's health, breed traits, and habits - all with just a bit 
                                            of DNA, collected at home.</p>
                                        <p> Basepaws recently received a investment on ABC's 'Shark Tank'
                                            <a href="https://www.youtube.com/watch?v=fWDZOMO0dr0&ab_channel=Basepaws-CatDNATest" rel="noopener noreferrer" target="_blank">
                                                <span> (watch here <Icon name='external alternate'/>) </span> 
                                            </a> 
                                            for its at-home feline DNA test CatKit. Robert Herjavec and 
                                            Kevin O'Leary, investors on the reality show, agreed to a 
                                            joint investment.</p>
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