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
import andrew from '../Assets/Team/Profiles/andrew.jpg';
import anika from '../Assets/Team/Profiles/anika.jpg';
import avishek from '../Assets/Team/Profiles/avishek.JPG';
import brandon from '../Assets/Team/Profiles/brandon.JPG';
import colin from '../Assets/Team/Profiles/colin.jpeg';
import derek from '../Assets/Team/Profiles/derek.jpg';
import irsyad from '../Assets/Team/Profiles/irsyad.jpg';
import isha from '../Assets/Team/Profiles/isha.PNG';
import ishaan from '../Assets/Team/Profiles/ishaan.png';
import ivan from '../Assets/Team/Profiles/ivan.jpg';
import justin from '../Assets/Team/Profiles/justin.jpeg';
import karina from '../Assets/Team/Profiles/karina.jpeg';
import madison from '../Assets/Team/Profiles/madison.jpg';
import raymond from '../Assets/Team/Profiles/raymond.jpg';
import sausy from '../Assets/Team/Profiles/sausy.jpeg';
import taylor from '../Assets/Team/Profiles/taylor.jpeg';

const row1 = [
    {
        'name': 'Colin Curtis',
        'title': 'Co-President',
        'image': colin,
        'linkedin': 'https://www.linkedin.com/in/colin-curtis826/'
    },
    {
        'name': 'Madison Kohls',
        'title': 'Co-President',
        'image': madison,
        'linkedin': 'https://www.linkedin.com/in/madison-kohls/'
    },
    {
        'name': 'Anika Chakrabarti',
        'title': 'Co-Data Blog Head',
        'image': anika,
        'linkedin': 'https://www.linkedin.com/in/anika-chakrabarti-394b91205/'
    },
    {
        'name': 'Derek Nakagawa',
        'title': 'Co-Data Blog Head',
        'image': derek,
        'linkedin': '#'
    }
]

const row2 = [
    {
        'name': 'Irsyad Adam',
        'title': 'Research Head',
        'image': irsyad,
        'linkedin': 'https://www.linkedin.com/in/irsyad-adam-02a1a7196/'
    },
    {
        'name': 'Taylor Kim',
        'title': 'Marketing/Design Head',
        'image': taylor,
        'linkedin': 'https://www.linkedin.com/in/taylor-kim-b7a406221/'
    },
    {
        'name': 'Isha Shah',
        'title': 'Co-Consulting Head',
        'image': isha,
        'linkedin': 'https://www.linkedin.com/in/ishashah146/'
    },
    {
        'name': 'Avishek Ghosh',
        'title': 'Co-Consulting Head',
        'image': avishek,
        'linkedin': 'https://www.linkedin.com/in/ghosh-avishek/'
    }
]

const row3 = [
    {
        'name': 'Ishaan Shah',
        'title': 'Co-Beginner Track Head',
        'image': ishaan,
        'linkedin': 'https://www.linkedin.com/in/ishaanshah24/'
    },
    {
        'name': 'Ivan Guan',
        'title': 'Co-Beginner Track Head',
        'image': ivan,
        'linkedin': 'https://www.linkedin.com/in/ivanguan1/'
    },
    {
        'name': 'Justin Gong',
        'title': 'Finance Chair',
        'image': justin,
        'linkedin': '#'
    },
    {
        'name': 'Brandon Zhao',
        'title': 'Outreeach Head',
        'image': brandon,
        'linkedin': 'https://www.linkedin.com/in/brandonzhao1/'
    },
]

const row4 = [
    {
        'name': 'Sausthava Malakar',
        'title': 'Membership Head',
        'image': sausy,
        'linkedin': 'https://www.linkedin.com/in/sausthava/'
    },
    {
        'name': 'Raymond Bai',
        'title': 'UCLA Athletics PM*',
        'image': raymond,
        'linkedin': 'https://www.linkedin.com/in/raymondbai/'
    },
    {
        'name': 'Karina Santoso',
        'title': 'UCLA Athletics PM*',
        'image': karina,
        'linkedin': 'https://www.linkedin.com/in/karina-santoso/'
    },
    {
        'name': 'Drew Letvin',
        'title': 'UCLA Athletics PM*',
        'image': andrew,
        'linkedin': 'https://www.linkedin.com/in/drew-letvin/'
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
                        Our Board Members
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
                        minHeight: '120vh',
                        height: '300vh',
                        width: "auto", 
                        paddingTop: 200}}>

                    {/* Team Description */}
                    <Container>
                    <div style={{paddingTop: '11%', alignItems: 'center', textAlign: 'center'}}>
                        <Container fluid style={{paddingBottom: '5%'}}>
                                <Grid>
                                    <Grid.Row centered>
                                        {row1.map(user => (
                                            <div className='Segment-alignment'>
                                                <a href={user.linkedin} rel="noopener noreferrer" target='_blank'>
                                                <Segment padded style={{backgroundColor: 'transparent', border: 0}}>
                                                    <Image centered src={user.image} height={175}></Image>
                                                    <Header style={{fontSize: 20, color: 'black'}}>{user.name}</Header>
                                                    <Header style={{fontSize: 17, color: '#fcba03'}}>{user.title}</Header>
                                                </Segment>
                                                </a>
                                            </div>
                                        ))}
                                    </Grid.Row>
                                    <Grid.Row centered>                            
                                            {row2.map(user => (
                                                <div className='Segment-alignment'> 
                                                    <a href={user.linkedin} rel="noopener noreferrer" target='_blank'>
                                                    <Segment padded style={{backgroundColor: 'transparent', border: 0}}>
                                                        <Image centered src={user.image} height={175}></Image>
                                                        <Header style={{fontSize: 20, color: 'black'}}>{user.name}</Header>
                                                        <Header style={{fontSize: 17, color: '#fcba03'}}>{user.title}</Header>
                                                    </Segment>
                                                    </a>
                                                </div>
                                            ))}
                                    </Grid.Row>
                                    <Grid.Row centered>                            
                                            {row3.map(user => (
                                                <div className='Segment-alignment'> 
                                                    <a href={user.linkedin} rel="noopener noreferrer" target='_blank'>
                                                    <Segment padded style={{backgroundColor: 'transparent', border: 0}}>
                                                        <Image centered src={user.image} height={175}></Image>
                                                        <Header style={{fontSize: 20, color: 'black'}}>{user.name}</Header>
                                                        <Header style={{fontSize: 17, color: '#fcba03'}}>{user.title}</Header>
                                                    </Segment>
                                                    </a>
                                                </div>
                                            ))}
                                    </Grid.Row>
                                    <Grid.Row centered>                            
                                            {row4.map(user => (
                                                <div className='Segment-alignment'> 
                                                    <a href={user.linkedin} rel="noopener noreferrer" target='_blank'>
                                                    <Segment padded style={{backgroundColor: 'transparent', border: 0}}>
                                                    <Image centered src={user.image} height={175}></Image>
                                                        <Header style={{fontSize: 20, color: 'black'}}>{user.name}</Header>
                                                        <Header style={{fontSize: 17, color: '#fcba03'}}>{user.title}</Header>
                                                    </Segment>
                                                    </a>
                                                </div>
                                            ))}
                                    </Grid.Row>
                                </Grid>
                        </Container>
                    </div>
                    <div style={{textAlign: 'left', alignItems: 'left', paddingLeft: '11%',paddingBottom: '11%'}}>
                        <p padded style={{fontSize: 17, color: '#fcba03'}}><b> *PM = Project Manager with a consulting client</b></p>
                    </div>
                    </Container>
            </div>
            

            </div>
        );
    }
}

export default Team;
