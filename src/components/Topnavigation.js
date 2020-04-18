import React from 'react';

import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

class Topnavigation extends React.Component{

    render(){
    return(
        <div className="top-navigation"> 
        <Nav>
        <NavItem>
          <NavLink href="#">Exam</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Subject</NavLink>
        </NavItem>
        <NavItem>
          <Link to="/">Logout</Link>
        </NavItem>
        <NavItem>
          <NavLink>Disabled Link</NavLink>
        </NavItem>
      </Nav>
       </div>
    )
}
}

export default Topnavigation;
