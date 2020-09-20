// Import React Modules
import React from 'react';
import {Menu, Grid} from 'semantic-ui-react';
import {BrowserRouter as Router, 
  Switch, Route, Link} from 'react-router-dom';

// Import custom modules
import Home from './Components/Home.js';
import DataBlog from './Components/DataBlog.js';
import Research from './Components/Research.js';
import Consulting from './Components/Consulting.js';
import Team from './Components/Team.js';

// Import CSS
import './App.css';
import 'semantic-ui-css/semantic.min.css';

// Import Images
import navbarWave from './Assets/navbar_wave.svg';

class App extends React.Component {
  constructor() {
    super()
    this.state = { activeItem: 'Home' }
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render () {
    const {activeItem} = this.state;
    return (
      <div className="App">

          <div style={{backgroundImage: `url(${navbarWave})`,
                       backgroundSize: "cover",
                       height: "45vh",
                       width: "auto"}}>
            <div className="Navbar-items">

            <Menu position="right" size="massive" secondary>
              <Menu.Menu position='right'>
                <Router>
                <Grid>
                <Grid.Row>
                  <Link to="/">
                    <Menu.Item
                      name='Home'
                      active={activeItem === 'Home'}
                      onClick={this.handleItemClick}
                      style={{color: "white",
                              fontWeight: "bold",
                              fontSize: "1.2em"}} />
                  </Link>
                  <Link to='/datablog'>
                    <Menu.Item
                      name='DataBlog'
                      active={activeItem === 'DataBlog'}
                      onClick={this.handleItemClick}
                      style={{color: "white", 
                              fontWeight: "bold",
                              fontSize: "1.2em"}} />
                  </Link>
                  <Link to='/research'>
                    <Menu.Item
                      name='Research'
                      active={activeItem === 'Research'}
                      onClick={this.handleItemClick}
                      style={{color: "white", 
                              fontWeight: "bold",
                              fontSize: "1.2em"}} />
                  </Link>
                  <Link to='/consulting'>
                    <Menu.Item
                      name='Consulting'
                      active={activeItem === 'Friends'}
                      onClick={this.handleItemClick}
                      style={{color: "white", 
                              fontWeight: "bold",
                              fontSize: "1.2em"}} />
                  </Link>
                  <Link to='/team'>
                    <Menu.Item
                      name='Team'
                      active={activeItem === 'Team'}
                      onClick={this.handleItemClick}
                      style={{color: "white", 
                              fontWeight: "bold",
                              fontSize: "1.2em"}} />
                  </Link>

                  </Grid.Row>

                  <Grid.Row>
                  
                  <Switch>
                    <Route exact path="/">
                      <Home />
                    </Route>
                    <Route exact path="/datablog">
                      <DataBlog />
                    </Route>
                    <Route exact path='/research'>
                      <Research />
                    </Route>
                    <Route exact path='/consulting'>
                      <Consulting />
                    </Route>
                    <Route exact path='/team'>
                      <Team />
                    </Route>
                  </Switch>

                  </Grid.Row>
                  </Grid>
                </Router>
              </Menu.Menu>
            </Menu>

            </div>
          </div>

      </div>
    );
  }
}

export default App;
