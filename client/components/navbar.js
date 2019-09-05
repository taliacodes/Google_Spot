import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn, email}) => (
  <div className="nav_main">
    <div className="nav_logo">
      <div className="logo_holder">
        <Link to="/home">
          <h1 className="logo">SPOT</h1>
        </Link>
      </div>
      <hr />
      <div>
        <h5 className="logo_slogan">Meet. People. Seamlessly</h5>
      </div>
    </div>

    {isLoggedIn ? (
      <div className="logout_button_holder">
        {/* The navbar will show these links after you log in */}
        <button type="button">
          <a href="#" className="logout_button" onClick={handleClick}>
            Logout
          </a>
        </button>
      </div>
    ) : null}
  </div>
)

//if user needs login and signup buttons
// <div>
//   {/* The navbar will show these links before you log in */}
//   <Link to="/login">Login</Link>
//   <Link to="/signup">Sign Up</Link>
// <div/>
/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    email: state.user.email
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
