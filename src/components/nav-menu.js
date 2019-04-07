import React from 'react'
import { Link } from "gatsby";

class NavMenu extends React.Component {
  render() {
    return (
      <nav style={{ display: 'flex', flex: 1 }}>
        <li style={{ listStyleType: 'none' }}>
          <Link to="/">Home</Link>
        </li>

        <li style={{ listStyleType: 'none' }}>
          <Link to="/contact">Contact</Link>
        </li>
      </nav>
    )
  }
}

export default NavMenu
