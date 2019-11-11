import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

const Header = ({ siteTitle }) => {
  const [menuActive, setMenuActive] = useState(false)
  
  const burgerClassNames = `navbar-burger burger ${menuActive && 'is-active'}`
  const navbarClassNames = `navbar-menu ${menuActive && 'is-active'}`
  
  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a
          role="button"
          className={burgerClassNames}
          aria-label="menu"
          aria-expanded="false"
          onClick={(e) => setMenuActive(true)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={navbarClassNames}>
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>

          <Link className="navbar-item" to="/blog">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
