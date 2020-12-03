import React, { Component, useState } from 'react';
import {BrowserRouter as Router,Link,Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../actions/auth';
import logo from '../images/bietLogo.png';
import profile from '../images/logo_name.png';

// class Navbar_home extends Component {
    
//         log_out=(e)=>{
//             e.preventDefault();
//             localStorage.removeItem('token');
//             this.props.dispatch(logout());
            
    
//         };
        
    
//     render() {
//         //const {auth} = this.props;
//         const {isLoggedIn,inProgress,user} = this.props.auth;
//         return (
//                 <div className="Navbar">
//                    <div className="logo-icon"> 
//                     {/* <Link to="/">logo icon</Link> */}
//                     logo icon
//                    </div>
//                    {!isLoggedIn &&
//                    (<div>
//                        <Link to="/signIn">SignIn</Link>
//                        <Link to="/signUp">SignUp</Link>
//                    </div>)
//                    }
                   
//                 {isLoggedIn && 
//                 (<div>
//                     <form>
//                         <input type="text" placeholder="search a friend" />
//                         <button type="submit">search</button>
//                     </form>
//                     <Link to="/user/edit"><h3>{user.name}</h3></Link>
//                     <Link onClick={this.log_out}>Logout</Link>
//                 </div>)
//                 }
//            </div>
        
//         );
//     }
// }

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import Search from './Search';

const Navbar_home = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  /////// logout functionality ///////
          function log_out(e){
            e.preventDefault();
            localStorage.removeItem('token');
            props.dispatch(logout());
            
    
           };
 
  const {isLoggedIn,inProgress,user} =props.auth;

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/"><img src={logo} style={{height:"45px"}}/></NavbarBrand>
        {isLoggedIn && (<Search />)}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              {!isLoggedIn && (<NavLink href="/signIn" style={{marginLeft:"70vw",color:"white"}}>SignIn</NavLink>)}
            </NavItem>
            <NavItem>
            {!isLoggedIn && (<NavLink href="/signUp" style={{color:"white"}}>Register</NavLink>)}
            </NavItem>
            {isLoggedIn && (
              <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{marginLeft:"10vw",color:"white"}}>
              {user.name}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <Link to="/user/edit">Profile</Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                <Link onClick={log_out}>Logout</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            )}
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}



function mapStateToProps(state){
    return {
        auth:state.auth,
    };
}
export default connect(mapStateToProps)(Navbar_home);