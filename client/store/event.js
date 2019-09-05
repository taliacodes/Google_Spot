import axios from 'axios'

const CREATE_EVENT = 'CREATE_EVENT'

const createEvent = event => ({
  type: CREATE_EVENT,
  event
})

export const createEventThunk = event => async dispatch => {
  const res = await axios.post('/api/events', event)
  dispatch(createEvent(res.data))
}

const initialState = {
  allEvents: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EVENT:
      return {
        ...state,
        allEvents: [...state.allEvents, action.event]
      }
    default:
      return state
  }
}

export default reducer
