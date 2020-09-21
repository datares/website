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
            <div >
             {/* Header/Title */}   
            <Container>
                    <div className='Title'>
                        
                    </div>
            </Container>
            {/* Team Description */}
            <div style={{paddingTop: 40, paddingBottom: 100}}>
            <div style={{paddingBottom: 100}}>
            <Header style={{fontSize: 80}}>
                            Our Team
            </Header>
            </div>
                <Container style={{paddingTop: 20}}>
                    <Grid>
                    <Grid.Row columns={5}>
                        {row1.map(user => (
                            <Grid.Column>
                                <Image centered src={user.image} size='small'></Image>
                                <Header style={{fontSize: 20}}>{user.name}</Header>
                                <Header style={{fontSize: 15}}>{user.title}</Header>
                            </Grid.Column>
                        ))}
                    </Grid.Row>
                    <Grid.Row columns={4}>
                        {row2.map(user => (
                             <Grid.Column>
                                <Image centered src={user.image} size='small'></Image>
                                <Header style={{fontSize: 20}}>{user.name}</Header>
                                <Header style={{fontSize: 15}}>{user.title}</Header>
                             </Grid.Column>
                        ))}
                    </Grid.Row>
                    </Grid>
                </Container>
            </div>
            <Header style={{fontSize:60}}>
                    Where We've Been
                </Header>
            {/* Where we've been */}
            <div style={{backgroundImage: `url(${wave})`,
                         backgroundSize: "cover",
                         width: "auto", 
                         paddingTop: 50}}>
                
                <Image src={logos} size='massive' style={{marginTop: "8%", marginBottom: "10%"}} centered></Image>
                <br/>
            </div>
            </div>
        );
    }
}

export default Team;
