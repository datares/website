// Import React Modules
import React from 'react';
import { BrowserRouter as Router, Switch,
  Route} from 'react-router-dom';

// Import custom modules
import Home from './Components/Home.js';
import FAQ from './Components/FAQ.js';
import DataBlog from './Components/DataBlog.js';
import Research from './Components/Research.js';
import Consulting from './Components/Consulting.js';
import Athletics from './Components/Athletics.js';
import Events from './Components/Events.js';
import JoinUs from "./Components/JoinUs";
import Team from './Components/Team.js';
import NavBar from './Components/NavBar.js';

import ScrollToTop from './Components/ScrollToTop.js'
// Import CSS
import './App.css';
import 'semantic-ui-css/semantic.min.css';


class App extends React.Component {
  render () {
    return (
      <div className="App">
          <div>
            <div className="Navbar-items">
                <Router basename="/">
                  <ScrollToTop />
                  <NavBar/>
                  <Switch>
                    <Route path='/faq'>
                      <FAQ />
                    </Route>
                    <Route path="/datablog">
                      <DataBlog  />
                    </Route>
                    <Route path='/research'>
                      <Research />
                    </Route>
                    <Route path='/consulting'>
                      <Consulting />
                    </Route>
                    <Route path='/athletics'>
                      <Athletics />
                    </Route>
                    <Route path='/events'>
                      <Events />
                    </Route>
                    <Route path='/team'>
                      <Team />
                    </Route>
                    <Route path="/join-us">
                      <JoinUs />
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
