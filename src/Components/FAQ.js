// Import Components
import React from 'react';
import {Header, Tab, Segment, Container} from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';

// Import JS
import '../Styles/Utils.css';
import '../Styles/FAQ.css';

// Import Images
import bottomWave from '../Assets/Home/bottom_wave.svg';

// Markdown Content
import general_info from '../Assets/FAQ/general_info';
import research_info from '../Assets/FAQ/research_info';
import datablog_info from '../Assets/FAQ/datablog_info';

const panes = [
    {
        menuItem: 'General',
        render: () => <Tab.Pane attached={false} style={{textAlign: 'left', padding: '5%'}}>
                            <ReactMarkdown source={general_info} />
                      </Tab.Pane>,
    },
    {
        menuItem: 'Data Blog',
        render: () => <Tab.Pane attached={false} style={{textAlign: 'left', padding: '5%'}}>
                            <ReactMarkdown source={datablog_info} />
                      </Tab.Pane>,
    },
    {
        menuItem: 'Research',
        render: () => <Tab.Pane attached={false} style={{textAlign: 'left', padding: '5%'}}>
                            <ReactMarkdown source={research_info} />
                     </Tab.Pane>,
    }
]

class FAQ extends React.Component {
    
    componentDidMount() {
        const {handleActive} = this.props;
        handleActive("FAQ");
    }

    render() {
        return (
            <div>
                
                <div>
                    <Container>
                        <div className='Title' style={{paddingBottom: '3%'}}>
                            <Header style={{fontSize: '1em', textAlign: 'left'}}> FAQ </Header>
                        </div>
                    </Container>
                </div>
                
                <div>
                    <Container style={{paddingBottom: 50}}>
                        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
                    </Container>
                </div>

                <div style={{backgroundImage: `url(${bottomWave})`,
                                                backgroundSize: "cover",
                                                height: "45vh",
                                                width: "auto"}}>

                </div>
            
            </div>
        );
    }
}

export default FAQ;