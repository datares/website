// Import React Components
import React from 'react';
import {Header, Container, Image, 
            Grid} from 'semantic-ui-react';

// Import JS
import '../Styles/Team.css';
import '../Styles/Utils.css';
import 'semantic-ui-css/semantic.min.css';

// Import Images
import logos from '../Assets/Team/logos.png';
import wave from '../Assets/Team/wave.svg';

// Import Profiles
import arnav from '../Assets/Team/Profiles/arnav.png';

var row1 = [
    {
        'name': 'Arnav Garg',
        'title': 'Co-President',
        'image': '../Assets/Team/Profiles/arnav.png'
    },
    {
        'name': 'Raghava Govil',
        'title': 'Co-President',
        'image': '../Assets/Team/Profiles/raghava.png'
    },
    {
        'name': 'Gautam Nambiar',
        'title': 'Vice-President',
        'image': '../Assets/Team/Profiles/gautam.png'
    },
    {
        'name': 'Varchasvi Vedula',
        'title': 'Workshop Head',
        'image': '../Assets/Team/Profiles/varchasvi.png'
    },
    {
        'name': 'Andy Shen',
        'title': 'Design Head',
        'image': '../Assets/Team/Profiles/andy.png'
    }
]

var row2 = [
    {
        'name': 'Michelle Lee',
        'title': 'Data Blog Head',
        'image': '../Assets/Team/Profiles/michelle.png'
    },
    {
        'name': 'Francesco Colonnese',
        'title': 'Research Head',
        'image': '../Assets/Team/Profiles/francesco.png'
    },
    {
        'name': 'Dhruv Chakraborty',
        'title': 'Consulting Head',
        'image': '../Assets/Team/Profiles/dhruv.png'
    },
    {
        'name': 'Aden Chiu',
        'title': 'Finance and Marketing Head',
        'image': '../Assets/Team/Profiles/aden.png'
    }
]


class Team extends React.Component {
    render() {
        return (
            <div class="Body">

             {/* Header/Title */}   
            <div className="Header">
                <Container>
                    <div className='Title'>
                        <Header>
                            Our Team
                        </Header>
                    </div>
                </Container>
            </div>

            {/* Team Description */}
            <div style={{backgroundImage: `url(${wave})`,
                                                backgroundSize: "cover",
                                                height: "100vh",
                                                width: "auto"}}>
                <Container>
                    <div>
                    <Grid>
                    <Grid.Row columns={5}>
                        {row1.map(user => (
                            <div style={{alignContent: "center", margin: "3%", color: 'white'}}>
                                <Grid.Column>
                                    <Image src={arnav} size='small'></Image>
                                    <p><strong>{user.name}</strong></p>
                                    <p>{user.title}</p>
                                </Grid.Column>
                            </div>
                        ))}
                    </Grid.Row>
                    <Grid.Row columns={4}>
                        {row2.map(user => (
                            <div style={{alignContent: "center", margin: "3%", color: 'white'}}>
                                <Grid.Column>
                                    <Image src={arnav} size='small'></Image>
                                    <p><strong>{user.name}</strong></p>
                                    <p>{user.title}</p>
                                </Grid.Column>
                            </div>
                        ))}
                    </Grid.Row>
                    </Grid>
                    </div>
                </Container>
            </div>

            {/* Where we've been */}
            <div className='Title' style={{textAlign: "center"}}>
                <Header>
                    Where We've Been
                </Header>
                <Image src={logos} size='massive' style={{marginTop: "8%", marginBottom: "10%"}} centered></Image>
            </div>

            </div>


        );
    }
}

export default Team;