// Import Components
import React from 'react';
import {Header, Container, Image,
            Grid, Divider} from 'semantic-ui-react';

// Import JS
import '../Styles/Consulting.css';
import '../Styles/Utils.css';
import 'semantic-ui-css/semantic.min.css';

// Import Images
import consultingImage from '../Assets/Consulting/consulting_image.svg';
import wave from '../Assets/Consulting/team_wave.svg';

// Client Images
import basePaws from '../Assets/Consulting/Clients/basepaws.jpg';

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
                                        Our team offers pro-bono consulting to small businesses, leveraging 
                                        their data to generate meaningful insights and provide concrete 
                                        business value.
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
                        <a href='https://www.basepaws.com/' rel="noopener noreferrer" target="_blank">
                            <Image src={basePaws} centered size='small'></Image>
                        </a>
                    </Container>
                </div>

            </div>
        );
    }
}

export default Consulting;