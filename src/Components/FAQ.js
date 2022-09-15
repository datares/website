import React from 'react';
import {Header, Container} from 'semantic-ui-react';
import Team from './Team';

import '../Styles/Utils.css';
import '../Styles/FAQ.css';



class FAQ extends React.Component {
    componentDidMount() {
        const {handleActive} = this.props;
        handleActive("FAQ");
    }

    render() {
        return (
            <div style={{backgroundColor: "#333b65", paddingBottom: '10%'}}>
                <div style={{ textAlign: 'left', paddingTop: '10%', paddingLeft: '20%', color: "white"}}>
                    <Container>
                        <Header style={{fontSize: '1em', color: "white"}}>What is DataRes?</Header>
                        <p style={{fontSize: '.5em', maxWidth: "60%"}}>DataRes is UCLA's first and largest student organization dedicated to fostering knowledge and growth in data science.  We provide a platform for aspiring data scientists and analysts to collaborate on impactful data projects. If you love playing with data, creating powerful visualizations, or building predictive models, you have a home at DataRes.</p>
                    </Container>
                </div>

                <div style={{ textAlign: 'left', paddingTop: '10%', paddingLeft: '20%', color: "white"}}>
                    <Header style={{fontSize: '1em', color: "white"}}>What teams do we have?</Header>
                    <p style={{fontSize: '.5em', maxWidth: "60%"}}>Currently DataRes has 4 teams: Data Blog, Consulting, Research, and UCLA Athletics.  Each of our teams are designed to teach their members about a specific area of data science and its application, while providing opportunities to learn new skills and apply your knowledge.</p>

                    <p style={{fontSize: '.5em', maxWidth: "60%"}}>Visit the specific team's page to learn more them!</p>
                </div>

                <div style={{ textAlign: 'left', paddingTop: '10%', paddingLeft: '20%', color: "white"}}>
                    <Header style={{fontSize: '1em', color: "white"}}>How do I join?</Header>
                    <p style={{fontSize: '.5em', maxWidth: "60%"}}>Each of our teams recruits on a quarterly basis, with applications opening around the beginning of week 1</p>
                </div>

                <Team handleActive={this.props.handleActive} />
            </div>
        );
    }
}

export default FAQ;