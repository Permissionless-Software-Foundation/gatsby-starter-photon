import React from 'react'
import { Link } from "gatsby";
import styled from 'styled-components'

const NavItem = styled.li`
  list-style-type: none;
  padding-right: 5px;
  padding-left: 5px;
`

class NavMenu extends React.Component {
  render() {
    return (
      <nav style={{ display: 'flex', flex: 1 }}>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>

        <NavItem>
          <Link to="/contact">Contact</Link>
        </NavItem>

        <NavItem>
          <Link to="/roadmap">Roadmap</Link>
        </NavItem>
      </nav>
    )
  }
}

export default NavMenu
