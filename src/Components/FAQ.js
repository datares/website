// Import Components
import React from 'react';
import {Header, Container} from 'semantic-ui-react';
// import ReactMarkdown from 'react-markdown';

// Import JS
import '../Styles/Utils.css';
import '../Styles/FAQ.css';

// Markdown Content
// import general_info from '../Assets/FAQ/general_info';
// import research_info from '../Assets/FAQ/research_info';
// import datablog_info from '../Assets/FAQ/datablog_info';
// import consulting_info from '../Assets/FAQ/consulting_info';


// const panes = [
//     {
//         menuItem: 'General',
//         render: () => <Tab.Pane attached={false} inverted={true} style={{textAlign: 'left', padding: '5%', backgroundColor: '#333b65'}}>
//                             <ReactMarkdown source={general_info} />
//                       </Tab.Pane>,
//     },
//     {
//         menuItem: 'Data Blog',
//         render: () => <Tab.Pane attached={false} inverted={true} style={{textAlign: 'left', padding: '5%', backgroundColor: '#333b65'}}>
//                             <ReactMarkdown source={datablog_info} />
//                       </Tab.Pane>,
//     },
//     {
//         menuItem: 'Research',
//         render: () => <Tab.Pane attached={false} inverted={true} style={{textAlign: 'left', padding: '5%', backgroundColor: '#333b65'}}>
//                             <ReactMarkdown source={research_info} />
//                      </Tab.Pane>,
//     },
//     {
//         menuItem: 'Consulting',
//         render: () => <Tab.Pane attached={false} inverted={true} style={{textAlign: 'left', padding: '5%', backgroundColor: '#333b65'}}>
//                             <ReactMarkdown source={consulting_info} />
//                      </Tab.Pane>,
//     }
// ]

class FAQ extends React.Component {
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
            
                
                {/* <div>
                    <Container style={{paddingBottom: 50}}>
                        <Tab menu={{ secondary: true, pointing: true, inverted: true }} panes={panes} />
                    </Container>
                </div> */}
                {/* add the team page here */}
            </div>
        );
    }
}

export default FAQ;