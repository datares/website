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
                                        tangible impact wherever possible. <a href = "https://drive.google.com/file/d/1W56qbR0LU40fM_U2HiSjUBkKL9VnlXCM/edit" download><u> Download our resume. </u></a>
                                        <Divider/>
                                        <div style={{marginTop: '5%'}}>
                                            <Button fluid floated="right" color="orange" size="massive"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.open('https://forms.gle/ezvdkYiHzvYnrRWS8', "_blank");
                                                }}>
                                                Apply to be a Client
                                            </Button>
                                        </div>
                                    </p>    
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
                                <Segment className='segment-body' size='big' onClick={() => {}} >
                                    <Container>
                                        <Image src={uclaAthletics} centered size='small'></Image>
                                    </Container>
                                    <Header style={{fontSize: 18}}> Winter 2021, Spring 2021 </Header>
                                    <div style={{fontSize: 16, color: 'black'}}>
                                        <p>
                                            UCLA Athletics has 100+ NCAA Titles. Athletes from UCLA
                                            have produced 261 Olympic medals, making UCLA more successful 
                                            than most countries.
                                        </p>
                                        <Divider/>
                                        <p> We tried to find out how we could leverage data on athlete wellbeing to optimize training plans and in-game strategies across a multitude of sports programs.
                                        </p>
                                        <p> View our <a href = "https://drive.google.com/file/d/1W56qbR0LU40fM_U2HiSjUBkKL9VnlXCM/edit"><u> resume here </u></a> to read about the various data consulting services we provide to UCLA Athletics, to make their Athletics program even more legendary. For a more detailed description of our workflow for UCLA Athletics, you can read <a href = "https://drive.google.com/file/d/18z7tYx06rYoaF7cDGOroDZxt7MnWtvL1/view?usp=sharing"><u>our documentation here</u></a> (presented on DataRes Demo Day Spring '21).
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
                                        <p> Basepaws is the world's first at-home cat DNA test. Their test helps cat owners learn about their cat's health, breed traits, and habits with just a bit of DNA.</p>
                                        <p> Basepaws recently received an investment on ABC's popular pitch deck reality TV Show – 'Shark Tank'
                                            <a href="https://www.youtube.com/watch?v=fWDZOMO0dr0&ab_channel=Basepaws-CatDNATest" rel="noopener noreferrer" target="_blank">
                                                <span> (watch here <Icon name='external alternate'/>) </span> 
                                            </a> 
                                            for its at-home feline DNA test CatKit. Robert Herjavec and 
                                            Kevin O'Leary, investors on the reality show, agreed to a 
                                            joint investment.</p>
                                        <Divider/>
                                        <p> Some key questions we asked while providing consulting services to them – What insights can we derive through analyzing customer survey responses? How can we improve customer satisfaction for a company selling feline DNA health tests?</p>
                                        <p> For them, we Deployed NLP models (topic modeling) on longer survey responses to identify trends and key reasons for negative reviews . We also dentified patterns between healthcare expenses and feline health to drive marketing decisions on which testing kit should be recommended to which type of client.</p>
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