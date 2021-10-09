import React, { Component } from 'react';
import { Collapse, Nav, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { DropdownMenu, UncontrolledDropdown, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from 'gatsby';
import '../NavMenu.css';
// import Login from '../Login'

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);
    
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggleNavbar = this.logoutClicked.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  logoutClicked() {
    var history = this.props.history;
    alert('clicked...'+history)
  }

  render () {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container fluid>
            <NavbarBrand tag={Link} to="/">
              <img alt="" style={{width: '35px'}} src="../images/cross-sign.png" /> Solid Rock Hospital
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                {/* <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
                </NavItem> */}
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    <img alt="" src="../images/profile-photo.png" className="navbar-profile-photo" />
                  </DropdownToggle>
                  <DropdownMenu right>
                    {/* <DropdownItem>Profile</DropdownItem>
                    <DropdownItem>Settings</DropdownItem> */}
                    {/* <DropdownItem divider /> */}
                    <DropdownItem>
                      <Link to={'/login'}>Sign out</Link>
                    </DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
