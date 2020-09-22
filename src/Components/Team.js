// Import React Components
import React from 'react';
import {Header, Container, Image, 
            Grid, Segment} from 'semantic-ui-react';

// Import JS
import '../Styles/Team.css';
import '../Styles/Utils.css';
import 'semantic-ui-css/semantic.min.css';

// Import Images
import wave from '../Assets/Team/wave.svg';

// Import Profiles
import arnav from '../Assets/Team/Profiles/arnav.png';
import aden from '../Assets/Team/Profiles/aden.png';
import andy from '../Assets/Team/Profiles/andy.png';
import dhruv from '../Assets/Team/Profiles/dhruv.png';
import francesco from '../Assets/Team/Profiles/francesco.png';
import gautam from '../Assets/Team/Profiles/gautam.png';
import michelle from '../Assets/Team/Profiles/michelle.png';
import raghava from '../Assets/Team/Profiles/raghava.png';
import varchasvi from '../Assets/Team/Profiles/varchasvi.png';


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
        'name': 'Gautam Nambiar',
        'title': 'Vice-President',
        'image': gautam
    },
    {
        'name': 'Varchasvi Vedula',
        'title': 'Workshop Head',
        'image': varchasvi
    },
    {
        'name': 'Andy Shen',
        'title': 'Design Head',
        'image': andy
    }
]
const row2 = [
    {
        'name': 'Michelle Lee',
        'title': 'Data Blog Head',
        'image': michelle
    },
    {
        'name': 'Francesco Colonnese',
        'title': 'Research Head',
        'image': francesco
    },
    {
        'name': 'Dhruv Chakraborty',
        'title': 'Consulting Head',
        'image': dhruv
    },
    {
        'name': 'Aden Chiu',
        'title': 'Finance and Marketing Head',
        'image': aden
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

                <div style={{backgroundImage: `url(${wave})`,
                        backgroundSize: "cover",
                        minHeight: '80vh',
                        maxHeight: '120vh',
                        width: "auto", 
                        paddingTop: 50}}>

                    {/* Team Description */}
                    <Container>
                    <div style={{paddingTop: '10%'}}>
                        <Container>
                                <Grid columns={2}>
                                    <Grid.Column>
                                {row1.map(user => (
                                    <Segment>
                                        <Image centered src={user.image} size='small'></Image>
                                        <Header style={{fontSize: 20, color: 'black'}}>{user.name}</Header>
                                        <Header style={{fontSize: 16, color: '#F2A173'}}>{user.title}</Header>
                                    </Segment>
                                ))}
                                    </Grid.Column>
                                    <Grid.Column>
                                {row2.map(user => (
                                    <Segment>
                                        <Image centered src={user.image} size='small'></Image>
                                        <Header style={{fontSize: 20, color: 'black'}}>{user.name}</Header>
                                        <Header style={{fontSize: 16, color: '#F2A173'}}>{user.title}</Header>
                                    </Segment>
                                ))}
                                    </Grid.Column>
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
