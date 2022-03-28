// Import React Modules
import React from 'react';
import {HashRouter as Router, 
  Switch, Route} from 'react-router-dom';

// Import custom modules
import Home from './Components/Home.js';
import FAQ from './Components/FAQ.js';
import DataBlog from './Components/DataBlog.js';
import Research from './Components/Research.js';
import Consulting from './Components/Consulting.js';
import JoinUs from "./Components/JoinUs";
import Team from './Components/Team.js';
import NavBar from './Components/NavBar.js'
import ScrollToTop from './Components/ScrollToTop.js'
// Import CSS
import './App.css';
import 'semantic-ui-css/semantic.min.css';

// Import Images
import navbarWave from './Assets/nav_wave.svg';

class App extends React.Component {
  constructor(props) {
    super()
    this.state = { activeItem: 'Home' }
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleActive = (e, new_active) => this.setState({ activeItem: new_active })
  render () {
    const {activeItem} = this.state;
    return (
      <div className="App">

          <div style={{backgroundImage: activeItem === 'Home' ? `url(${navbarWave})`: '',
                       backgroundSize: "cover",
                       height: "45vh",
                       width: "auto"}}>
            <div className="Navbar-items">
                <Router basename="/">
                  <ScrollToTop />
                  <NavBar activeItem={activeItem} 
                          handleItemClick={this.handleItemClick}/>
                  <Switch>
                    <Route path='/faq'>
                      <FAQ handleActive={this.handleActive} />
                    </Route>
                    <Route path="/datablog">
                      <DataBlog handleActive={this.handleActive}  />
                    </Route>
                    <Route path='/research'>
                      <Research handleActive={this.handleActive} />
                    </Route>
                    <Route path='/consulting'>
                      <Consulting handleActive={this.handleActive} />
                    </Route>
                    <Route path='/team'>
                      <Team handleActive={this.handleActive} />
                    </Route>
                    <Route path="/join-us">
                      <JoinUs handleActive={this.handleActive} />
                    </Route>
                    <Route exact path="/">
                      <Home />
                    </Route>
                  </Switch>
                </Router>
            </div>
          </div>

      </div>
    );
  }
}

export default App;
