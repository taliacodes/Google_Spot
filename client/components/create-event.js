import React from 'react'
import {connect} from 'react-redux'
import {createEventThunk} from '../store/event'
import {Link} from 'react-router-dom'

const defaultState = {
  title: '',
  description: '',
  startTime: '',
  endTime: '',
  location: ''
}

class CreateEvent extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      description: '',
      startTime: '',
      endTime: '',
      location: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    try {
      this.props.createEventThunk(this.state)
      this.setState(defaultState)
    } catch (error) {
      this.setState({
        errorMessage: `There was a problem creating the todo`
      })
    }
  }

  render() {
    return (
      <div className="create_event_main">
        <h3 className="create_event_header">Create New Event:</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Title</label>
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <label>Description</label>
          <input
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <label>Start Time</label>
          <input
            name="startTime"
            type="datetime-local"
            value={this.state.startTime}
            onChange={this.handleChange}
          />
          <label>End Time</label>
          <input
            name="endTime"
            type="datetime-local"
            value={this.state.endTime}
            onChange={this.handleChange}
          />
          <button type="button">Calculate Time Slots</button>
          <label>Location</label>
          <input
            name="location"
            type="text"
            value={this.state.location}
            onChange={this.handleChange}
          />
          <button type="button">Calculate Location</button>
          <hr />
          <input type="submit" value="Submit" />
        </form>
        <Link to="/contacts">
          <button type="button">Get Contacts</button>
        </Link>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createEventThunk: event => dispatch(createEventThunk(event))
})

export default connect(null, mapDispatchToProps)(CreateEvent)
