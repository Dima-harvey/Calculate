import { ADD_HISTORY, CLEAR_HISTORY } from "@/constants"

const initialState = ['2+2','3+3']
const INITIAL_STATE = []

function history(state = initialState, action) {
  if (action.type === ADD_HISTORY) {
    return [...state, action.payload]
  }
  if (action.type === CLEAR_HISTORY) {
    return INITIAL_STATE
  }
  return state
}

export default history