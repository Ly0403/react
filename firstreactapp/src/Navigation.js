import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
//export public
// extend inheritance
export default class Navigation extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.info.title}</h2>
        <Nav>
          <NavItem>
            <NavLink active href="#">
              {this.props.info.menuItem1}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">{this.props.info.menuItem2}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">
            {this.props.info.menuItem3}
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
