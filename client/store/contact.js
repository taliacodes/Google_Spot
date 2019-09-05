import axios from 'axios'

const GET_CONTACTS = 'GET_CONTACTS'

const getContacts = contacts => ({
  type: GET_CONTACTS,
  contacts
})

export const getContactsThunk = () => async dispatch => {
  const res = await axios.get(`/api/contacts`)
  dispatch(getContacts(res.data))
}

const initialState = {
  allContacts: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        allContacts: action.contacts
      }
    default:
      return state
  }
}

export default reducer
