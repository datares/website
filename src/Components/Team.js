// Import React Components
import React from 'react';
import {Header, Container, Image, 
            Grid, Segment, Icon} from 'semantic-ui-react';

// Import JS
import '../Styles/Team.css';
import '../Styles/Utils.css';
import 'semantic-ui-css/semantic.min.css';

// Import Images
import wave from '../Assets/Team/wave.svg';

// Import Profiles
import arnav from '../Assets/Team/Profiles/arnav.png';
import andy from '../Assets/Team/Profiles/andy.png';
import dhruv from '../Assets/Team/Profiles/dhruv.png';
import francesco from '../Assets/Team/Profiles/francesco.png';
import michelle from '../Assets/Team/Profiles/michelle.png';
import raghava from '../Assets/Team/Profiles/raghava.png';
import varchasvi from '../Assets/Team/Profiles/varchasvi.png';
import morgan from '../Assets/Team/Profiles/morgan.png';


const row1 = [
    {
        'name': 'Arnav Garg',
        'title': 'Co-President',
        'image': arnav
    },
    {
        'name': 'Raghava Govil',
        'title': 'Co-President',
        'image': raghava
    },
    {
        'name': 'Michelle Lee',
        'title': 'Data Blog Head',
        'image': michelle
    },
    {
        'name': 'Francesco Colonnese',
        'title': 'Research Head',
        'image': francesco
    }
]
const row2 = [
    {
        'name': 'Varchasvi Vedula',
        'title': 'Workshop Head',
        'image': varchasvi
    },
    {
        'name': 'Andy Shen',
        'title': 'Design Head',
        'image': andy
    },
    {
        'name': 'Dhruv Chakraborty',
        'title': 'Consulting Head',
        'image': dhruv
    },
    {
        'name': 'Morgan Neuwirth',
        'title': 'Social Head',
        'image': morgan
    }
]


class Team extends React.Component {
    componentDidMount(){
        const {handleActive} = this.props;
        handleActive("Team");
    }
    render() {
        return (
            <div>
            
                <div style={{paddingBottom: 30, paddingTop: 20}}>
                    <Header style={{fontSize: 80}}>
                        Our Team
                    </Header>
                </div>

            <div>
              <Container fluid>
                <div className="Social-media-icons">
                  <Grid>
                      <a href="https://www.facebook.com/ucladatares" rel="noopener noreferrer" target="_blank">
                        <Icon size="large" color="black" name='facebook' fitted/>
                      </a>
                      <a href="https://twitter.com/DataresUcla" rel="noopener noreferrer" target="_blank">
                        <Icon size="large" color="black" name='twitter' fitted/>
                      </a>
                      <a href="https://www.linkedin.com/company/ucla-datares/" rel="noopener noreferrer" target="_blank">
                        <Icon size="large" color="black" name='linkedin' fitted/>
                      </a>
                      <a href="https://www.instagram.com/ucladatares/" rel="noopener noreferrer" target="_blank">
                        <Icon size="large" color="black" name='instagram' fitted/>
                      </a>
                      <a href="https://www.youtube.com/channel/UCmKnJ7aUWRcpfc2NMo2-_Hw" rel="noopener noreferrer" target="_blank">
                        <Icon size="large" color="black" name='youtube' fitted/>
                      </a>
                  </Grid>
                </div>
              </Container>
              <Container>
                  <div style={{paddingTop: '3%', fontSize: '0.6em'}}>
                    <p>
                        <strong>Contact us:</strong> <u>ucladatares@gmail.com</u>
                    </p>
                  </div>
              </Container>
          </div>

                <div style={{backgroundImage: `url(${wave})`,
                        backgroundSize: "cover",
                        minHeight: '100vh',
                        height: '150vh',
                        width: "auto", 
                        paddingTop: 50}}>

                    {/* Team Description */}
                    <Container>
                    <div style={{paddingTop: '11%', alignItems: 'center', textAlign: 'center'}}>
                        <Container fluid style={{paddingBottom: '5%'}}>
                                <Grid>
                                    <Grid.Row centered>
                                        {row1.map(user => (
                                            <div className='Segment-alignment'>
                                                <Segment padded style={{backgroundColor: 'transparent', border: 0}}>
                                                    <Image centered src={user.image} size='small'></Image>
                                                    <Header style={{fontSize: 20, color: 'black'}}>{user.name}</Header>
                                                    <Header style={{fontSize: 17, color: '#F2A173'}}>{user.title}</Header>
                                                </Segment>
                                            </div>
                                        ))}
                                    </Grid.Row>
                                    <Grid.Row centered>                            
                                            {row2.map(user => (
                                                <div className='Segment-alignment'> 
                                                    <Segment padded style={{backgroundColor: 'transparent', border: 0}}>
                                                        <Image centered src={user.image} size='small'></Image>
                                                        <Header style={{fontSize: 20, color: 'black'}}>{user.name}</Header>
                                                        <Header style={{fontSize: 17, color: '#F2A173'}}>{user.title}</Header>
                                                    </Segment>
                                                </div>
                                            ))}
                                    </Grid.Row>
                                </Grid>
                        </Container>
                    </div>
                    </Container>
            </div>

            </div>
        );
    }
}

export default Team;
