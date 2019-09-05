import React from 'react'
import {connect} from 'react-redux'
import {getContactsThunk} from '../store/contact'
import axios from 'axios'

class GetContacts extends React.Component {
  async componentDidMount() {
    try {
      const res = await axios.get(
        'https://www.people.googleapis.com/v1/people/me/connections?personFields=names,emailAddresses'
      )
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    let contacts = this.props.contacts
    return (
      <div className="get_contacts_main">
        <h1>Testing</h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  contacts: state.contact.allContacts
})

const mapDispatchToProps = dispatch => ({
  getContactsThunk: () => dispatch(getContactsThunk())
})

export default connect(mapStateToProps, mapDispatchToProps)(GetContacts)
