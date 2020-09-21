import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default class Hello extends Component {
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render () {
      const {activeItem, handleItemClick} = this.props
      return <div>
            <Menu style={{padding: 20}} position="right" size="large" secondary>
              <Menu.Menu position='right'>
                  <Link to="/">
                    <Menu.Item
                      name='Home'
                      active={activeItem === 'Home'}
                      onClick={handleItemClick}
                      style={{color: activeItem === "Home" ? "white" : "black",
                              fontWeight: "bold",
                              fontSize: "1.2em"}} />
                  </Link>
                  <Link to='/datablog'>
                    <Menu.Item
                      name='DataBlog'
                      active={activeItem === 'DataBlog'}
                      onClick={handleItemClick}
                      style={{color: activeItem === "Home" ? "white" : "black", 
                              fontWeight: "bold",
                              fontSize: "1.2em"}} />
                  </Link>
                  <Link to='/research'>
                    <Menu.Item
                      name='Research'
                      active={activeItem === 'Research'}
                      onClick={handleItemClick}
                      style={{color: activeItem === "Home" ? "white" : "black", 
                              fontWeight: "bold",
                              fontSize: "1.2em"}} />
                  </Link>
                  <Link to='/consulting'>
                    <Menu.Item
                      name='Consulting'
                      active={activeItem === 'Friends'}
                      onClick={handleItemClick}
                      style={{color: activeItem === "Home" ? "white" : "black", 
                              fontWeight: "bold",
                              fontSize: "1.2em"}} />
                  </Link>
                  <Link to='/team'>
                    <Menu.Item
                      name='Team'
                      active={activeItem === 'Team'}
                      onClick={handleItemClick}
                      style={{color: activeItem === "Home" ? "white" : "black", 
                              fontWeight: "bold",
                              fontSize: "1.2em"}} />
                  </Link>
              </Menu.Menu>
            </Menu> 
      </div>
    }
  }