import React, {Component} from 'react';
import {Dropdown, Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {
  isBrowser
} from "react-device-detect";
export default class Hello extends Component {
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render () {
      const {activeItem, handleItemClick} = this.props
      const colorCondition = (activeItem === "Home" && isBrowser)  ? "white" : "black";
      return (
        <div>
            <Menu style={{padding: 20}} position="right" size="large" secondary stackable>
                <Menu.Menu position="right">
                    <Link to="/">
                        <Menu.Item
                        name='Home'
                        active={activeItem === 'Home'}
                        onClick={handleItemClick}
                        style={{color: colorCondition,
                                fontWeight: "bold",
                                fontSize: "1.2em"}} />
                    </Link>
                    <Dropdown item openOnFocus text="Branches" style={{fontWeight: "bold", fontSize: "1.2em", color: colorCondition}}>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <Link to='/datablog'>
                                    <Menu.Item
                                    name='DataBlog'
                                    active={activeItem === 'DataBlog'}
                                    onClick={handleItemClick}
                                    style={{color: "black", 
                                            fontWeight: "bold"}} />
                                </Link>
                            </Dropdown.Item>
                    
                            <Dropdown.Item>
                                <Link to='/research'>
                                    <Menu.Item
                                    name='Research'
                                    active={activeItem === 'Research'}
                                    onClick={handleItemClick}
                                    style={{color: "black", 
                                            fontWeight: "bold"}} />
                                </Link>
                            </Dropdown.Item>

                            <Dropdown.Item>
                                <Link to='/consulting'>
                                    <Menu.Item
                                    name='Consulting'
                                    active={activeItem === 'Friends'}
                                    onClick={handleItemClick}
                                    style={{color: "black", 
                                            fontWeight: "bold"}} />
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to='/athletics'>
                                    <Menu.Item
                                    name='UCLA Athletics'
                                    active={activeItem === 'Athletics'}
                                    onClick={handleItemClick}
                                    style={{color: "black", 
                                            fontWeight: "bold"}} />
                                </Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown item openOnFocus text="Community" style={{fontWeight: "bold", fontSize: "1.2em", color: colorCondition}}>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <Link to='/events'>
                                    <Menu.Item
                                    name='Events'
                                    active={activeItem === 'Events'}
                                    onClick={handleItemClick}
                                    style={{color: "black", 
                                            fontWeight: "bold"}} />
                                </Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Link to='/team'>
                        <Menu.Item
                        name='Our Team'
                        active={activeItem === 'Our Team'}
                        onClick={handleItemClick}
                        style={{color: colorCondition, 
                                fontWeight: "bold",
                                fontSize: "1.2em"}} />
                    </Link>
                    <Link to="/faq">
                        <Menu.Item
                        name='FAQ'
                        active={activeItem === 'FAQ'}
                        onClick={handleItemClick}
                        style={{color: colorCondition,
                                fontWeight: "bold",
                                fontSize: "1.2em"}} />
                    </Link>
                    <Link to="join-us">
                        <Menu.Item
                        name='Join Us'
                        active={activeItem === 'Join Us'}
                        onClick={handleItemClick}
                        style={{color: colorCondition, 
                                fontWeight: "bold",
                                fontSize: "1.2em"}} />
                    </Link>
                </Menu.Menu>
            </Menu>
        </div>
    )}
}
