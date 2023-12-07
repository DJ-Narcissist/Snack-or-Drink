import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Navbar expand="md">
        {/* Goes to the homepage */}
        <NavLink exact to="/" className="navbar-brand">
          Snack or Booze
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            {/* Shows Snack tab in navbar */}
            <NavLink to="/snacks">Snacks</NavLink>
          </NavItem>

          <NavItem>
            {/*Shows Drinks tab in navbar */}
            <NavLink to="/drinks">Drinks</NavLink> 
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
