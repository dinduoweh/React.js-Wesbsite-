import React from 'react'
import { NavLink } from 'react-router-dom'

const activeStyle = {
  fontWeight: '600',
  textDecoration: 'underline',
}

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner container">
        <div className="brand">Oweh Jeremy</div>
        <div className="links">
          <NavLink end to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Home
          </NavLink>
          <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            About
          </NavLink>
          <NavLink to="/projects" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Projects
          </NavLink>
          <NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
