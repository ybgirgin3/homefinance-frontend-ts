import React, { Component, JSX } from 'react';
import { NavLink } from 'react-router-dom';

// const menu = (
//   <Menu>
//     <Menu.Item key="0">
//       <NavLink to="/expense/create">Create an Expense</NavLink>
//     </Menu.Item>
//     <Menu.Item key="1">
//       <NavLink to="/expense/create">Create an User</NavLink>
//     </Menu.Item>
//   </Menu>
// );

class Header extends Component {
  render(): JSX.Element {
    return (
      <nav>
        <NavLink to="/">LOGO</NavLink>
        <NavLink to="/create">Create</NavLink>
      </nav>
    );
  }
}

export default Header;
