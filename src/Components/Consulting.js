// Import Components
import React from 'react';
import {Header, Container, Image,
            Grid} from 'semantic-ui-react';

// Import JS
import '../Styles/Consulting.css';
import '../Styles/Utils.css';
import 'semantic-ui-css/semantic.min.css';

// Import Images
import consultingImage from '../Assets/Consulting/consulting_image.svg';
import wave from '../Assets/Consulting/wave.svg';

class Consulting extends React.Component {
    render() {
        return (
            <div className='Body'>
                
            {/* Main Description  */}
            <div className="Header">
                    <Container>
                        <Grid>
                            <Grid.Row columns={2}>
                                <Grid.Column>
                                    <Image src={consultingImage} size='huge'></Image>
                                </Grid.Column>
                                <Grid.Column>
                                    <div className='Title'>
                                        <Header> Consulting </Header>
                                    </div>
                                    <p className='Description'>
                                    Our team offers pro-bono consulting to small businesses, leveraging 
                                    their data to generate meaningful insights. In doing so, we will 
                                    provide our more experienced members the opportunity to hone their 
                                    data science skillsets out in the real world. 
                                    </p>
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

                {/* Add client list here */}
                <div>
                    <Container fluid>
                        <div class='Latest-Title'>
                            <Header>
                                Stay tuned for updates.
                            </Header>
                        </div>
                    </Container>
                </div>

            </div>
        );
    }
}

export default Consulting;