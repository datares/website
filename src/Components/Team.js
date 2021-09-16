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
// import arnav from '../Assets/Team/Profiles/arnav.png';
// import andy from '../Assets/Team/Profiles/andy.png';
// import dhruv from '../Assets/Team/Profiles/dhruv.png';
// import francesco from '../Assets/Team/Profiles/francesco.png';
import michelle from '../Assets/Team/Profiles/michelle.png';
// import raghava from '../Assets/Team/Profiles/raghava.png';
// import varchasvi from '../Assets/Team/Profiles/varchasvi.png';
// import morgan from '../Assets/Team/Profiles/morgan.png';
import rebecca from '../Assets/Team/Profiles/rebecca.jpeg';
import nicole from '../Assets/Team/Profiles/nicole.jpeg';
import shail from '../Assets/Team/Profiles/shail.png';
import madison from '../Assets/Team/Profiles/madison.jpeg';
import ishaan from '../Assets/Team/Profiles/ishaan.png';
import grace from '../Assets/Team/Profiles/grace.jpeg';
import aileen from '../Assets/Team/Profiles/aileen.png';
import colin from '../Assets/Team/Profiles/colin.png';
import agrim from '../Assets/Team/Profiles/agrim.png';
import william from '../Assets/Team/Profiles/william.png';
import luke from '../Assets/Team/Profiles/luke.png';



const row1 = [
    {
        'name': 'Michelle Lee',
        'title': 'Co-President',
        'image': michelle,
        'linkedin': 'https://www.linkedin.com/in/michelle14lee'
    },
    {
        'name': 'Agrim Gupta',
        'title': 'Co-President',
        'image': agrim,
        'linkedin': 'https://www.linkedin.com/in/guptagrim'
    },
    {
        'name': 'Madison Kohls',
        'title': 'Co-Data Blog Head',
        'image': madison,
        'linkedin': 'https://www.linkedin.com/in/madison-kohls/'
    },
    {
        'name': 'Ishaan Shah',
        'title': 'Co-Data Blog Head',
        'image': ishaan,
        'linkedin': 'https://www.linkedin.com/in/varchasvi-vedula'
    }
    
]
const row2 = [
    {
        'name': 'Colin Curtis',
        'title': 'Research Head',
        'image': colin,
        'linkedin': 'https://www.linkedin.com/in/colin-curtis826/'
    },
    {
        'name': 'Rebecca Xu',
        'title': 'Design Head',
        'image': rebecca,
        'linkedin': 'https://www.linkedin.com/in/rebeccazxu/'
    },
    {
        'name': 'Grace Panos',
        'title': 'Co-Consulting Head',
        'image': grace,
        'linkedin': 'https://www.linkedin.com/in/grace-panos-b23342195/'
    },
    {
        'name': 'Aileen Tang',
        'title': 'Co-Consulting Head',
        'image': aileen,
        'linkedin': 'https://www.linkedin.com/in/aileen-tang'
    }
]

const row3 = [
    {
        'name': 'Shail Mirpuri',
        'title': 'People Analyst',
        'image': shail,
        'linkedin': 'https://www.linkedin.com/in/shail-mirpuri/'
    },
    {
        'name': 'Nicole Park',
        'title': 'Outreach Head',
        'image': nicole,
        'linkedin': 'https://www.linkedin.com/in/nicolepark4/'
    },
    {
        'name': 'William Huang',
        'title': 'UCLA Athletics PM*',
        'image': william,
        'linkedin': 'https://www.linkedin.com/in/whuang37/'
    },
    {
        'name': 'Luke Rivers',
        'title': '[newClientName] PM*',
        'image': luke,
        'linkedin': 'https://www.linkedin.com/in/luke-rivers/'
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
                        height: '185vh',
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
                                                <a href={user.linkedin} rel="noopener noreferrer" target='_blank'>
                                                <Segment padded style={{backgroundColor: 'transparent', border: 0}}>
                                                    <Image centered src={user.image} size='small'></Image>
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
                                                        <Image centered src={user.image} size='small'></Image>
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
                                                        <Image centered src={user.image} size='small'></Image>
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
                        <p padded style={{fontSize: 17, color: '#fcba03'}}><b> *PM = Project Manager</b></p>
                    </div>
                    </Container>
            </div>
            

            </div>
        );
    }
}

export default Team;
