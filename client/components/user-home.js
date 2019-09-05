import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import CreateEvent from './create-event'
/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return (
    <div className="home_main">
      <div className="add_event">
        <Link to="/add" component={CreateEvent}>
          <img className="add" src="https://i.imgur.com/FFAg5ku.png" />
        </Link>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
